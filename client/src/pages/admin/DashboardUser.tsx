import React, {useState} from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import WelcomeBannerUser from "../../partials/dashboard/WelcomeBannerUser";
import DashboardCardUser from "../../partials/dashboard/DashboardCardUser";

function DashboardUser() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const getUsers = async () => {};
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
            <WelcomeBannerUser />
            <DashboardCardUser users={users} getUsers={getUsers} setModalOpen={setModalOpen} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardUser;
