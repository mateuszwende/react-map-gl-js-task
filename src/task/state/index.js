export const tagActions = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  UPDATE: "UPDATE",
};

export function tagReducer(state = [], action) {
  switch (action.type) {
    case tagActions.ADD:
      return [...state, { ...action.payload }];
    case tagActions.REMOVE:
      return state.filter((item) => item.id !== action.payload);
    case tagActions.UPDATE:
      return state.map((item) =>
        item.id === action.payload.id
          ? { id: item.id, ...action.payload }
          : item
      );
    default:
      return [...state];
  }
}
