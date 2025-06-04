import React from 'react'

const ManageProperties = ({
  addressResults,
  onSearchAddress,
  binResults,
  onSearchBIN,
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
  const [addressQuery, setAddressQuery] = React.useState('')
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
        <div>
          <input
            value={addressQuery}
            onChange={e => setAddressQuery(e.target.value)}
            placeholder="Enter address"
            className="p-2 rounded"
          />
          <button onClick={() => onSearchAddress(addressQuery)} className="ml-2 p-2 bg-[#8AD5B7] rounded">Search</button>
          <ul className="mt-4">
            {addressResults?.map(p => (
              <li key={p?.id} className="flex justify-between p-2">
                <span>{p?.address}</span>
                <button onClick={()=>onAdd(p?.id)} className="bg-[#8AD5B7] p-1 rounded">Add</button>
              </li>
            ))}
          </ul>
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
          <button onClick={() => onSearchBIN(binQuery)} className="ml-2 p-2 bg-[#8AD5B7] rounded">Search</button>
          <ul className="mt-4">
            {binResults?.map(p => (
              <li key={p?.id} className="flex justify-between p-2">
                <span>{p?.address}</span>
                <button onClick={()=>onAdd(p?.id)} className="bg-[#8AD5B7] p-1 rounded">Add</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Refresh Owned */}
      {activeTab==='Add Property For Me' && (
        <div>
          <button onClick={onRefresh} className="p-2 bg-[#8AD5B7] rounded">Refresh My Properties</button>
          <ul className="mt-4">
            {ownedProperties?.map(p=> <li key={p?.id} className="p-2">{p?.address}</li>)}
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