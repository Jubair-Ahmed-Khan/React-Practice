import { FormEvent, useRef} from "react";

const UnControlledForm = ()=>{

  const name= useRef<HTMLInputElement | null>(null);
  const age= useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(name.current?.value);
    console.log(age.current?.value);
    console.log(password.current?.value);
  }
  
  return (
    <div className="flex justify-center">
      <form className="p-5" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input type="text" name="name" ref={name}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="">Age</label>
          <input type="number" name="age" ref={age}/>
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input type="password" name="password" ref={password} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UnControlledForm;