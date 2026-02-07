export interface Teddy {
  id: number;
  name: string;
  color: string;
  emoji: string;
  message: string;
  animation: 'wave' | 'bounce' | 'hug' | 'heart' | 'spin';
}

export interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}
