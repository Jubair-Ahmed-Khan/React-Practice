import { FormEvent, useState } from "react";

const ControlledForm = ()=>{
  const[name,setName]= useState('');
  const[age,setAge]= useState(0);
  const[password,setPassword]= useState('');
  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(name,age,password);
  }
  return (
    <div className="flex justify-center">
      <form className="p-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input type="text" name="name" onKeyUp={(e)=>setName(e.currentTarget.value)}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="">Age</label>
          <input type="number" name="age" onKeyUp={(e)=>setAge(+e.currentTarget.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input type="password" name="password" onKeyUp={(e)=>setPassword(e.currentTarget.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm