import React from 'react'
import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PropaneTankOutlinedIcon from '@mui/icons-material/PropaneTankOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import {  NavLink } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar' >
      <h1 className='sidebar-title'> به داشبورد خود خوش آمدید </h1>

      <ul className='sidebar-links'>
        
        <NavLink  to="/" style={{ textDecoration: "none" }} >
            <HomeOutlinedIcon className='icones-dashbord'  /> صفحه ی اصلی  
        </NavLink>
        
        
        
        <NavLink to="/productes"  style={{ textDecoration: "none" }} >
           <PropaneTankOutlinedIcon  className='icones-dashbord' />  محصولات  
        </NavLink>
       
      
      
      <NavLink  to="/users"  style={{ textDecoration: "none" }}>
           <PeopleAltOutlinedIcon  className='icones-dashbord' /> کاربران
        </NavLink>
     
     
     
     <NavLink  to="/comments"  style={{ textDecoration: "none" }}>
           <InsertCommentOutlinedIcon className='icones-dashbord'  /> کامنت ها 
        </NavLink>
    
    

    
    <NavLink to="/orders"  style={{ textDecoration: "none" }}>
           <WorkOutlineOutlinedIcon className='icones-dashbord'  /> سفارشات
        </NavLink>
    
   
     
        <NavLink  to="/offs"  style={{ textDecoration: "none" }}>
           <AttachMoneyOutlinedIcon  className='icones-dashbord' /> تخفیفات
        </NavLink>
      
      </ul>

    </div>
  )
}
