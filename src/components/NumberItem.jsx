import React from 'react'

export default function NumberItem(props) {
  return (
    <div className='p-3'>
      <div className='text-center'>{props.index}</div>
      <div className={'border p-2 text-center number-item' + (!props.selected && !props.disabled ? ' hover' : '')} onClick={() => {
        if (props.selected || props.disabled) {
          return;
        }
        props.onClick();
      }}>
        {props.selected ? props.value : ''}
      </div>
    </div >
  )
}
