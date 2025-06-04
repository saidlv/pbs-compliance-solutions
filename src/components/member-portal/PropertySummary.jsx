import React from 'react'

const PropertySummary = ({ properties = [], entries, handleIncrement, handleDecrement }) => {
  // Determine which fields to show from the first property’s summary
  const summaryKeys = properties.length > 0 && properties[0].summary
    ? Object.keys(properties[0].summary)
    : []

  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-[80vh] overflow-x-auto custom-scrollbar">
       <table className="text-[#D9D9D9] text-center w-full h-full">
        <thead>
          <tr className="border-b-2 border-[#8AD5B7] text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
            {summaryKeys.map((key) => (
              <th key={key} className="lg:px-2 py-6 border-x-2 border-[#8AD5B7]">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {properties.length > 0 ? (
            properties.map((prop, row) => (
              <tr key={row} className={`border-b-2 border-[#89A096] text-[#D9D9D9] text-lg font-semibold`}>
                {summaryKeys.map((key) => (
                  <td key={key} className="lg:px-2 py-6 border-x-2 border-[#8AD5B7]">
                    {prop.summary[key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={summaryKeys.length || 1} className="py-6 text-[#89A096]">
                No summary data.
              </td>
            </tr>
          )}
        </tbody>
       </table>
     </div>

     <div className="flex justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl px-2 py-8">
       <p>Showing 1 to {properties.length} of {properties.length} entries</p>
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