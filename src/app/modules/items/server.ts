import { ExServerItem } from "../../../typings/item";

const ItemList: Map<string, ExServerItem> = new Map();

export function Items(name?: string) {
  if (!name) return ItemList;

  name = name.toLowerCase();

  if (name.substring(0, 7) === "weapon_") {
    name = name.toUpperCase();
  }

  return ItemList.get(name);
}
