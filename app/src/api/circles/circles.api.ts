import { Circle } from '../../types/circle';
import circles from './data.json';

export async function join(tribeId) {}

export async function leave(tribeId) {}

export async function read({ limit = 50 } = {}): Promise<Circle[]> {
  return circles;
}

export async function get(slug: string): Promise<Circle> {
  return circles[0];
}
