import React, { useState } from 'react'

export default function B1() {
    const [name,setName]=useState<string>("Lê Diên Tiến")
  return (
    <div>B1
        <p>Họ và tên : {name}</p>
    </div>
  )
}
