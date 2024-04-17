import { useContext } from "react";
import { IncrementContext } from "./AppContext";

// const HeaderComponent = ()=>{
//   console.log("Header Component");
//   let {stateVal} = useContext(IncrementContext);
//   return(
//     <header>
//         <p>State value {stateVal}</p>
//       </header>
//   )
// }
const HeaderComponent = ()=>{
  console.log("Header Component");
  const {state,dispatch} = useContext(IncrementContext);
  
  return(
    <header>
        <p>State value {state._count}</p>
      </header>
  )
}

export default HeaderComponent;