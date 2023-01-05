import { initialState, reducer } from './index'

describe('reducer', () => {
    test('adds api history', () => {
    let state = reducer(initialState, {});

    expect(state.history).toEqual([]);

    state = reducer(state, {type: 'ADD', payload: 'test'});
    expect(state.history.includes('test')).toBeFalsy();
    })
})