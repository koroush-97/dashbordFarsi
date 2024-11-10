import React from 'react'
import './deleteModal.css'
import ReactDom from 'react-dom'



export default function DeleteModal( { submit , cancle , title } ) {
  return ReactDom.createPortal (
        <div className='modal-parent active'>

        <div className='delete-modal'>
            <h1> {title} </h1>
            <div className='delete-modal-btns' >
                <button className='delete-btn delete-modal-accept-btn' onClick={submit}  >بله</button>
                <button className='delete-btn delete-modal-reject-btn' onClick={cancle} >خیر</button>
            </div>
        </div>
        </div> , document.getElementById("modals-parent")
  )
}

