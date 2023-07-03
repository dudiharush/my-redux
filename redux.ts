
export const createStore = <State, Action>(
    initialState: State,
    reducer: (state: State, action: Action) => State
  ) => {
    let state = initialState;
    const getState = () => state;
    const subscribers = new Set<(state: State) => void>();
  
    return {
      getState,
      dispatch: (action: Action) => {
        state = reducer(state, action);
        subscribers.forEach(notify => notify(state))
      },
      subscribe: (notify: (state: State) => void) => {
        subscribers.add(notify);
        return () => subscribers.delete(notify);
      },
    };
  };