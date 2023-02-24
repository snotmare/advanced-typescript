import { Equipment } from './equipment';

export interface Character {
	id: number;
	name: string;
	level: number;
	equipment?: Equipment[];
}