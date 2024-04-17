// import { Reducer, useReducer } from "react";

// export const initialState = {
//   _count:0
// };
interface stateModel {
  _count: number;
}

interface actionModel{
  type:"INCREMENT" | "DECREMENT"; 
  value: string | number
}
    
const CountReducer = (state:stateModel, action:actionModel) =>{
  switch(action.type){
    case "INCREMENT":
      return {...state,_count:+action.value+1 as number}
    case "DECREMENT":
      if(+action.value > 0)
        return {...state,_count:+action.value-1 as number}
      else
        return {...state,_count:0 as number}
    default:
      return state;
  }
}

// const [count,countDispatch] = useReducer<Reducer<stateModel,actionModel>>(CountReducer,{
//   _count:0,
// });

// export { count, countDispatch };
// export type { stateModel ,actionModel};
export default CountReducer;
