import React, { useEffect } from 'react'
import './Deteailsmodal.css'
import '../cms.css'

export default function Deteailsmodal({ onHide , children }) {

useEffect( () => {
  const checkkey= (Event) => {
    console.log(Event);
    if(Event.keyCode === 27){
      onHide()
    }
  }

  window.addEventListener('keydown' , checkkey)
 
 return () => window.removeEventListener('keydown' , checkkey)

} )


  return (
        <div className='modal-parent active'>
      <div className='deteails-modal'>
        
      {children}

    </div>
        </div>
  )
}
