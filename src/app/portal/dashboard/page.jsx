"use client";
import React, { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import { apiRequest } from '@/utils/csrfHandler'
import Sidebar from "@/components/navbar2/Sidebar";
import PropertyList from "@/components/member-portal/PropertyList";
import ManageProperties from "@/components/member-portal/ManageProperties";
import PropertySummary from "@/components/member-portal/PropertySummary";
import Settings from "@/components/member-portal/Settings";
import { getBoroId } from "@/utils/borough";

const Page = () => {
  // Dashboard API state lifted here
  const hasInit = useRef(false);
  const [properties, setProperties] = useState([]);
  const [entries, setEntries] = useState(20);
  const [search, setSearch] = useState("");
  const [displayComponent, setDisplayComponent] = useState("Property List");

  // Settings state
  const [notificationSettings, setNotificationSettings] = useState(null);
  const [reminderSettings, setReminderSettings] = useState(null);

  const buttonList = [
    "Property List",
    "Manage Properties",
    "Property Summary",
    "Settings",
  ];

  // load user properties
  const loadProperties = async () => {
    try {
      const json = await apiRequest('get', '/user/properties');
      setProperties(Array.isArray(json.data.data)
        ? json.data.data
          : []
      );
      console.log(json.data.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    // only run once, even in StrictMode
    if (hasInit.current) return;
    hasInit.current = true;
    // load properties once
    loadProperties();
    // load settings once
    //const keys = ['sent_by','dob','ecb','fdny','hpd','inspections','permits'];
    (async () => {
      try {
        const settings = await apiRequest('post', '/user/notify-settings');
        setNotificationSettings(settings.data.data);
        const reminders = await apiRequest('post', '/user/reminder-settings');
        setReminderSettings(reminders.data.data);
      } catch (err) {
        console.error('Failed loading settings', err);
      }
    })();
  }, []);

  // search address by term, house number and borough
  const addByAddress = async (street, house, borough) => {
    try {
      borough = getBoroId(borough);
      const response = await apiRequest('post', '/user/add-properties/address', { street, house, borough });
      if (response.status === 200) {
        const newProp = response.data;
        console.log('New property added:', newProp);
        // append to properties list
        setProperties(prev => [...prev, newProp]);
      }
    } catch (e) {
      console.error('searchAddress error', e);
    }
  };

  // search by BIN number
  const addByBIN = async (bin) => {
    try {
      const response = await apiRequest('post', '/user/add-properties/bin', { bin });
      if (response.status === 200) {
        const newProp = response.data.data;
        // append to properties list
        setProperties(prev => [...prev, newProp]);
        console.log('Added by BIN:', newProp);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // add property
  const addProperty = async (id) => {
    try {
      await apiRequest('post', '/add-property-to-user', { property_id: id });
      loadProperties();
    } catch (e) {
      console.error(e);
    }
  };

  // delete a property by ID
  const deleteProperty = async (id) => {
    try {
      await apiRequest('post', '/delete-single-property-from-user', { property_id: id });
      loadProperties();
    } catch (e) {
      console.error(e);
    }
  };

  // update notification settings via JWT-protected API
  const updateNotificationSettings = async (payload) => {
    try {
      const { data: response } = await apiRequest('post', '/user/notify-settings', payload);
      // API returns { success: true, data: <settings> }
      setNotificationSettings(response.data);
      return response.data;
    } catch (e) {
      console.error('Failed updating notifications', e);
      throw e;
    }
  };
  // update reminder settings via JWT-protected API
  const updateReminderSettings = async (payload) => {
    try {
      const { data: response } = await apiRequest('post', '/user/reminder-settings', payload);
      // API returns { success: true, data: <settings> }
      setReminderSettings(response.data);
      return response.data;
    } catch (e) {
      console.error('Failed updating reminders', e);
      throw e;
    }
  };

  return (
    <div className="relative bg-[#37403D] w-full min-h-screen">
      {/* Sidebar (Always Visible) */}
      <Sidebar />

      {/* Main Content Centered */}
      <div className="flex justify-center">
        <div className="pl-[10vw] lg:pl-[5vw] mx-auto pt-10 lg:pt-16 w-full">
          <h1 className="text-4xl md:text-5xl xl:text-[55px] font-conthrax font-semibold text-[#8AD5B7] w-full text-center pt-16 xl:pt-24 max-w-md sm:max-w-3xl mx-auto">
            PBS Member Portal
          </h1>
          <p className="text-center text-[#89A096] font-semibold text-lg xl:text-xl pt-3 xl:pt-5">
            Compliance Made Simple, Projects Done Right
          </p>

          <div className="w-[30%] xl:w-[20%] mx-auto bg-[#8AD5B7] h-2 my-6"></div>

          <h2 className="text-3xl md:text-4xl xl:text-[40px] font-conthrax font-semibold text-[#D9D9D9] w-full text-center pt-0 xl:pt-6">
            Dashboard
          </h2>

          <div className="w-[90%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 xl:pt-10">
            {buttonList.map((button, index) => (
              <button
                onClick={() => {
                  setDisplayComponent(button);
                }}
                key={index}
                className={`w-full lg:w-auto hover:bg-[#8AD5B7]  font-semibold text-lg xl:text-xl p-2 rounded-full shadow-md hover:text-[#1E2322] transition duration-300 ease-in-out text-center cursor-pointer flex items-center justify-center ${
                  displayComponent === button
                    ? "bg-[#8AD5B7] text-[#1E2322]"
                    : "bg-[#2E3734] text-[#89A096]"
                }`}
              >
                {button}
              </button>
            ))}
          </div>

          <div className="w-[90%] mx-auto flex flex-col justify-center items-center mt-6">
            {(displayComponent === "Property List" || displayComponent === "Property Summary") && (
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center w-full mx-auto text-[#89A096] font-semibold text-lg xl:text-xl p-2 rounded-full mb-6">
              {/* Entries scroller */}
              <div className="flex items-center text-white p-2 rounded-md">
                <span className="mr-2 text-[#89A096]">Show</span>
                <select
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                  className="bg-[#2E3734] border border-[#8AD5B7] rounded-full px-3 py-1 text-[#89A096] outline-none overflow-y-hidden"
                >
                  {[10, 25, 50, 100].map((opt) => (
                    <option key={opt} value={opt} className="bg-[#2E3734] text-[#89A096]">
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="ml-2 text-[#89A096]">Entries</span>
              </div>
              {/* Search bar */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="search"
                  className="bg-[#2E3734] rounded-full px-3 py-1 border border-[#8AD5B7]"
                />
                <X className="absolute right-4 cursor-pointer" onClick={()=> setSearch('')}/>
              </div>
            </div>
            )}

            {displayComponent == "Property List" && (
              <PropertyList
                properties={properties}
                entries={entries}
                search={search}
              />
            )}
            {displayComponent == "Manage Properties" && (
              <ManageProperties
                addByAddress={addByAddress}
                addByBIN={addByBIN}
                ownedProperties={properties}
                onRefresh={loadProperties}
                onAdd={addProperty}
                onDelete={deleteProperty}
              />
            )}
            {displayComponent == "Property Summary" && (
              <PropertySummary
                entries={entries}
                search={search}
                properties={properties}
              />
            )}
            {displayComponent == "Settings" && (
              <Settings
                notificationSettings={notificationSettings}
                reminderSettings={reminderSettings}
                onUpdateNotifications={updateNotificationSettings}
                onUpdateReminders={updateReminderSettings}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;