import Link from "next/link";

export default function Admin_Add_Event_Modal() {
    return (
        <div className="container my-36 w-3/5 h-auto shadow-md py-8 mx-auto my-15">
          <h1 className="text-center py-8 text-4xl font-sans font-medium text-rgb-1-1-38">Add An Event</h1>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
          <input type="text" className="flex align-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Date" required/>
          <br/>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
          <input type="text" className="flex align-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Event Name" required/>
          <br/>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location Name</label>
          <input type="text" className="flex align-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Location Name" required/>
          <br/>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <input type="text" className="flex align-center justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Address" required/>
          <br/>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
          <div className="flex items-stretch">
            <input type="time" className="bg-gray-50 border flex align-center justify-center leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <label className="px-4 pt-2 block mb-2 text-sm flex align-center justify-center font-medium text-gray-900 dark:text-white">to</label>
            <input type="time" className="bg-gray-50 border flex align-center justify-center leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <br/>
          <div className="grid grid-cols-2 gap-4 place-content-center">
            <Link href="/pages/dashboard/event-calendar"><button className="flex align-center justify-center relative text-sm w-2/5 h-9 py-2 outline outline-[#314b89] font-sans text-black outline-1 border-none m-auto">Cancel</button></Link>
            <Link href="/pages/dashboard"><button className="flex align-center justify-center relative text-sm w-2/5 h-9 bg-[#314b89] outline outline-[#314b89] outline-1 py-2 font-sans text-white border-none m-auto">Submit Event</button></Link>
          </div>
      </div>
    );
  }