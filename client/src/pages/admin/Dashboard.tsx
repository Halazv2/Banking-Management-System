import React, {useState} from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBanner from "../../partials/dashboard/WelcomeBanner";
import AddTrip from "../../partials/actions/SendMoney";
import DashboardCard from "../../partials/dashboard/DashboardCard";
import axios from "axios";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Transactions, setTransactions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const getTransactions = async () => {};
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
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className='grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2 mb-4'>
              {/* Filter button */}
              <AddTrip getTransactions={getTransactions} modalOpen={modalOpen} setModalOpen={setModalOpen} />
            </div>
            <DashboardCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
