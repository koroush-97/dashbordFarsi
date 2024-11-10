import React from 'react'
import './Header.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
  return (
    <div className='Header' >
        <div className='admin-profile'>
            <img src="/img/koroush.png" alt="admin profile" className='admin-img' />
            <div className='admin-profile-info'>
                <h1>کوروش باقری</h1>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

        <div className='header-left-section'>
            <div className='search-box'>
                <input type="text" placeholder=' دنبال چی میگردی ؟ ' />
                <button><SearchOutlinedIcon/></button>
            </div>

            <button className='header-left-icon'>
                <NotificationsNoneOutlinedIcon/>
            </button>
            <button className='header-left-icon'>
                <LightModeOutlinedIcon />
            </button>
        </div>


    </div>
  )
}
