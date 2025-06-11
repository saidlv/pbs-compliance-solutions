import React from 'react'
import { boroughs, getBoroId } from '@/utils/borough';
const ManageProperties = ({
  addByAddress,
  addByBin,
  ownedProperties,
  onRefresh,
  onAdd,
  onDelete
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

  return (
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-screen mb-8">
      {/* Tab buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6">
        {buttonList.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 rounded-full text-center font-semibold ${activeTab===tab ? 'bg-[#8AD5B7] text-[#1E2322]' : 'bg-[#1E2322] text-[#7C9087]'}`}
          >{tab}</button>
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
      {activeTab==='Add Property For Me' && (
        <div>
          <button onClick={onRefresh} className="p-2 bg-[#8AD5B7] rounded">Refresh My Properties</button>
          <ul className="mt-4">
            {ownedProperties.length ? ownedProperties?.map((p,index) => <li key={index} className="p-2">{p?.address}</li>) : (
              <li className="p-2 text-gray-500">No properties found</li>
            )}
          </ul>
        </div>
      )}

      {/* Delete Single */}
      {activeTab==='Delete Property' && (
        <div>
          <input
            value={deleteId}
            onChange={e => setDeleteId(e.target.value)}
            placeholder="Property ID to delete"
            className="p-2 rounded"
          />
          <button onClick={() => onDelete(deleteId)} className="ml-2 p-2 bg-[#8AD5B7] rounded">Delete</button>
        </div>
      )}
    </div>
  )
}

export default ManageProperties