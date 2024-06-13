export type Item = {
  slot: number;
  name: string;
  count: number;
  metadata?: Record<string, any>;
};

export type ExInventory = {
  id: string;
  label: string;
  type: string;
  slots: number;
  weight: number;
  maxWeight: number;
  owner: string;
  items: Array<Item>;
};
