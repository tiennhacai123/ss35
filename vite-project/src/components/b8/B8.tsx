import React, { useState } from 'react'

export default function B8() {
    const [value,setValue] = useState<string>("")

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setValue(e.target.value)
    }
  return (
    <div>B8:
        <p>Thành Phố: {value}</p>
        <select onChange={handleChange} name="" id="">
            <option value="" disabled>---Vui lòng chọn---</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Vĩnh Phúc">Vĩnh Phúc</option>
        </select>
    </div>
  )
}
