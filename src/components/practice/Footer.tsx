import { FC, useContext } from "react";
import { IncrementContext } from "./AppContext";

const FooterComponent = ():FC=>{
  console.log("Footer Component");
  let {setStateVal,stateVal} = useContext(IncrementContext);
  return(
    <footer>
        <button 
          type="button"
          className="mr-3"
          onClick={()=>setStateVal(stateVal+1)}>
          increment
        </button>
        <button 
          type="button" 
          onClick={()=>{
            stateVal!=0 && setStateVal(stateVal-1)
            }
            }>
          decrement
        </button>
    </footer>
  )
}

export default FooterComponent;