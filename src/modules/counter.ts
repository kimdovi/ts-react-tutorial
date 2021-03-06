import { createAction, ActionType, createReducer } from "typesafe-actions";

const INCREASE = "counter/INCREASE";
const INCREASE_BY = "counter/INCREASE_BY";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

type CounterState = {
  count: number;
};

const actions = { increase, decrease, increaseBy };
type CouterAction = ActionType<typeof actions>;

const initialState: CounterState = {
  count: 0
};

//리듀서 1
const counter = createReducer<CounterState, CouterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1 }),
  [DECREASE]: state => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload}),
});

export default counter;




// function counter(
//   state: CounterState = initialState,
//   action: CouterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }
