//properties
'use client'
import React, { useState ,useEffect } from 'react'
import {getIdFromBoro} from '@/utils/borough'
import { CheckCheck, X } from 'lucide-react'

const PropertyList = ({ properties, entries, handleIncrement, handleDecrement }) => {
  const [addresses, setaddresses] = useState([])
  useEffect(() => {
  const addresses = properties.map((prop,index)=> prop.bin +
  " - " +
  prop.house_number + " " +
  prop.stname + " " +
  getIdFromBoro(prop.boro) +
  " NY " +
  prop.zipcode )
  setaddresses(addresses)
  },[properties])
  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full min-h-[80vh] 2xl:min-h-[50vh] 3xl:min-h-[30vh] overflow-x-auto">
              <table className="text-[#D9D9D9] text-center w-full h-full">
                <thead>
                  <tr className="border-b-2 border-[#8AD5B7] text-[#8AD5B7] text-lg sm:text-xl lg:text-2xl font-semibold">
                    <th className="w-2/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Address</th>
                    <th className="w-1/5 lg:px-2 py-6 border-r-2 border-[#8AD5B7]">Sync Status</th>
                    <th className="w-1/5 lg:px-2 py-6">View</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.length > 0 ? (
                    properties.map((property, index) => (
                      <tr
                        key={property.id || index}
                        className={`${index !== properties.length - 1 ? 'border-b-2' : ''} border-[#89A096] text-[#D9D9D9] text-lg font-semibold`}
                      >
                        <td className="w-2/5 px-2 py-6 border-r-2 border-[#8AD5B7]">
                          {addresses[index]}
                        </td>
                        <td className="w-1/5 px-2 py-6 border-r-2 border-[#8AD5B7] text-center">
                          {property.sync_at ? <CheckCheck color="#08fd0c" className='w-full flex justify-center' /> : <X color="#ff0000" className='w-full flex justify'/>}
                        </td>
                        <td className="w-1/5 px-2 py-6">
                          <button onClick={() => console.log('view', property.id)}>View</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-6 text-[#89A096]">
                        No properties found.
                      </td>
                    </tr>
                  )}
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

export default PropertyList

//summary
'use client';
import React, { useState, useEffect } from 'react';
import { apiRequest } from '@/utils/csrfHandler';

export default function PropertySummary({ entries, handleIncrement, handleDecrement }) {
  const [properties, setProperties] = useState([]);
  const [totals, setTotals] = useState({
    dobViol: 0, dobComp: 0, ecbHear: 0, ecbPena: 0, hpdViol: 0, hpdComp: 0, hpdRepa: 0,
  });

  useEffect(() => {
    async function loadSummary() {
      try {
        const res = await apiRequest('get', '/user/properties');
        const data = res.data.data;
        setProperties(data);
        const t = data.reduce((acc, p) => {
          acc.dobViol += p.dob_violations_count || 0;
          acc.dobComp += p.dob_complaints_count || 0;
          acc.ecbHear += p.oath_hearings_count || 0;
          acc.ecbPena += (p.summary?.total_penalty ?? 0);
          acc.hpdViol += p.hpd_violations_count || 0;
          acc.hpdComp += p.hpd_complaints_count || 0;
          acc.hpdRepa += p.hpd_repairs_count || 0;
          return acc;
        }, { dobViol: 0, dobComp: 0, ecbHear: 0, ecbPena: 0, hpdViol: 0, hpdComp: 0, hpdRepa: 0 });
        setTotals(t);
      } catch (err) {
        console.error('Failed fetching property summary', err);
      }
    }
    loadSummary();
  }, []);

  if (!properties.length) {
    return <p className="p-4 text-center text-[#89A096]">No properties found.</p>;
  }

  return (
    <>
    <div className="p-3 lg:p-10 bg-[#2E3734] rounded-xl w-full overflow-x-auto custom-scrollbar">
      <table className="w-full text-[#D9D9D9] text-center">
        <thead>
          <tr className="border-b-2 border-[#8AD5B7]">
            <th className="px-2 py-4">ADDRESS</th>
            <th className="px-2 py-4">DOB Viol.</th>
            <th className="px-2 py-4">DOB Comp.</th>
            <th className="px-2 py-4">ECB Hear.</th>
            <th className="px-2 py-4">ECB Pena.</th>
            <th className="px-2 py-4">HPD Viol.</th>
            <th className="px-2 py-4">HPD Comp.</th>
            <th className="px-2 py-4">HPD Repa.</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((p, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-[#2E3734]' : ''}>
              <td className="border-x-2 border-[#8AD5B7] py-3">
                {p.house_number} {p.stname}
              </td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.dob_violations_count}</td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.dob_complaints_count}</td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.oath_hearings_count}</td>
              <td className="border-x-2 border-[#8AD5B7] py-3">
                ${ (p.summary?.total_penalty ?? 0).toFixed(2) }
              </td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_violations_count}</td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_complaints_count}</td>
              <td className="border-x-2 border-[#8AD5B7] py-3">{p.hpd_repairs_count}</td>
            </tr>
          ))}
          <tr className="font-semibold border-t-2 border-[#8AD5B7] text-[#D9D9D9]">
            <td className="py-3">Total</td>
            <td className="py-3">{totals.dobViol}</td>
            <td className="py-3">{totals.dobComp}</td>
            <td className="py-3">{totals.ecbHear}</td>
            <td className="py-3">${ totals.ecbPena.toFixed(2) }</td>
            <td className="py-3">{totals.hpdViol}</td>
            <td className="py-3">{totals.hpdComp}</td>
            <td className="py-3">{totals.hpdRepa}</td>
          </tr>
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
  );
}