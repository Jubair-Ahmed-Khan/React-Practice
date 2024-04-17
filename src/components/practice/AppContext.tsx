import React, { FC, ReactNode, useState, createContext, useReducer, Dispatch } from "react";
// import CountReducer from "./CountReducer";
// import { createContext } from "vm";


/*interface IncrementCOntext {
  stateVal:number,
  setStateVal: (param:number)=>void
}

export const IncrementContext = createContext<IncrementCOntext>({
  
  stateVal:0,
  setStateVal: (param:number)=>{}
  
});*/

interface CounterState {
  count: number;
}

type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };


const counterReducer=(state: CounterState, action: CounterAction): CounterState =>{
  switch (action.type) {
    case 'INCREMENT':
        return { count: state.count + 1 };
    case 'DECREMENT':
      if(state.count>0)
        return { count: state.count - 1 };
      else
        return { count: 0 };
    default:
        return state;
}
}

export const IncrementContext = createContext<{
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
} | undefined>(undefined);


// export const IncrementContext = createContext<IncrementCOntext>({
//   _count:0,
// });



const AppContextComponent :FC<{children:ReactNode}>= ({children})=>{

  // const [stateVal,setStateVal] = useState<number>(0);
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  
  
  return (
    // <IncrementContext.Provider value={{stateVal,setStateVal}}>
    //   {children}
    // </IncrementContext.Provider>
    <IncrementContext.Provider value={{state,dispatch}}>
      {children}
    </IncrementContext.Provider>
  )

}

export default AppContextComponent;


