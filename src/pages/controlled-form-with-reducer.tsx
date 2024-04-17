import { FormEvent, Reducer, useReducer } from "react";

const ControlledForm = ()=>{

  interface stateModel{
    _name:string; 
    _age:number; 
    _password:string
  }

  interface actionModel{
    type:"update-name" | "update-age" | "update-password"; 
    value:string | number
  }
  const profileReducer = (state:stateModel, action:actionModel) =>{
      switch(action.type){
        case "update-name":
          return {...state,_name:action.value as string}
        case "update-age":
          return {...state,_age:action.value as number}
        case "update-password":
          return {...state,_password:action.value as string}
        default:
          return state;
      }
  }
  const [profile,profileDispatch] = useReducer<Reducer<stateModel,actionModel>>(profileReducer,{
    _name:"",
    _age:0,
    _password:"",
  });

  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(profile._name);
  }
  return (
    <div className="flex justify-center items-center w-100 h-screen bg-blue-300">
      <form className="p-5 w-42 bg-pink-100" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="">Name: </label>
          <input 
            type="text" 
            name="name" 
            onKeyUp={(e)=>{
              profileDispatch({
                type : "update-name",
                value : e.currentTarget.value
              })
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Age: </label>
          <input 
              type="number" 
              name="age" 
              onChange={(e)=>{
                profileDispatch({
                  type : "update-age",
                  value : +e.currentTarget.value
                })
            }}
              onKeyUp={(e)=>{
                  profileDispatch({
                    type : "update-age",
                    value : +e.currentTarget.value
                  })
              }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password: </label>
          <input 
              type="password" 
              name="password" 
              onKeyUp={(e)=>{
                  profileDispatch({
                    type : "update-password",
                    value : e.currentTarget.value
                  })
              }} 
          />
        </div>
        <button type="submit" className="block mt-5 w-20 mx-auto  bg-orange-300 p-2">Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm