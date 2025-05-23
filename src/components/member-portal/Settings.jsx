import React from "react";

const Settings = ({entries, handleIncrement, handleDecrement}) => {
  return (
    <>
      <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
        <div className="w-full mx-auto flex justify-between items-center gap-3 xl:gap-6">
           <h2 className="font-conthrax font-semibold text-3xl xl:text-4xl text-[#D9D9D9]">NOTIFICATION</h2> 
          <div className="flex justify-center items-center gap-3 xl:gap-6">
            <button
              onClick={() => {}}
              className={`w-full lg:w-auto bg-[#1E2322] hover:bg-[#8AD5B7]  font-semibold text-base xl:text-xl  p-3 rounded-full shadow-md text-[#7C9087] hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center `}
            >
              Notifications
            </button>
             <button
              onClick={() => {}}
              className={`w-full lg:w-auto bg-[#1E2322] hover:bg-[#8AD5B7]  font-semibold text-base xl:text-xl  p-3 rounded-full shadow-md text-[#7C9087] hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center `}
            >
              Reminders
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl px-2 py-8">
            <p>Showing 1 to 2 of 2 entries</p>
            <div className="flex items-center gap-4">
              <button className="hover:text-[#8AD5B7]" onClick={handleDecrement}>Previous</button>
              <div
                className="bg-[#2E3734] border border-[#8AD5B7] rounded-full h-auto outline-none w-12 flex items-center justify-center"
                min="1"
              >
                {entries}
              </div>
              <button className="hover:text-[#8AD5B7]" onClick={handleIncrement}>Next</button>
            </div>
          </div>
    </>
  );
};

export default Settings;
