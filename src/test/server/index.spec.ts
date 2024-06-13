import { setPlayerInventory } from "../../app/server";
import { ExInventory, Item } from "../../typings/inventory";

const Inventories = new Map<string, ExInventory>();

interface CharacterInventory {
  charId: number;
  inventory: Item[] | null;
}

const defaultPlayerData = {
  source: 1,
  charId: 1,
  name: "John Doe",
  identifier: "11000015b87e86e",
};
const fakeDataBase: CharacterInventory[] = [
  {
    charId: 1,
    inventory: [
      { slot: 1, name: "sprunk", count: 14 },
      { slot: 2, name: "burger", count: 2 },
    ],
  },
  {
    charId: 2,
    inventory: [],
  },
  {
    charId: 3,
    inventory: null,
  },
];

async function loadCharacterInventory(charId: number): Promise<Item[]> {
  const data = fakeDataBase.find((c) => c.charId === charId);
  if (!data || !Array.isArray(data.inventory)) {
    throw new Error("Character inventory not found!");
  }
  return data.inventory;
}

describe("Server Load Player Data", () => {
  it("should get inventory from character if exist", async () => {
    const expected = [
      { slot: 1, name: "sprunk", count: 14 },
      { slot: 2, name: "burger", count: 2 },
    ];

    const actual = await loadCharacterInventory(1);

    expect(actual).toEqual(expected);
  });

  it("should return an error when character inventory is not found", async () => {
    try {
      await loadCharacterInventory(4);
    } catch (error: any) {
      expect(error.message).toBe("Character inventory not found!");
    }
  });
});
