import React from "react";

const Card = ({ props }) => {
  return (
    <div className="flex h-100 w-[318px] flex-col overflow-hidden rounded-2xl bg-white md:w-[1002px] md:flex-row">
      <div className="relative h-[168px] w-full md:aspect-square md:h-100">
        <img
          className="absolute inset-0 z-10 h-full w-full object-cover"
          src={props.imageBackground}
          alt="background"
        />
        <img
          className="absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 object-cover"
          src={props.image}
          alt="image card 1"
        />
      </div>
      <div className="mx-6 my-4 flex flex-1 flex-col justify-between md:my-8 md:ml-[35px] md:mr-[40px]">
        <div className="flex justify-between">
          <h4 className="font-open-sans text-[11px] font-semibold text-gray-1 md:text-xl">
            {props.type}
          </h4>
          <p className="font-open-sans text-[11px] text-gray-1 md:text-lg">
            {props.time}
          </p>
        </div>
        <div className="mt-[10px] flex-1 md:mt-[25px]">
          <h3 className="text-justify font-DM-Serif-Display text-xl leading-[25px] text-black-1 md:text-[40px] md:leading-[46px]">
            {props.title}
          </h3>
          <p className="mt-1 text-[13px] leading-[19px] text-gray-2 md:mt-[15px] md:text-lg md:leading-[27px]">
            {props.shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="block h-8 w-8 object-cover md:h-11 md:w-11"
              src={props.avatar}
              alt="avatar"
            />
            <p className="ml-3 font-open-sans text-[11px] font-semibold text-primary md:text-lg">
              {props.username}
            </p>
          </div>
          <p className="font-open-sans text-[11px] font-semibold text-primary md:text-lg">
            Read more 🡢
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
