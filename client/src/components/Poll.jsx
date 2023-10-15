import { useState } from "react"

/* eslint-disable react/prop-types */
const Poll = ({ pollObj }) => {

    const [poll ,setPoll] = useState(pollObj)
    
    const onClickHandler = async (title)=>{
    
        setPoll( {...pollObj,
            options:pollObj.options.map( option => {
                if (option.title===title) {
                    return {...option , votes:option.votes+1}
                }
                return option
            } ),
            total:pollObj.total+1
        })
         
        
        console.log(poll)
    }

    return (
        <div className="border-2  rounded-xl p-3 flex flex-col gap-1">
            <h2 className="font-semibold" >{poll.title}</h2>
            {poll.options.map(option => {
                const w = (option.votes/poll.total)*100
                return (
                    <div onClick={()=>{onClickHandler(option.title)}} key={option.title} className="flex gap-2 rounded-md  bg-slate-200">
                        <div style={{ width: `${w}%` }} className={`flex justify-between rounded-xl bg-green-400 px-2`} >
                            <h3>{option.title}</h3>
                            <span>{w.toFixed()}</span>
                        </div>
                    </div>)
            })}

        </div>
    )
}

export default Poll
