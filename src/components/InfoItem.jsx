import React from 'react'

export default function InfoItem(props) {
  return (
    <div className='pt-2 pb-2'>
      <h3>
        {props.title}
      </h3>
      <p>
        {props.children}
      </p>
    </div>
  )
}
