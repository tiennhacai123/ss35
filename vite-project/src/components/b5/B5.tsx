import React, { useState } from 'react'

export default function B5() {
  const [value,setValue] = useState<string>("")

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  return (
    <div>B5:
        <input onChange={handleChange} type="text" />
        <p>Nội dung trong ô input: {value}</p>
    </div>
  )
}
