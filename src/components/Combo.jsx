import React from 'react';

const SearchAndBox = () => {
    return (
        <div className="flex justify-between">
            <div className="pl-[200px] pr-[50px] py-[40px]">
                <div className="px-10 py-2.5 bg-slate-800 rounded-[20px] shadow-inner justify-start items-center gap-[173px] inline-flex">
                    <div className="text-center text-white text-[23px] font-['Poppins'] leading-[65px]">Search Here</div>
                    <div className="w-12 h-12 relative">
                        <div className="Group w-[37.71px] h-[37.71px] left-[4px] top-[4px] absolute"></div>
                    </div>
                </div>

            </div>
            <div className="mr-10 w-[500px] h-[390px] flex bg-slate-800 rounded-[20px] shadow">
                <div className="Frame15 w-[267px] h-[185px] flex-col justify-start items-start inline-flex">
                    <div className="Frame12 justify-start items-start gap-2.5 inline-flex">
                        <div className="Pototan35C text-center"><span className="text-white text-[40px] font-bold font-['Poppins'] leading-[65px]">Pototan</span><span className="text-white text-[40px] font-semibold font-['Poppins'] leading-[65px]"> </span><span className="text-white text-[40px] font-light font-['Poppins'] leading-[65px]">35°C </span></div>
                    </div>
                    <div className="Frame13 justify-start items-start gap-2.5 inline-flex">
                        <div className="WindSpeed11Km text-center"><span className="text-white text-[25px] font-normal font-['Poppins'] leading-[65px]">wind speed : </span><span className="text-white text-[25px] font-light font-['Poppins'] leading-[65px]">11 km</span></div>
                    </div>
                    <div className="Frame14 justify-start items-start gap-2.5 inline-flex">
                        <div className="Tuesday1952 text-center"><span className="text-white text-[25px] font-normal font-['Poppins'] leading-[65px]">Tuesday : </span><span className="text-white text-[25px] font-light font-['Poppins'] leading-[65px]">19:52</span></div>
                    </div>
                    <div className="Frame15 justify-start items-start gap-2.5 inline-flex">
                        <div className="Cloudy text-center text-white text-[25px] font-normal font-['Poppins'] leading-[65px]">Cloudy  </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchAndBox;

{/*
import React from 'react'

const Search = () => {
  return (
    <div className='px-[200px] py-[40px]'>
      <div className="px-10 py-2.5 bg-slate-800 rounded-[20px] shadow-inner justify-start items-center gap-[173px] inline-flex">
        <div className=" text-center text-white text-[23px] font-['Poppins'] leading-[65px]">Search Here</div>
        <div className=" w-12 h-12 relative">
          <div className="Group w-[37.71px] h-[37.71px] left-[4px] top-[4px] absolute">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
*/}
