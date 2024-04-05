"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {

  const router = useRouter();
  const [details, setDetails] = useState({});
  // const [message, setMessage] = useState({
  //   type: "",
  //   text: "",
  // });

  const handleChange = (e) => {
    // console.log({ ...details }, e.target.value);
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      details.email === "abc@gmail.com" &&
      details.password === "1" &&
      details.name === "prem"
    ) {
      console.log("Login successful");
      router.push("/home");
      setDetails({
        name: "",
        email: "",
        password: "",
        age: "",
      }); // inputRef.current.value=''
    } else {
      console.log("Invalid data");
    }
    // console.log(details);
  };

  const inputs = [
    { type: "text", placeholder: "Enter Name", names: "name" },
    { type: "email", placeholder: "Enter Email", names: "email" },
    { type: "password", placeholder: "Enter Password", names: "password" },
    { type: "number", placeholder: "Enter Age", names: "age" },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <section className="h-screen w-full bg-[#121212] p-[30px] text-white flex items-center justify-center">
      <form
        // autoComplete=""
        action='/home'
        method='POST'
        onSubmit={handleSubmit}
        className="w-full py-4 px-2 flex flex-col gap-4 rounded-lg items-start"
      >
        <h2 className="text-3xl font-semibold mb-5 text-green-500">Register</h2>
        <div className="flex flex-col gap-2 w-full">
          {inputs.map((input, index) => {
            return (
              <div className="relative">
              {input.type==='password'? toggle ? (
                  <FaRegEye
                    className="absolute top-5 right-5 text-green-500"
                    onClick={() => setToggle(false)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="absolute top-5 right-5 text-green-500"
                    onClick={() => setToggle(true)}
                  />
                ):''}

                <input
                  type={input.type==='password' ?toggle?'text':'password':'text'}
                  key={index}
                  placeholder={input.placeholder}
                  className="py-2 px-4 w-full rounded-sm text-md outline-none h-12 text-lg text-black"
                  name={input.names}
                  value={details[inputs.names]}
                  onChange={handleChange}
                  required
                />
              </div>
            );
          })}
        </div>
        <button
          className="py-[15px] px-[50px] bg-green-600 hover:bg-green-700 transition-all duration-300 text-xl rounded-sm cursor-pointer font-semibold"
          type="submit"
        >
          Register
        </button>
        <div className="flex gap-3 mt-2">
          <p className="text-lg">Already Registered ?</p>
          <p className="text-lg hover:text-green-400">
            <Link href="/login">Login</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
