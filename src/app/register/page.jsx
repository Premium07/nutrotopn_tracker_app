"use client";
import React, { useState } from "react";
import Link from "next/link";

const Register = () => {
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
    // setDetails({})
    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify(details[inputs.names]),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setMessage({ type: "success", text: data.message});
    //     setDetails({})
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(details);
  };
  const inputs = [
    { type: "text", placeholder: "Enter Name", names: "name" },
    { type: "email", placeholder: "Enter Email", names: "email" },
    { type: "password", placeholder: "Enter Password", names: "password" },
    { type: "number", placeholder: "Enter Age", names: "age" },
  ];
  return (
    <section className="h-screen w-full bg-[#121212] p-[30px] text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full py-4 px-2 flex flex-col gap-4 rounded-lg items-start"
      >
        <h2 className="text-3xl font-semibold mb-5 text-green-500">Register</h2>
        <div className="flex flex-col gap-2 w-full">
          {inputs.map((input, index) => {
            return (
              <input
                type={input.type}
                key={index}
                placeholder={input.placeholder}
                className="py-2 px-4 rounded-sm text-md outline-none h-12 text-lg text-black"
                name={input.names}
                value={details[inputs.names]}
                onChange={handleChange}
                required
              />
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
          {/* <p className="text-green-500">{message.text}</p> */}
        </div>
      </form>
    </section>
  );
};

export default Register;
