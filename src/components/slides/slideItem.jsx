import React from "react";
import StarIcon from "../icons/star";

const SlideItem = ({ data, className = "" }) => {
  return (
    <div
      className={`relative left-1/2 flex h-100 w-[780px] -translate-x-1/2 justify-between rounded-lg bg-white pb-[89px] pt-[69px] ${className}`}
    >
      <div className="relative ml-[70px] aspect-square h-[242px] before:-ml-5 before:mt-5 before:block before:aspect-square before:h-[242px] before:bg-[#D9D9D9] before:content-['']">
        <img
          className="absolute top-0 h-full w-full object-cover"
          src={data.avatar}
          alt="avatar"
        />
      </div>
      <div className="ml-[83px] mr-[50px] flex h-full flex-col justify-between">
        <p className="font-Poppins text-[16px] font-normal leading-6">
          {data.content}
        </p>
        <div className="flex">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="h-[1px] w-[230px] bg-[#484848]"></div>
        <h4 className="font-Volkhov text-[32px] font-normal leading-[42px]">
          James K.
        </h4>
        <p className="font-Poppins text-[16px] font-normal leading-6">
          Traveler
        </p>
      </div>
    </div>
  );
};

export default SlideItem;
