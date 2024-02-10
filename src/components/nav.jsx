import React from 'react';

function NavBar() {
  return (
    <div className="flex justify-between items-center px-20 py-6">
      <div className="text-white text-3xl font-semibold font-Poppins hover:text-sky-300 hover:shadow-sky-500 transition-all ease-in">Modern Weather</div>

      <div className="flex gap-8">
        <div className="text-white text-lg font-medium font-Poppins hover:text-sky-300 hover:shadow-sky-400 transition-all ease-in">Home</div>
        <div className="text-white text-lg font-medium font-Poppins hover:text-sky-300 hover:shadow-sky-400 transition-all ease-in">About</div>
        <div className="text-white text-lg font-medium font-Poppins hover:text-sky-300 hover:shadow-sky-400 transition-all ease-in">Contact us</div>
      </div>

      <button className="px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-600 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:translate-y-[2px] transition-all ease-in-out rounded-md shadow-lg text-white text-lg font-medium font-Poppins">Sign up</button>
    </div>
  );
}

export default NavBar


{/*import React from 'react'

function NavBar() {
  return (
    <>
      <div className=" px-[90px] py-[30px] justify-center items-center gap-[120px] inline-flex">
        <div className=" text-white text-[40px] font-semibold font-['Poppins']">Modern Weather</div>

        <div className="Menu w-[350px] h-9 justify-center items-center gap-[50px] inline-flex">
          <div className="Frame1 justify-start items-start flex">
            <div className="Home text-white text-[20px] font-medium font-['Poppins']">Home</div>
          </div>
          <div className="Frame3 justify-start items-start flex">
            <div className="Frame17 justify-start items-start gap-2.5 flex">
              <div className="About text-white text-[20px] font-medium font-['Poppins']">About</div>
            </div>
          </div>
          <div className="Frame4 justify-start items-start flex">
            <div className="ContactUs text-white text-[20px] font-medium font-['Poppins']">Contact us</div>
          </div>
        </div>
        <div className=" w-[165px] h-[78px] px-[35px] py-4 bg-gradient-to-r from-slate-600 to-slate-500 rounded-[20px] shadow-inner justify-start items-start gap-2.5 inline-flex">
          <div className=" text-white text-[25px] font-medium font-['Poppins']">Sign up</div>
        </div>
      </div>
    </>
  );
}


export default NavBar*/}