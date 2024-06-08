import React from 'react';
import { useLocation , Link } from 'react-router-dom'
import { UserIcon, PhotoIcon, PlusIcon, ArchiveBoxArrowDownIcon, HeartIcon, CreditCardIcon, ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const { pathname } = useLocation();
  const subpage = pathname.split("/dashboard/")?.[1];
  console.log(subpage);
  function Linkness(type) {
    let classes = "w-5/6 h-10 rounded-lg flex items-center justify-start hover:bg-indigo-600";
    if (type === subpage) {
      classes += " bg-indigo-600";
    }
    return classes;
  }

  const handleLogout = () => {
    fetch('http://localhost:3000/api/logout', {
      method: 'GET',
      credentials: 'include',
    })
    .then((response) => {
      if (response.ok) {
        toast.success('Logout Successful');
        console.log('Logout Successful');
        //wait for 2 seconds before redirecting to main page
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        toast.error('Failed to logout');
        console.log('Failed to logout');
        throw new Error('Failed to logout, Status: ' + response.status);
      }
    })
    .catch((error) => {
      console.log('Failed to logout', error);
    });
  };


  return (
    <>
    <div className="w-1/5 fixed top-4 left-6 bottom-4 py-10 pl-10 flex flex-col items-start justify-between gap-3 overflow-hidden rounded-3xl z-50">
      
      {/* Quick Links  */}
      <div className="w-full flex flex-col items-start gap-3">

        <div className='w-5/6 pb-4 border-b-2 flex items-center justify-center'>
          <p className='text-3xl text-white'>PictureSquare</p>
        </div>

        {/* <Link to="../dashboard/artists" className={Linkness("artists")}>
          <UserIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Artists</p>
        </Link> */}

        <Link to="../dashboard/arts" className={Linkness("arts")}>
          <PhotoIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Artworks</p>
        </Link>

        <Link to="../dashboard/create" className={Linkness("create")}>
          <PlusIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>Create Art</p>
        </Link>

        <Link to="../dashboard/myart" className={Linkness("myart")}>
          <ArchiveBoxArrowDownIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>My Artworks</p>
        </Link>

        <Link to="../dashboard/mycollection" className={Linkness("mycollection")}>
          <HeartIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>My collection</p>
        </Link>

        {/* <Link to="../user/purchasehistory" className={Linkness("purchasehistory")}>
          <CreditCardIcon className='ml-2 text-white h-6 w-auto' />
          <p className='ml-3 text-white text-sm lg:text-lg'>My Purchases</p>
        </Link> */}

      </div>
      
      <div className='w-5/6 flex flex-col items-center justify-center gap-5'>

        {/* <div className='w-full flex items-center justify-center'>
          <button id="btn-message" className="button-message">
            <div class="content-avatar">
              <div class="status-user"></div>
              <div class="avatar">
                <svg class="user-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"></path></svg>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center pl-2 text-left text-white">
              <div className="font-semibold flex items-center opacity-100 scale-y-100 transition-all duration-200 ease-out">Jessica Sanders</div>
            </div>
          </button>
        </div> */}

        <button onClick={handleLogout} className='w-full h-10 rounded-lg flex items-center justify-center bg-[#f5c754]'>
          <ArrowLeftEndOnRectangleIcon className=' text-black h-6 w-auto' />
          <p className='ml-3 text-black text-sm lg:text-lg font-semibold'>Logout</p>
        </button>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default Sidebar;