import React, { FC, ReactNode, useState, createContext, useReducer, Dispatch } from "react";
// import CountReducer from "./CountReducer";
// import { createContext } from "vm";



// interface IncrementCOntext {
//   stateVal:number,
//   setStateVal: (param:number)=>void,

// }

interface stateModel{
  _count:number;
}

interface actionModel{
  type:"INCREMENT" | "DECREMENT" | "RESET",
  value: string | number
}

interface IncrementCOntext {
  counter:stateModel,
  counterDispatch:Dispatch<actionModel>
}

const counterReducer=(state: stateModel, action: actionModel): stateModel =>{
  switch (action.type) {
    case 'INCREMENT':
      return { ...state,_count:+action.value + 1 as number };
    case 'DECREMENT':
      if(+action.value>0)
        return { ...state,_count:+action.value - 1 as number };
      else
        return { ...state,_count:0 as number };
    case 'RESET':
      return { ...state,_count:0 as number };
    default:
        return state;
  }
}

// export const IncrementContext = createContext<IncrementCOntext>({
//  stateVal:0,
//   setStateVal: (param:number)=>{},
// });

export const IncrementContext = createContext<IncrementCOntext>({
  counter:{_count:0},
  counterDispatch: ()=>{}
});


const AppContextComponent :FC<{children:ReactNode}>= ({children})=>{

  // const [stateVal,setStateVal] = useState<number>(0);
  const [counter, counterDispatch] = useReducer(counterReducer, { _count: 0 });

  return (
     // <IncrementContext.Provider value={{stateVal,setStateVal}}>
    //   {children}
    // </IncrementContext.Provider>
    <IncrementContext.Provider value={{counter,counterDispatch}}>
      {children}
    </IncrementContext.Provider>
  )
}

export default AppContextComponent;


