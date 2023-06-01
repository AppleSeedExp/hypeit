import React from "react";
import avatar from "../../assets/avatar.png";

export const Register = () => {
  return (
    <div className="w-full justify-center items-center flex min-h-[100vh]">
      <form className=" border-[1px] border-black space-y-[20px] rounded-[10px] p-[20px]">
        {/* <img src={avatar} alt="Avatar" /> */}

        <div>
          <label>Name:</label>
          <input
            type="text"
            className="border-[1px] border-black w-full"
            placeholder="Name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            className="border-[1px] border-black w-full"
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input className="border-[1px] border-black w-full" type="password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input className="border-[1px] border-black w-full" type="password" />
        </div>
        <input
          type="submit"
          className="border-[1px] border-black w-full cursor-pointer bg-[#398909]"
        />
      </form>
    </div>
  );
};
