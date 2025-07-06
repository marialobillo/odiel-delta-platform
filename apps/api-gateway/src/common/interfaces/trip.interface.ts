export interface Route {
  departure: string;
  destination: string;
  waypoints?: string[];
  distance: number;
}

export interface Boat {
  name: string;
  type: string;
  capacity: number;
  features: string[];
}

export interface Schedule {
  departure: Date;
  arrival: Date;
  duration: number;
}

export enum WeatherStatus {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  MODERATE = 'moderate',
  POOR = 'poor',
}

export enum Level {
  EASY = 'easy',
  MODERATE = 'moderate',
  CHALLENGING = 'challenging',
}

export interface Crew {
  captainName: string;
  assistants: number;
  certifications: string[];
}

export interface ITrip {
  name: string;
  route: Route;
  boat: Boat;
  schedule: Schedule;
  capacity: number;
  weather: WeatherStatus;
  captain: Crew;
  amenities: string[];
  difficulty: Level;
}
