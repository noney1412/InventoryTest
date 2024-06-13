export type Item<T = any> = {
  name: string;
  slot: number;
  count: number;
};

export type Inventory = {
  id: string;
  label: string;
  type: string;
  slots: number;
  weight: number;
  maxWeight: number;
  owner: string;
  items: Array<Item>;
};
