import type { Conference } from './conference';

export interface Team {
  id: string;
  name: string;
  conference: Conference;
}
