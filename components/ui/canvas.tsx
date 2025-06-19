"use client";

// Define proper TypeScript interfaces and classes
interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface OscillatorConfig {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineConfig {
  spring: number;
}

interface Position {
  x: number;
  y: number;
}

interface CanvasContext extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

class Oscillator {
  private phase: number;
  private offset: number;
  private frequency: number;
  private amplitude: number;
  private value: number = 0;

  constructor(config: OscillatorConfig = {}) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    this.value = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.value;
  }

  getValue(): number {
    return this.value;
  }
}

class Node implements NodeType {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;

  constructor() {
    // Initialize with default values
  }
}

class Line {
  private spring: number;
  private friction: number;
  private nodes: Node[] = [];

  constructor(config: LineConfig) {
    this.spring = config.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    
    for (let n = 0; n < E.size; n++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let spring = this.spring;
    let currentNode = this.nodes[0];
    
    currentNode.vx += (pos.x - currentNode.x) * spring;
    currentNode.vy += (pos.y - currentNode.y) * spring;
    
    for (let i = 0; i < this.nodes.length; i++) {
      currentNode = this.nodes[i];
      
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        currentNode.vx += (prevNode.x - currentNode.x) * spring;
        currentNode.vy += (prevNode.y - currentNode.y) * spring;
        currentNode.vx += prevNode.vx * E.dampening;
        currentNode.vy += prevNode.vy * E.dampening;
      }
      
      currentNode.vx *= this.friction;
      currentNode.vy *= this.friction;
      currentNode.x += currentNode.vx;
      currentNode.y += currentNode.vy;
      spring *= E.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.nodes.length < 2) return;
    
    let currentX = this.nodes[0].x;
    let currentY = this.nodes[0].y;
    
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);
    
    for (let i = 1; i < this.nodes.length - 2; i++) {
      const current = this.nodes[i];
      const next = this.nodes[i + 1];
      currentX = 0.5 * (current.x + next.x);
      currentY = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, currentX, currentY);
    }
    
    if (this.nodes.length >= 2) {
      const secondLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    }
    
    ctx.stroke();
    ctx.closePath();
  }
}

// Global variables with proper typing
let ctx: CanvasContext | null = null;
let oscillator: Oscillator | null = null;
const pos: Position = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function initializeLines(): void {
  lines = [];
  for (let i = 0; i < E.trails; i++) {
    lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
}

function handleMouseMove(e: MouseEvent | TouchEvent): void {
  if ('touches' in e && e.touches) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  } else if ('clientX' in e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
  e.preventDefault();
}

function handleTouchStart(e: TouchEvent): void {
  if (e.touches.length === 1) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  }
}

function onFirstInteraction(e: MouseEvent | TouchEvent): void {
  document.removeEventListener('mousemove', onFirstInteraction);
  document.removeEventListener('touchstart', onFirstInteraction);
  
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleMouseMove);
  document.addEventListener('touchstart', handleTouchStart);
  
  handleMouseMove(e);
  initializeLines();
  render();
}

function render(): void {
  if (!ctx || !ctx.running || !oscillator) return;
  
  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';
  ctx.strokeStyle = `hsla(${Math.round(oscillator.update())},100%,50%,0.025)`;
  ctx.lineWidth = 10;
  
  for (const line of lines) {
    line.update();
    line.draw(ctx);
  }
  
  ctx.frame++;
  window.requestAnimationFrame(render);
}

function resizeCanvas(): void {
  if (!ctx) return;
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = function (): void {
  if (typeof window === 'undefined') return; // SSR guard
  
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;
  
  const context = canvas.getContext('2d');
  if (!context) return;
  
  ctx = context as CanvasContext;
  ctx.running = true;
  ctx.frame = 1;
  
  oscillator = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  
  document.addEventListener('mousemove', onFirstInteraction);
  document.addEventListener('touchstart', onFirstInteraction);
  document.body.addEventListener('orientationchange', resizeCanvas);
  window.addEventListener('resize', resizeCanvas);
  
  window.addEventListener('focus', () => {
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
  });
  
  window.addEventListener('blur', () => {
    if (ctx) {
      ctx.running = true;
    }
  });
  
  resizeCanvas();
};