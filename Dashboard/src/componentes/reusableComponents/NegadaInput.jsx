import { useEffect, useState } from "react"

const NegadaInput = ({ value, onChange, limit }) => {
    const [plusDisabled, setPlusDisabled] = useState(false)
    const [minusDisabled, setMinusDisabled] = useState(false)

    useEffect(() => {
        if (value == 0) {
            setMinusDisabled(true)
        } else if (value == limit) {
            setPlusDisabled(true)
        }
    }, [])

    const handlePlus = () => {
        if (value == 0) {
            setMinusDisabled(false)
        } else if (value + 1 === limit) {
            setPlusDisabled(true)
        }
        onChange(value + 1)
    }

    const handleMinus = () => {
        if (value - 1 == 0) {
            setMinusDisabled(true)
        } else if (value === limit) {
            setPlusDisabled(false)
        }
        onChange(value - 1)
    }

    return (
        <div className="flex items-center gap-x-1">
            {
                minusDisabled ?
                    <button className="w-6 h-6 flex items-center justify-center rounded-[4px] border border-[#B4C4C5]">
                        <svg width="60%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H19C19.414 11.25 19.75 11.586 19.75 12C19.75 12.414 19.414 12.75 19 12.75Z" fill="#B4C4C5" />
                        </svg>
                    </button>
                    :
                    <button onClick={handleMinus} className="w-6 h-6 flex items-center justify-center rounded-[3px] border border-[#EA011D]">
                        <svg width="60%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H19C19.414 11.25 19.75 11.586 19.75 12C19.75 12.414 19.414 12.75 19 12.75Z" fill="#EA011D" />
                        </svg>
                    </button>
            }
            <div className="flex items-center h-full w-6 justify-center">
                <p className="font-lato text-indigo-950 font-semibold">{value}</p>
            </div>
            {
                plusDisabled ?
                    <button className="w-6 h-6 flex items-center justify-center rounded-[3px] border border-[#B4C4C5] bg-[#B4C4C5]">
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 12C19.75 12.414 19.414 12.75 19 12.75H12.75V19C12.75 19.414 12.414 19.75 12 19.75C11.586 19.75 11.25 19.414 11.25 19V12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H11.25V5C11.25 4.586 11.586 4.25 12 4.25C12.414 4.25 12.75 4.586 12.75 5V11.25H19C19.414 11.25 19.75 11.586 19.75 12Z" fill="#fff" />
                        </svg>
                    </button>
                    :
                    <button onClick={handlePlus} className="w-6 h-6 flex items-center justify-center rounded-[3px] border border-[#23254C] bg-[#23254C]">
                        <svg width="70%" height="70%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 12C19.75 12.414 19.414 12.75 19 12.75H12.75V19C12.75 19.414 12.414 19.75 12 19.75C11.586 19.75 11.25 19.414 11.25 19V12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H11.25V5C11.25 4.586 11.586 4.25 12 4.25C12.414 4.25 12.75 4.586 12.75 5V11.25H19C19.414 11.25 19.75 11.586 19.75 12Z" fill="#fff" />
                        </svg>
                    </button>
            }
        </div>
    )
}
export default NegadaInput