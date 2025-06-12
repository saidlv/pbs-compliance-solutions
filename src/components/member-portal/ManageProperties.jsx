import React,{useState} from 'react'
import { boroughs, getBoroId, getIdFromBoro } from '@/utils/borough';
import { X } from 'lucide-react'
const ManageProperties = ({
  addByAddress,
  addByBin,
  ownedProperties,
  onRefresh,
  onAdd,
  onDelete,
  entries = 10,
  search = '',
  onSearchChange,
  onEntriesChange,
}) => {
  const buttonList = [
    'Add Property with Address',
    'Add Property with BIN Number',
    'Add Property For Me',
    'Delete Property',
  ]
  const [activeTab, setActiveTab] = React.useState(buttonList[0]);
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [borough, setBorough] = React.useState(0); // selected borough
  const [binQuery, setBinQuery] = React.useState('')
  const [deleteId, setDeleteId] = React.useState('')
   // pagination + filtering state for Delete tab
  const [currentPage, setCurrentPage] = useState(1)

  // filter by address text
  const term = (search || '').toLowerCase()
  const filtered = ownedProperties.filter((p) => {
    const addr = `${p.house_number} ${p.stname} ${getIdFromBoro(p.boro)}`
    return !term || addr.toLowerCase().includes(term)
  })

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / entries))
  const startIdx = (currentPage - 1) * entries
  const current = filtered.slice(startIdx, startIdx + entries)

  return (
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
      {/* Tab buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6">
        {buttonList.map(tab => (
          tab === 'Add Property For Me' ? <a 
            href={`${process.env.NEXT_PUBLIC_API_URL}/property-add`}
            key={tab}
             onClick={() => {
              setActiveTab(tab);
            }}
            className={`p-2 rounded-full text-center font-semibold flex justify-center items-center ${activeTab===tab ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087]'}`}
          >{tab}</a> : ( 
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
            }}
            className={`p-2 rounded-full text-center font-semibold ${activeTab===tab ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087]'}`}
          >{tab}</button>
          )
        ))}
      </div>
      <div className='h-1.5 bg-[#8AD5B7] my-6'></div>

      {/* Add by Address */}
      {activeTab==='Add Property with Address' && (
        <div className='flex flex-col items-center gap-6'>
          <input
            value={street}
            onChange={e => setStreet(e.target.value)}
            placeholder="Street name"
            className="p-2 rounded w-full"
          />
          <input
            value={house}
            onChange={e => setHouse(e.target.value)}
            placeholder="House number"
            className="p-2 rounded w-full"
          />
          <select
            value={borough}
            onChange={e => setBorough(getBoroId(e.target.value))}
            className="p-2 rounded w-full"
          >
            <option value="">Select borough</option>
            {boroughs.map((b, idx) => (
              <option key={idx} value={b}>{b}</option>
            ))}
          </select>
          <button
            onClick={() => addByAddress(street, house, borough)}
            className="p-2 bg-[#8AD5B7] rounded w-full"
          >
            Add Property
          </button>
        </div>
      )}

      {/* Add by BIN */}
      {activeTab==='Add Property with BIN Number' && (
        <div>
          <input
            value={binQuery}
            onChange={e => setBinQuery(e.target.value)}
            placeholder="Enter BIN"
            className="p-2 rounded"
          />
          <button onClick={() => addByBin(binQuery)} className="ml-2 p-2 bg-[#8AD5B7] rounded">Search</button>
        </div>
      )}

      {/* Refresh Owned */}
      {/* {activeTab==='Add Property For Me' && (
        <div>
          <button onClick={onRefresh} className="p-2 bg-[#8AD5B7] rounded">Refresh My Properties</button>
          <ul className="mt-4">
            {ownedProperties.length ? ownedProperties?.map((p,index) => <li key={index} className="p-2">{p?.address}</li>) : (
              <li className="p-2 text-gray-500">No properties found</li>
            )}
          </ul>
        </div>
      )} */}

      {/* Delete Single */}
       {activeTab === 'Delete Property' && (
        <>
          {/* entries + search row */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center w-full text-[#89A096] font-semibold mb-4">
            <div className="flex items-center">
              <span className="mr-2">Show</span>
              <select
                value={entries}
                onChange={(e) => {
                  onEntriesChange(Number(e.target.value));
                }}
                className="bg-[#2E3734] border border-[#8AD5B7] rounded-full px-3 py-1 text-[#89A096]"
              >
                {[10, 25, 50, 100].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <span className="ml-2">entries</span>
            </div>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search"
                className="bg-[#2E3734] rounded-full px-4 py-1 border border-[#8AD5B7] text-[#89A096]"
              />
              <X
                className="absolute right-2 top-1 cursor-pointer text-[#89A096]"
                onClick={() => onSearchChange('')}
              />
            </div>
          </div>

           {/* table */}
          <div className="overflow-x-auto">
            <table className="w-full text-[#D9D9D9] text-center">
              <thead>
                <tr className="">
                  <th className="px-2 py-3 border-2 border-[#8AD5B7]">ADDRESS</th>
                  <th className="px-2 py-3 border-2 border-[#8AD5B7]">Action</th>
                </tr>
              </thead>
              <tbody>
                {current.map((p, i) => (
                  <tr
                    key={p.id || i}
                    className={i % 2 === 0 ? 'bg-[#2E3734]' : ''}
                  >
                    <td className="border-2 border-[#8AD5B7] py-3 text-left px-2">
                      {p.house_number} {p.stname},{' '}
                      {boroughs[p.boro] || getIdFromBoro(p.boro)}
                    </td>
                    <td className="border-2 border-[#8AD5B7] py-3">
                      <button
                        onClick={() => onDelete(p.id)}
                        className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {current.length === 0 && (
                  <tr>
                    <td
                      colSpan={2}
                      className="py-6 text-[#89A096]"
                    >
                      No properties found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

            {/* pagination footer */}
          <div className="flex justify-between items-center mt-4 text-[#89A096] font-semibold">
            <div>
              Showing{' '}
              {total === 0 ? 0 : startIdx + 1} to{' '}
              {Math.min(startIdx + entries, total)} of {total} entries
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.max(1, p - 1))
                }
                disabled={currentPage <= 1}
                className="disabled:text-gray-500 hover:text-[#8AD5B7]"
              >
                Previous
              </button>
              <span>
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage >= totalPages}
                className="disabled:text-gray-500 hover:text-[#8AD5B7]"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ManageProperties