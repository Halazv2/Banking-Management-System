import React, {useRef as UseRef, useEffect as UseEffect, useState} from "react";
import Transition from "../../utils/Transition";
import * as yup from "yup";
import {Formik} from "formik";
import "primeicons/primeicons.css";
import useSendMoney from "../../hooks/transactions/sendMoney";

const schema = yup.object().shape({
  message: yup.string().required("Message is required"),
  receiver: yup.string().required("receiver is required"),
  amount: yup.number().required("Amount is required"),
});

function SendMoney({modalOpen, setModalOpen}: any) {
  const modalContent = UseRef(null);

  // close if the esc key is pressed
  UseEffect(() => {
    const keyHandler = (keyCode: any) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleOnSubmit = (values: any) => {
    useSendMoney(values);
  };

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className='fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity'
        show={modalOpen}
        enter='transition ease-out duration-200'
        enterStart='opacity-0'
        enterEnd='opacity-100'
        leave='transition ease-out duration-100'
        leaveStart='opacity-100'
        leaveEnd='opacity-0'
        aria-hidden='true'
      />
      {/* Modal dialog */}
      <Transition
        className='fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6'
        role='dialog'
        aria-modal='true'
        show={modalOpen}
        enter='transition ease-in-out duration-200'
        enterStart='opacity-0 translate-y-4'
        enterEnd='opacity-100 translate-y-0'
        leave='transition ease-in-out duration-200'
        leaveStart='opacity-100 translate-y-0'
        leaveEnd='opacity-0 translate-y-4'
      >
        <div ref={modalContent} className='bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg'>
          <div className='px-4  pb-4 sm:p-6 sm:pb-4'>
            <div className='flex items-start justify-between p-4 border-b border-gray-200'>
              <h3 className='text-lg font-semibold leading-6 text-gray-900 flex items-center gap-2'>
                <span className='sr-only'> Send Money to </span>
                <i className='pi pi-bitcoin'></i>
                <p>Send Money</p>
              </h3>
              <button className='text-gray-400 hover:text-gray-500' onClick={() => setModalOpen(false)}>
                <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Search form */}
          <Formik
            initialValues={{
              receiver: "",
              amount: "",
            }}
            validationSchema={schema}
            onSubmit={(values, {setSubmitting}) => {
              handleOnSubmit(values);
              setSubmitting(false);
            }}
          >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue, isValid}) => (
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col p-4 '>
                  <div className='flex flex-col w-full items-center justify-center gap-6 mb-4'>
                    <div className='flex flex-col w-full'>
                      <label className='text-sm font-medium text-gray-700'>
                        Receiver ID <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        name='receiver'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.receiver}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      />
                      <div className='text-red-500 text-xs italic'>{errors.receiver && touched.receiver && errors.receiver}</div>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label className='text-sm font-medium text-gray-700'>
                        Amount <span className='text-red-500'>*</span>
                      </label>
                      <input
                        type='text'
                        name='amount'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.amount}
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      />
                      <div className='text-red-500 text-xs italic'>{errors.amount && touched.amount && errors.amount}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleOnSubmit(values);
                      setModalOpen(false);
                      values.receiver = "";
                      values.amount = "";
                    }}
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full text-white bg-indigo-600 hover:bg-indigo-700 p-2 flex justify-center rounded relative'
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Transition>
    </>
  );
}

export default SendMoney;
