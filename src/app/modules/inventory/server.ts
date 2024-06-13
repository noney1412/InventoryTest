import type { ExInventory, Item } from "../../../typings/inventory";

const Inventories = new Map<string, ExInventory>();

export const Inventory = {
  get: (id: string | number) => {
    if (typeof id === "number") id = id.toString();
    return Inventories.get(id);
  },
  create: (
    id: string | number,
    label: string,
    type: string,
    slots: number,
    weight: number,
    maxWeight: number,
    owner: string | number,
    items: Item[]
  ) => {
    if (typeof id === "number") id = id.toString();
    if (typeof owner === "number") owner = owner.toString();
    const inventory: ExInventory = {
      id: id,
      label: label,
      type: type,
      slots: slots,
      weight: weight,
      maxWeight: maxWeight,
      owner: owner,
      items: items,
    };
    Inventories.set(id, inventory);
    return Inventories.get(id);
  },
  delete: (id: string) => {
    Inventories.delete(id);
  },
  update: (id: string, data: Partial<ExInventory>) => {
    const inventory = Inventories.get(id);
    if (!inventory) return;
    Inventories.set(id, { ...inventory, ...data });
  },
};
