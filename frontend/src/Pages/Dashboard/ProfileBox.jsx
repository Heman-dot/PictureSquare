import React from 'react'

const ProfileBox = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-center gap-4'>
        <img src="https://source.unsplash.com/random/100x100/?profile-pic" alt="profile_img" className='w-20 h-20 rounded-3xl shadow-custom shadow-md shadow-gray-700' />
        <p className='text-lg' >@username</p>
      </div>
    </div>
  )
}

export default ProfileBox
