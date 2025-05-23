import React from 'react'

const PropertySummary = ({entries, handleIncrement, handleDecrement}) => {
  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-[80vh] 2xl:min-h-[50vh] 3xl:min-h-[30vh] overflow-x-auto custom-scrollbar">
              <table className="text-[#D9D9D9] text-center w-full h-full">
                <thead>
                  <tr className="border-b-2 border-[#8AD5B7] text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
                    {Array(10)
                    .fill("")
                    .map((_, index) => (
                    <th key={index} className="lg:px-2 py-6 border-x-2 border-[#8AD5B7]">Address</th>
                    ))}
                  </tr>
                </thead>
                <tbody className='w-full'>
                  {Array(9)
                    .fill("")
                    .map((_, index) => (
                      <tr
                        key={index}
                        className={`${index !== 8 ? "border-b-2" : ""} border-[#89A096] text-[#D9D9D9] text-lg font-semibold w-full`}
                      >
                        {Array(10)
                    .fill("")
                    .map((_, index) => (
                    <td key={index} className="lg:px-2 py-6 border-x-2 border-[#8AD5B7]"></td>
                    ))}
                      </tr>
                    ))}
                </tbody>
              </table>
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
  )
}

export default PropertySummary