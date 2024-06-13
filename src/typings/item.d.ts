// export type ExItem = {
//   name: string;
//   count?: number;
//   degrade?: number;
//   durability?: boolean;
//   consume?: number;
//   weight: number;
//   close?: boolean;
//   stack?: boolean;
//   export: Function;
// };

export type ExWeapon = {
  name: string;
  model: string;
  hash: number;
  stack: boolean;
  durability: number;
  weapon: boolean;
  weight: number;
  close: boolean;
  client?: {
    image?: string;
    components?: string[];
    usetime?: number;
  };
  throwable?: boolean;
  ammo?: boolean;
  component?: boolean;
  tint?: boolean;
  count?: number;
  export: Function;
};

//This type will show on for interface
export type ItemData<T = any>= {
  name: string;
  label: string;
  stack: boolean;
  weight: number;
  slot: number;
  count: number;
  description: string;
  close: boolean;
  metadata: Record<string, T>;
};

//This is default type of client and server items data
export type ExItem = {
  name: string;
  weight: number;
  close: boolean;
  stack: boolean;
  degrade: number;
  durability: boolean;
  consume: number;
  cb?: Function;
  export?: Function;
};

//This is type of client items data
export type ExClientItem = ExItem & {
  count: number;
  client?: Function;
};

//This is type of server items data
export type ExServerItem = ExItem & {
  server?: Function;
};
