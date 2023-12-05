import { Card } from "@entities/PlayingCard";

export type Player = {
  name: string;
  bet: number;
  cards?: Card[];
};
