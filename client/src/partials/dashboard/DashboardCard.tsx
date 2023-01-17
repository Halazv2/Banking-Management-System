import React, {useEffect} from "react";
import axios from "axios";
import "primeicons/primeicons.css";

function DashboardCard({Transactions, getTransactions}: any) {
  return (
    <>
      <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
        <header className='px-5 py-4 border-b border-slate-100'>
          <h2 className='font-semibold text-slate-800'>Last Transactions</h2>
        </header>
        <div className='p-3'>
          {/* Table */}
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              {/* Table header */}
              <thead className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm'>
                <tr>
                  <th className='p-2'>
                    <div className='font-semibold text-left'>To Account</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>From Account</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>Transaction Type</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>Transaction Date</div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>
                      Amount <span className='text-slate-400'>(MAD)</span>
                    </div>
                  </th>
                  <th className='p-2'>
                    <div className='font-semibold text-center'>Status</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm font-medium divide-y divide-slate-100'>
                <tr>
                  <td className='p-2'>
                    <div className='flex items-center'>1320DSKDSDK</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center font-semibold'>32020DSKDSDK</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center font-semibold'>Direct</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center'>2020-12-12</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center text-sky-500'>2000</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-center text-sky-500'>Pending</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
