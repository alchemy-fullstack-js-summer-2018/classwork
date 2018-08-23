import { 
  animals, 
  ANIMAL_LOAD, 
  ANIMAL_ADD,
  ANIMAL_UPDATE,
  ANIMAL_REMOVE 
} from './reducers';

describe('animals reducers', () => {

  it('initialize to empty array', () => {
    const state = animals(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads animals', () => {
    const payload = [{}, {}, {}];

    const state = animals([], { 
      type: ANIMAL_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds animal', () => {
    const animal1 = { name: '1' };
    const animal2 = { name: '2' };
    const animal3 = { name: '3' };

    const state = animals([animal1, animal2], { 
      type: ANIMAL_ADD,
      payload: animal3
    });

    expect(state).toEqual([animal1, animal2, animal3]);
  });

  it('update animal', () => {
    const animal1 = { key: '1', name: 'a' };
    const animal2 = { key: '2', name: 'b' };
    const animal3 = { key: '3', name: 'c' };

    const updated = { key: '2', name: 'f' };

    const state = animals([animal1, animal2, animal3], { 
      type: ANIMAL_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      animal1, 
      updated, 
      animal3
    ]);
  });

  it('remove animal', () => {
    const animal1 = { key: '1', name: 'a' };
    const animal2 = { key: '2', name: 'b' };
    const animal3 = { key: '3', name: 'c' };

    const state = animals([animal1, animal2, animal3], { 
      type: ANIMAL_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      animal1, 
      animal3
    ]);
  });
});