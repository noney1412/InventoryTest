import { Item } from "../../typings/inventory";
import { ExClientItem } from "../../typings/item";
import { Player } from "../../typings/player";
import { Inventory } from "../modules/inventory/server";

export async function setPlayerInventory(player: Player, data: Item[]) {
  if (!player || !data) return;

  if (data.length > 0) {
    for (let variable of data) {
      console.log((variable.count += 6));
    }
  }

  let inventory: Map<number, ExClientItem> = new Map();
  let totalWeight: number = 0;

  

  let inv = Inventory.create(
    player.source,
    "Player Inventory",
    "player",
    10,
    0,
    100,
    player.source,
    data
  );

  return inv;
}
