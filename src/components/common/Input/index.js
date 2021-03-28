import React, {useState} from "react";

const Input = () => {
    const [fieldVal, setFieldVal] = useState('')
    const handleApply = () => {
        console.log('onclick');
        console.log(fieldVal);
        return <span>{fieldVal}</span>

    }
    return (
        <div>
            <input onChange={(e) => setFieldVal(e.target.value)}/>
            <button onClick={handleApply}>Apply</button>
        </div>

    )
}
export default Input