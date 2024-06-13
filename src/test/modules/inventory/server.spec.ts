import { setPlayerInventory } from "../../../app/server";
import { ExInventory } from "../../../typings/inventory";

const Inventories = new Map<string, ExInventory>();

const defaultPlayerData = {
  source: 1,
  charId: 1,
  name: "John Doe",
  identifier: "11000015b87e86e",
};
const defaultCreateInventoryData = {
  id: defaultPlayerData.source,
  label: "Player Inventory",
  type: "player",
  slots: 10,
  weight: 0,
  maxWeight: 100,
  owner: defaultPlayerData.charId,
  items: [],
};

describe("Setup player's inventory", () => {
  it("should create an inventory", async () => {
    // arrange:
    const sut = setPlayerInventory;

    const expected: ExInventory = {
      id: "1",
      label: "Player Inventory",
      type: "player",
      slots: 10,
      weight: 0,
      maxWeight: 100,
      owner: "1",
      items: [],
    };

    //act:
    const actual = await sut(defaultPlayerData, []);

    //assert:
    expect(actual).toEqual(expected);
  });
});
