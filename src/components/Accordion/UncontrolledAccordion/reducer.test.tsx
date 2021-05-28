import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test.skip('collapsed should be true', () => {
    // date

    const state: StateType = {
        collapsedMenu: false
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection

    expect(newState.collapsedMenu).toBe(true)
});

test.skip('collapsed should be false', () => {
    // date

    const state: StateType = {
        collapsedMenu: true
    }

    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection

    expect(newState.collapsedMenu).toBe(false)
});

test.skip('collapsed should throw error because action type os incorrect', () => {
    // date

    const state: StateType = {
        collapsedMenu: true
    }

    // action
   expect(() => {
    reducer(state, {type: 'FAKE'})
   }).toThrowError();

})