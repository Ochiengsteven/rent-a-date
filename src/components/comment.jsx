import React from "react";
import profile from "../assets/profile.png";
import star from "../assets/star.jpg"
export default Comment = ({ content, rating, username }) => {
  return (
    <div className="min-h-[150px] w-[250px] bg-slate-50 flex-col rounded-xl py-8 px-4">
      <div className="flex w-full items-center gap-2">
        <div className="rounded-full bg-sky-500 w-[54px] grid place-items-center">
          <img src={profile} className="h-[50px] " />
        </div>
        <img src={star} className="h-[20px]"/>
        <span className="font-bold my-auto">{rating}</span>
      </div>

      <div className="w-full">
        <div className="w-full font-bold text-left">{username}</div>
        <p className="w-full text-left ">{content}</p>
      </div>
    </div>
  );
};
