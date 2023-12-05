import { Card } from "@entities/PlayingCard";
import { calculateCards } from "./calculateCards";

export function botPick(cards: Card[]) {
  if (calculateCards(cards) < 17) {
    return true;
  }

  return false;
}
