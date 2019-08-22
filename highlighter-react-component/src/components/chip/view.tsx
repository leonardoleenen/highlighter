import React from 'react'

export const view = (id:string, backgroundClass: string, text: string, remove:any ) => {
  
  return (
    <div className={`w-auto  inline-block ${backgroundClass} p-2 m-2 rounded-full`} onClick={() => remove(id)}>
      <label className="m-4">{text.length > 30 ? text.substr(0,30) + '...' : text}</label>
    </div>)
} 