import React, { useState } from 'react'

export default function B4() {
    const [show,setShow] = useState<boolean>(false)

    const handleClick = ()=>{
        setShow(!show)
    }
  return (
    <div>B4:
        <button onClick={handleClick}>{show ? "Ẩn" : "Hiện"}</button>
        {show && (<p>Tiêu đề văn bản</p>)}
    </div>
  )
}
