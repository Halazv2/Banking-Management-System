import {useState} from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import BannerBankStatement from "../../partials/dashboard/BankStatement/BannerBankStatement";
import BankStatementCard from "../../partials/dashboard/BankStatement/BankStatementCard";

function BankStatement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
            {/* banner */}
            <BannerBankStatement />
            <BankStatementCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default BankStatement;
