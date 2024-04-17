import { FormEvent, Reducer, useReducer} from "react";

const Calculator = ()=>{

  interface stateModel{
    _count:number
  }

  interface actionModel{
    type:"increment" | "decrement" | "reset"; 
    value: string | number
  }
  const counterReducer = (state:stateModel, action:actionModel) =>{
      switch(action.type){
        case "increment":
          return {...state,_count:+action.value+1 as number}
        case "decrement":
          if(+action.value > 0)
            return {...state,_count:+action.value-1 as number}
          else
            return {...state,_count:0 as number}
        case "reset":
          return {...state,_count:0 as number}
        default:
          return state;
      }
  }
  const [count,countDispatch] = useReducer<Reducer<stateModel,actionModel>>(counterReducer,{
    _count:0,
  });

  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="flex justify-center items-center w-100 h-screen bg-blue-300">
      <div className="p-5 w-54 bg-pink-100">
        <div className="mb-3">
          <label className="block w-16 text-center mx-auto bg-white p-1">{count._count}</label>
          
        </div>
        <div className="flex mb-3">
          <button
            className="mr-2 bg-green-300 p-2"
            onClick={(e)=>{
              countDispatch({
                type : "increment",
                value : count._count
              })
            }}
          >   Increment
          </button>
          <button
            className="mr-2 bg-blue-300 p-2"
            onClick={(e)=>{
              countDispatch({
                type : "decrement",
                value : count._count
              })
            }}
          >   Decrement
          </button>
          <button
            className="mr-2 bg-red-300 p-2"
            onClick={(e)=>{
              countDispatch({
                type : "reset",
                value : count._count
              })
            }}
          >   Reset
          </button>
        </div>
        {/* <button type="submit" className="block mt-5 w-20 mx-auto  bg-orange-300 p-2">Submit</button> */}
      </div>
    </div>
  )
}

export default Calculator;