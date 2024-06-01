import React from "react";

const Card = ({ props }) => {
    return (
        <div className="flex flex-col w-[318px] md:flex-row rounded-2xl h-100 bg-white md:w-[1002px] overflow-hidden">
            <div className="relative h-[168px] w-full md:h-100 md:aspect-square">
                <img
                    className="absolute inset-0 z-10 object-cover w-full h-full"
                    src={props.imageBackground}
                    alt="background"
                />
                <img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20  object-cover w-32 h-32"
                    src={props.image}
                    alt="image card 1"
                />
            </div>
            <div className="flex flex-col flex-1 justify-between my-4 mx-6 md:my-8 md:ml-[35px] md:mr-[40px]">
                <div className="flex justify-between">
                    <h4 className="text-gray-1 font-open-sans text-[11px] md:text-xl font-semibold">
                        {props.type}
                    </h4>
                    <p className="text-gray-1 font-open-sans text-[11px] md:text-lg">
                        {props.time}
                    </p>
                </div>
                <div className="mt-[10px] md:mt-[25px] flex-1">
                    <h3 className="font-DM-Serif-Display text-black-1 text-xl leading-[25px] md:text-[40px] md:leading-[46px] text-justify">
                        {props.title}
                    </h3>
                    <p className="mt-1 md:mt-[15px] text-gray-2 text-[13px] leading-[19px] md:text-lg md:leading-[27px]">
                        {props.shortDescription}
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            className="h-8 w-8 md:h-11 md:w-11 object-cover block"
                            src={props.avatar}
                            alt="avatar"
                        />
                        <p className="ml-3 text-primary font-open-sans text-[11px] md:text-lg font-semibold">
                            {props.username}
                        </p>
                    </div>
                    <p className="text-primary font-open-sans text-[11px] md:text-lg font-semibold">
                        Read more 🡢
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
