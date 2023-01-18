import "primeicons/primeicons.css";

function BankStatementCard() {
  const id = "63b5ade783a3285bd18d84d4";

  return (
    <>
      <div className='col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200'>
        <header className='px-5 py-4 border-b border-slate-100'>
          <a href={"http://localhost:4000/transaction/download/" + id} target='blank'>
            <h2 className='font-semibold text-slate-800 flex items-center gap-2 cursor-pointer hover:text-sky-500 '>
              <i className='pi pi-file-pdf' />
              <p>Download Bank Statement (PDF)</p>
            </h2>
          </a>
        </header>
      </div>
    </>
  );
}

export default BankStatementCard;
