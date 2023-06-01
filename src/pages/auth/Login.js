import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-full justify-center items-center flex min-h-[100vh]">
      <form className=" border-[1px] border-black space-y-[20px] rounded-[10px] p-[20px]">
        <header>
          <h2>Login</h2>
        </header>
        <main>
          <p>
            <label>Email: </label>
            <input className="border-[1px] border-black w-full" />
          </p>
          <p>
            <label>Password: </label>
            {/* <input className="border-[1px] border-black w-full" /> */}
          </p>
        </main>
        <footer>
          <Link to="/" className="border-[1px] border-black w-full">
            Login
          </Link>
          <Link to="/register" className="border-[1px] border-black w-full">
            Register
          </Link>
        </footer>
      </form>
    </div>
  );
};
