import { ExServerItem } from "../../../typings/item";
import { Items } from "../../../../src/app/modules/items/server";

const ItemList: Map<string, ExServerItem> = new Map([
  [
    "apple",
    {
      name: "apple",
      weight: 120,
      close: true,
      stack: true,
      degrade: 0,
      durability: false,
      consume: 1,
    },
  ],
  [
    "banana",
    {
      name: "banana",
      weight: 200,
      close: false,
      stack: true,
      degrade: 40,
      durability: false,
      consume: 0,
    },
  ],
  [
    "orange",
    {
      name: "orange",
      weight: 400,
      close: true,
      stack: true,
      degrade: 0,
      durability: false,
      consume: 0,
      export: () => {},
    },
  ],
]);

jest.mock("../../../../src/app/modules/items/server", () => {
  return {
    Items: jest.fn().mockImplementation((name?: string) => {
      if (!name) return ItemList;

      name = name.toLowerCase();

      if (name.substring(0, 7) === "weapon_") {
        name = name.toUpperCase();
      }

      return ItemList.get(name);
    }),
  };
});

describe("Items (server)", () => {
  it("should return an item type (ExServerItem) if it exists", () => {
    const itemName = "apple";
    const result = Items(itemName);

    expect(result).toEqual({
      name: "apple",
      weight: 120,
      close: true,
      stack: true,
      degrade: 0,
      durability: false,
      consume: 1,
    });
  });

  it("should return undefined if the item does not exist", () => {
    const itemName = "pear";
    const result = Items(itemName);

    expect(result).toBeUndefined();
  });

  it("should return the item list if no item name is provided", () => {
    const result = Items();

    expect(result).toEqual(ItemList);
  });
});
