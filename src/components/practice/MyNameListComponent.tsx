import { FC} from "react"
export const MyNameListComponent : FC<{nameListArray?:NameAge[]}>= ({nameListArray})=>{
  // console.log(nameListArray);
  console.log("nameList component")
  return (
    <div>
      
      NameAgeList
        
        <ul>
          
          {nameListArray?.map((x,index)=>{
            return <li key={index}>{x.name + " - " + x.age}</li>
          })}
        </ul>
    </div>
  )
}