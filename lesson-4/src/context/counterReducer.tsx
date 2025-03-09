const initialValue = { count: 0, payload: 0 };

type State = { count: number; payload: number };
type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "IncrementByValue"; payload: number }
  | { type: "DecrementByValue"; payload: number };

const reducer = (state: State = initialValue, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "IncrementByValue":
      return { ...state, count: state.count + action.payload };
    case "DecrementByValue":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};

export { initialValue, reducer };
