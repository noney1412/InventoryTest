import type { Inventory, Item } from '../../../typings/inventory';
import { merge } from 'lodash';

export const inventoryById = new Map<string, Inventory>();

function get(id: string) {
  return inventoryById.get(id);
}

export function createInventory(
  id: string,
  label: string,
  type: string,
  slots: number,
  weight: number,
  maxWeight: number,
  owner: string,
  items: Item[]
): Inventory {
  const inventory: Inventory = {
    id: id,
    label: label,
    type: type,
    slots: slots,
    weight: weight,
    maxWeight: maxWeight,
    owner: owner,
    items: items,
  };

  inventoryById.set(id, inventory);

  return inventory;
}

export function deleteInventory(id: string): void {
  inventoryById.delete(id);
}

export function updateInventory(id: string, data: Partial<Inventory>): void {
  const inventory = inventoryById.get(id);

  if (!inventory) throw new Error('Inventory not found');

  inventoryById.set(id, merge({}, inventory, data));
}
