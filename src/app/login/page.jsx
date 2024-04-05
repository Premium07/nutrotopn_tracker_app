"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()
  const [details, setDetails] = useState({});

  const [messgage, setMessage] = useState();
  // Handles the onChange event for each input field in the form.
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      details.email === "abc@gmail.com" &&
      details.password === "admin123"
    ) {
      console.log("Login successful");
      router.push("/home");
    } else {
      console.log("Invalid data");
    }
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: "admin",
    //     password: "12345",
    //   }),
    // })
    //   .then((response) => {
    //     if (response.status === 404) {
    //       set;
    //     }
    //     res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     router.push("/home");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(details)
  };

  const inputs = [
    { type: "username", placeholder: "Enter Username", name: "username" },
    { type: "password", placeholder: "Enter Password", name: "password" },
  ];
  return (
    <section className="h-screen w-full bg-[#121212] p-[30px] text-white flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-full py-4 px-2 flex flex-col gap-4 rounded-lg items-start"
      >
        <h2 className="text-3xl font-semibold mb-5 text-green-500">Log In</h2>
        <div className="flex flex-col gap-2 w-full">
          {inputs.map((input, index) => {
            return (
              <input
                type={input.type}
                key={index}
                placeholder={input.placeholder}
                className="py-2 px-4 rounded-sm text-md outline-none h-12 text-lg text-black"
                name={input.name}
                onChange={handleChange}
                value={details[input.name]}
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="py-[15px] px-[50px] bg-green-600 hover:bg-green-700 transition-all duration-300 text-xl rounded-sm cursor-pointer font-semibold"
        >
          Log In
        </button>
        <div className="flex gap-3 mt-2">
          <p className="text-lg">Do not have an account?</p>
          <p className="text-lg hover:text-green-400">
            <Link href="/register">Register Now</Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
