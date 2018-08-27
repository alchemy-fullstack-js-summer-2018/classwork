jest.mock('../../services/animalsApi', () => ({
  loadAnimals: jest.fn(),
  addAnimal: jest.fn(),
  removeAnimal: jest.fn()
}));

import { load, add, remove } from './actions';
import { ANIMAL_LOAD, ANIMAL_ADD, ANIMAL_REMOVE } from './reducers';
import { loadAnimals, addAnimal, removeAnimal } from '../../services/animalsApi';

describe('animal action creators', () => {

  it('loads animals', () => {
    const promise = Promise.resolve();
    loadAnimals.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(ANIMAL_LOAD);
    expect(payload).toBe(promise);
    expect(loadAnimals.mock.calls.length).toBe(1);
  });

  it('adds an animal', () => {
    const animal = { name: 'felix' };
    const promise = Promise.resolve();
    addAnimal.mockReturnValueOnce(promise);

    const { type, payload } = add(animal);
    expect(type).toBe(ANIMAL_ADD);
    expect(payload).toBe(promise);
    expect(addAnimal.mock.calls.length).toBe(1);
    expect(addAnimal.mock.calls[0][0]).toBe(animal);
  });

  it('removes an animal', () => {
    const promise = Promise.resolve();
    removeAnimal.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = remove(id);
    expect(type).toBe(ANIMAL_REMOVE);
    expect(removeAnimal.mock.calls.length).toBe(1);
    expect(removeAnimal.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });
});