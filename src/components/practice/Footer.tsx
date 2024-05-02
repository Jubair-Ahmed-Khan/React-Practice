import { useContext } from "react";
import { IncrementContext } from "./AppContext";
import { useCounterStore } from "@/store";

const FooterComponent = () => {
  console.log("Footer Component");
  // let {stateVal,setStateVal} = useContext(IncrementContext);
  // let {counter,counterDispatch} = useContext(IncrementContext);

  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  return (
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
        onClick={increment}
      >
        Increment
      </button>
      <button
        type="button"
        className="mr-3 text-center p-5 bg-red-400 text-white"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        type="button"
        className="mr-3 text-center p-5 bg-red-700 text-white"
        onClick={reset}
      >
        Reset
      </button>
    </footer>

    // <footer className="flex justify-center mt-5">
    //   <h1>I am footer</h1>
    // </footer>
  );
};

export default FooterComponent;
