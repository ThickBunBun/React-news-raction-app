import { useState } from "react";

function Input({
  input_id,
  input_name,
  input_type,
  input_placeholder,
  handleChange,
}) {
  const msg = "";
  const dspl = "";
  return (
    <>
      <input
        className="outline-none resize-none shadow-none text-gray-100 m-1 p-3 h-8 rounded-lg bg-gray-800 focus:bg-gray-700"
        type={input_type}
        onChange={handleChange}
        id={input_id}
        name={input_name}
        placeholder={input_placeholder}
      />
      <label className={dspl} htmlFor="uname">
        {msg}
      </label>
    </>
  );
}

function LogForm({ handleChange, handleRegistration }) {
  return (
    <>
      <form
        className="flex flex-col place-self-center backdrop-blur-md bg-gray-700/40 m-5 p-8 rounded-lg"
        action=""
      >
        <Input
          input_id="uname"
          input_name="uname"
          input_type="text"
          input_placeholder="User name"
          handleChange={handleChange}
        />
        <Input
          input_id="pwd"
          input_name="pwd"
          input_type="password"
          input_placeholder="Password"
          handleChange={handleChange}
        />
        <button
          className="font-bold bg-sky-600 hover:bg-sky-500 max-h-10 rounded-full m-2 p-2 text-gray-100"
          onClick={handleRegistration}
        >
          Registerate
        </button>
        <button className="font-bold bg-sky-600 hover:bg-sky-500 max-h-10 rounded-full m-1 p-2 text-gray-100">
          Log in
        </button>
      </form>
    </>
  );
}

export default function Login() {
  const [form, setForm] = useState({
    uname: "",
    pwd: "",
  });
  const [msg, setMsg] = useState("Password");
  const [dspl, setDspl] = useState("hidden");

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  }
  const handleRegistration = () => {
    // finish
  };

  return (
    <div className="h-screen bg-gradient-to-b from-gray-800 from-10% via-sky-950 via-40% to-gray-900 to-90% ">
      <div className="grid grid-rows-3 h-lvh">
        <a
          className="justify-self-end font-bold bg-sky-600 hover:bg-sky-500 max-h-10 rounded-full mt-1 mb-2 mr-2 p-2 text-gray-100"
          href="/"
        >
          Back to News
        </a>
        <LogForm
          handleChange={handleChange}
          handleRegistration={handleRegistration}
        />
        {/* <form */}
        {/*   className="flex flex-col place-self-center backdrop-blur-md bg-gray-700/40 m-5 p-8 rounded-lg" */}
        {/*   action="" */}
        {/* > */}
        {/*   <input */}
        {/*     className="outline-none resize-none shadow-none text-gray-100 m-1 p-3 h-8 rounded-lg bg-gray-800 focus:bg-gray-700" */}
        {/*     type="text" */}
        {/*     onChange={handleUnameValidation} */}
        {/*     id="uname" */}
        {/*     name="uname" */}
        {/*     placeholder="Username" */}
        {/*   /> */}
        {/*   <label className={dspl} htmlFor="uname"> */}
        {/*     Username is too short */}
        {/*   </label> */}
        {/*   <input */}
        {/*     className="outline-none resize-none shadow-none text-gray-100 m-1 p-3 h-8 rounded-lg bg-gray-800 focus:bg-gray-700" */}
        {/*     type="text" */}
        {/*     onChange={handlePwdValidation} */}
        {/*     id="pwd" */}
        {/*     name="pwd" */}
        {/*     placeholder="Password" */}
        {/*   /> */}
        {/*   <label className={dspl} htmlFor="pwd"> */}
        {/*     {msg} */}
        {/*   </label> */}
        {/*   <br /> */}
        {/*   <button */}
        {/*     className="font-bold bg-sky-600 hover:bg-sky-500 max-h-10 rounded-full m-2 p-2 text-gray-100" */}
        {/*     onClick={handleRegistration} */}
        {/*   > */}
        {/*     Registerate */}
        {/*   </button> */}
        {/*   <button className="font-bold bg-sky-600 hover:bg-sky-500 max-h-10 rounded-full m-1 p-2 text-gray-100"> */}
        {/*     Log in */}
        {/*   </button> */}
        {/* </form> */}
      </div>
    </div>
  );
}
