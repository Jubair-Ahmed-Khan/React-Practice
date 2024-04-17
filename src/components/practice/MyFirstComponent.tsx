import { FC, ReactNode } from "react"
import { MyNameListComponent } from "./MyNameListComponent"

export const MyFirstComponent : FC<{children:ReactNode}> = ({children})=>{
  let aList : NameAge[]= [
    {name:"Name 1", age:1},
    {name:"Name 2", age:2},
    {name:"Name 3", age:3}
  ]
  console.log("first component")
  return(
    // <h2 className="codecamp">Welcome to codecamp</h2>
    <div className="codecamp flex w-full items-center justify-center flex-col">
      <div>
        <MyNameListComponent nameListArray={aList}></MyNameListComponent>
        {children}
      </div>
    </div>
  )
}