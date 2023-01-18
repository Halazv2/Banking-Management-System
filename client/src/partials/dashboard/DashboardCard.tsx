import React, {useEffect, useState} from "react";
import axios from "axios";
import "primeicons/primeicons.css";
import getTransactionsOfAccount from "../../hooks/transactions/getTransactionsOfAccount";

function DashboardCard() {
  const id = JSON.parse(localStorage.getItem("account") || "{}");
  const transaction = getTransactionsOfAccount(id._id);
  const [transactionsData, setTransactionsData] = useState([]);
  useEffect(() => {
    setTransactionsData(transaction.data?.transactions);
    console.log(transactionsData);
  }, [transaction]);
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
                    <div className='font-semibold text-center'>
                      Receiver <span className='text-slate-400'>(ID)</span>
                    </div>
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
              {transactionsData &&
                transactionsData.map((transaction: any) => {
                  return (
                    <tbody className='text-sm font-medium divide-y divide-slate-100'>
                      <tr>
                        <td className='p-2'>
                          <div className='text-center font-semibold'>{transaction.receiver}</div>
                        </td>
                        <td className='p-2'>
                          <div className='text-center'>{transaction.createdAt}</div>
                        </td>
                        <td className='p-2'>
                          <div className='text-center text-sky-500'>{transaction.amount}</div>
                        </td>
                        <td className='p-2'>
                          <div className='text-center text-sky-500'>{transaction.status}</div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;
