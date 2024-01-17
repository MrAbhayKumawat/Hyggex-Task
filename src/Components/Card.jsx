import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function Card() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [style, setStyle] = useState("bg-red-950");
  const [style2, setStyle2] = useState("");
  const [change, setChange] = useState("");

  // const handleFlip = () => {
  //   setIsFlipped(!isFlipped);
  //   isFlipped(change ? "bg-blue-950" : "");

  // };
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setChange(isFlipped ? "[transform:rotateY(180deg)]" : "");

    // Change the background color based on the flipped state
    setStyle(isFlipped ? "bg-blue-800" : "bg-sky-950");
  };

  return (
    <>
      <div className="flex justify-center flex-col gap-y-3 overflow-hidden">
        <div className="group h-96 w-96 perspective-1000 rounded-3xl ">
          <div
            style={{width: '550px', borderRadius:"20px",marginLeft:"135%",marginTop:"5%" ,height:"45vh"}}
            className={`transition-all duration-500   transform-style:preserve-3d ${change} ${style} ${style2} w=[200px]`}
            onClick={handleFlip}
          >
            <div className="">
              <div className="w-[1px] h-96 flex justify-center items-center "></div>
            </div>
          </div>
        </div>
        <div className="text-3xl relative left-[45%] bottom-60 text-white">
          {isFlipped ? "5x+12" : "9+9+7x-2x-3 "}
        </div>

        <div className="flex justify-center lg:gap-x-20 gap-x-8 p-5 items-center flex-wrap">
          <div>
            <RefreshIcon className="text-2xl" style={{ fontSize: "2.6rem" }} />
          </div>
          <span className="bg-blue-950 p-2 px-3 text-2xl text-white rounded-full">
            &#x3e;
          </span>
          <div className="text-gray-800 text-2xl font-bold font-['Inter']">
            01/10
          </div>
          <span className="bg-blue-950 p-2 px-3 text-2xl text-white rounded-full">
            &#60;{" "}
          </span>
          <div>
            <CheckBoxOutlineBlankIcon style={{ fontSize: "2.5rem" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
