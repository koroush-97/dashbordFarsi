import React from 'react'
import './errorbox.css'

export default function Errorbox({ msg }) {
  return (
    <div className='cms-empty-err' >
        <h1> { msg } </h1>
    </div>
  )
}
