import React from 'react'

const ManageProperties = () => {
     const buttonList = [
    "Add Property with Address",
    "Add Property with BIN Number",
    "Add Property For Me",
    "Delete Property",
  ];

  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
            <div className="w-full mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6">
            {buttonList.map((button, index) => (
              <button
                onClick={() => {}}
                key={index}
                className={`w-full lg:w-auto bg-[#1E2322] hover:bg-[#8AD5B7]  font-semibold text-base xl:text-xl  p-2 xl:p-3 rounded-full shadow-md text-[#7C9087] hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center `}
              >
                {button}
              </button>
            ))}
          </div>
          
          <div className='w-full mx-auto h-1.5 xl:h-2 bg-[#8AD5B7] my-3 xl:my-6'></div>
    </div>
    </>
  )
}

export default ManageProperties