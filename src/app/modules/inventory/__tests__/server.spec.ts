import { Inventory } from '../../../../typings/inventory';
import { createInventory, deleteInventory, updateInventory } from '../server';
import { inventoryById } from '../server';

describe('Inventory Server', () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = createInventory(
      '1',
      'Test Inventory',
      'type',
      10,
      5,
      100,
      'owner',
      []
    );
  });

  afterEach(() => {
    deleteInventory('1');
  });

  test('createInventory should create a new inventory', () => {
    expect(inventoryById.size).toBe(1);
    expect(inventoryById.get('1')).toEqual(inventory);
  });

  test('deleteInventory should delete an existing inventory', () => {
    deleteInventory('1');
    expect(inventoryById.size).toBe(0);
    expect(inventoryById.get('1')).toBeUndefined();
  });

  test('updateInventory should update an existing inventory', () => {
    const updatedInventory = {
      label: 'Updated Inventory',
      slots: 20,
    };

    updateInventory('1', updatedInventory);

    expect(inventoryById.get('1')).toEqual({
      ...inventory,
      ...updatedInventory,
    });
  });

  test('updateInventory should throw an error if inventory is not found', () => {
    expect(() => {
      updateInventory('2', {});
    }).toThrow('Inventory not found');
  });
});
