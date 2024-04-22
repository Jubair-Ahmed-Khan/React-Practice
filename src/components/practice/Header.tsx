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
  const {counter} = useContext(IncrementContext);
  
  
  return(
      <header className="flex justify-center my-5">
        <p className="p-5 bg-orange-300 text-white">State value {counter._count}</p>
      </header>
  )
}

export default HeaderComponent;