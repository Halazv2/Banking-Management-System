import React, {useEffect} from "react";
import axios from "axios";
import "primeicons/primeicons.css";

function DashboardCardUser({users, getUsers}: any) {


  return (
    <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>Users</h2>
      </header>
      <div className='p-3'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
              <tr>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Full Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Email</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Phone</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Age</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Status</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}

            <tbody className='text-sm font-medium divide-y divide-slate-100'>
              <tr>
                <td className='p-2'>
                  <div className='flex items-center'>
                    <div className='text-slate-800 font-semibold'>full_name</div>
                  </div>
                </td>
                <td className='p-2'>
                  <div className='text-center font-semibold'>email</div>
                </td>
                <td className='p-2'>
                  <div className='text-center'>phone_number</div>
                </td>
                <td className='p-2'>
                  <div className='text-center text-sky-500'>age</div>
                </td>
                <td className='p-2'>
                  <div className={`text-center text-xs font-semibold rounded-full `}>status</div>
                </td>
                <td className='p-2'>
                  <div className='text-center flex justify-center items-center'>
                    <button className=' text-blue-500 hover:text-blue:700 font-bold py-2 px-4 rounded'>
                      <i className='pi pi-shield'></i>
                    </button>
                  </div>
                  <div className='text-center flex justify-center items-center'>
                    <button className=' text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded'>
                      <i className='pi pi-ban'></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCardUser;
