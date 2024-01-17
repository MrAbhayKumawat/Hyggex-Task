import React from "react";
import Navbar from "./Navbar";
import HomeIcon from "@mui/icons-material/Home";
import Card from "./Card";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Home() {
  return (
    <>
      <Navbar />
      {/* Main Section */}
      <div className="flex items-center flex-wrap m-10 lg:ml-32">
        <div>
          <HomeIcon />
        </div>
        <div>&#x3e;</div>
        <div className="text-center text-zinc-500 text-lg font-medium font-['Inter']">
          Flashcard
        </div>
        <div>&#x3e;</div>
        <div>Mathematics</div>
        <div>&#x3e;</div>
        <div className="text-center text-blue-950 text-md font-semibold font-['Inter']">
          Relation and Function
        </div>
      </div>
      <div class=" text-blue-950 lg:text-[32px] m-10 xl:text-[32px] text-[16px]  text-2xl font-bold font-['Montserrat'] lg:ml-32">
        Relations and Functions ( Mathematics )
      </div>

      <div className="flex justify-center items-center lg:gap-x-16 gap-x-8 font-semibold ">
        <div className="text-blue-950 font-extrabold">Study</div>
        <div className="text-gray-400">Quiz</div>
        <div className="text-gray-400">Test</div>
        <div className="text-gray-400">Game</div>
        <div className="text-gray-400">Other</div>
      </div>

          <Card />
          

          {/* Brand Logo and Create Flashcard */}

          <div className="flex justify-around p-10">
              
              <div>
                      
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse flex flex-col">
                      <span className="before:content-[Powerd by] ml-16">Powered by</span>
                      <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhkxrV_4gk499OFUWXTChAXqcNbFCPOAZy-aGreK631RXIxTVqz96Xo-uxlnL36Be1TsJd-YSmMN-dp3GIL-xJ4d_U-GRp0lRs92ViZG3wgFH9JA53CQGTOyeCj8_8E-_AE0TnFP-X20SApwznnEqjYmK3bTPpHnetGpHfBi6LG8mtEwX1OwyybY7vtbkS5"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
              </div>
              <div>
                  <span className="p-5 bg-blue-950 rounded-full text-white 
                  "><AddIcon /></span>
                  <span className="text-2xl text-blue-950 ml-5">Create FlashCard</span>
                  
              </div>
          </div>
          <div className="ml-20 p-5">
              
          <div class="text-blue-950 text-5xl font-bold font-['Inter'] tracking-tight">FAQ</div>



<div className="flex flex-col gap-y-10 p-5">
    <span className="rounded-xl p-2 border-2 border-blue-950  w-96 text-sm">Can education flashcards be used for all age groups?   &nbsp; <ExpandMoreIcon/></span>
    <span className="rounded-xl p-2 border-2 border-blue-950 w-96 text-sm">Can education flashcards be used for all age groups?   &nbsp; <ExpandMoreIcon/></span>
    <span className="rounded-xl p-2 border-2 border-blue-950 w-96 text-sm">Can education flashcards be used for all age groups?  &nbsp;  <ExpandMoreIcon/></span>
</div>
</div>
    </>
  );
}

export default Home;
