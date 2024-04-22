import { useContext } from "react";
import { IncrementContext } from "./AppContext";

const FooterComponent = ()=>{
  console.log("Footer Component");
  // let {stateVal,setStateVal} = useContext(IncrementContext);
  let {counter,counterDispatch} = useContext(IncrementContext);
  return(
    // <footer className="flex justify-center mt-5">
    //     <button 
    //       type="button"
    //       className="mr-3 w-p5 text-center p-5 bg-purple-400 text-white"
    //       onClick={()=>setStateVal(stateVal+1)}>
    //       Increment
    //     </button>
    //     <button 
    //       type="button"
    //       className="mr-3 w-p5 text-center p-5 bg-red-400 text-white"
    //       onClick={()=>{
    //         stateVal!=0 && setStateVal(stateVal-1)
    //         }
    //         }>
    //       Decrement
    //     </button>
    //     <button 
    //       type="button"
    //       className="mr-3 w-p5 text-center p-5 bg-red-700 text-white"
    //       onClick={()=>setStateVal(0)}>
    //       Reset
    //     </button>
    // </footer>
    <footer className="flex justify-center mt-5">
        <button 
          type="button"
          className="mr-3 text-center p-5 bg-purple-400 text-white"
          onClick={()=>{
            counterDispatch({
              type:"INCREMENT",
              value:counter._count
            })
          }}>
          Increment
        </button>
        <button 
          type="button"
          className="mr-3 text-center p-5 bg-red-400 text-white"
          onClick={()=>{
            counter._count > 0 && counterDispatch({
              type:"DECREMENT",
              value:counter._count
            })
            }
            }>
          Decrement
        </button>
        <button 
          type="button"
          className="mr-3 text-center p-5 bg-red-700 text-white"
          onClick={()=>{
            counterDispatch({
              type:"RESET",
              value:counter._count
            })
            }
            }>
          Reset
        </button>
    </footer>
  )
}

export default FooterComponent;