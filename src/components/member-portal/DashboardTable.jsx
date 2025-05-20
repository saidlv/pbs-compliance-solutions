import React from 'react'

const DashboardTable = () => {
  return (
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full mt-4">
              <table className="text-[#D9D9D9] text-center w-full">
                <thead>
                  <tr className="border-b-2 border-[#8AD5B7] text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
                    <th className="w-2/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Address</th>
                    <th className="w-1/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Sync Status</th>
                    <th className="w-1/5 lg:px-2 py-6">View</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(9)
                    .fill("")
                    .map((_, index) => (
                      <tr
                        key={index}
                        className={`${index !== 8 ? "border-b-2" : ""} border-[#89A096] text-[#D9D9D9] text-lg font-semibold`}
                      >
                        <td className="w-2/5 px-2 py-6 border-r-2 border-[#8AD5B7]"></td>
                        <td className="w-1/5 px-2 py-6 border-r-2 border-[#8AD5B7]"></td>
                        <td className="w-1/5 px-2 py-6"></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
  )
}

export default DashboardTable