import { useState } from "react"
import TodoCard from "./TodoCard";
export default function TodoInput(props){
    const{handelAddTod}=props
    const[inputValue,setINputValue]=useState('');
    return(
        <div className="flex items-center gap-4 mt-2 ">
            <input className="w-[100%] flex-1 border text-lg mt-[15px] mb-[15px]  pt-1 pb-1 pr-4 pl-4 rounded-[3px] " 
            placeholder="................" type="text" value={inputValue} onChange={(e)=>{
                setINputValue(e.target.value)
            }} />
            <button className="tab-button hover:translate-0.5 cursor-pointer p-1.5 text-white  bg-[linear-gradient(#fc6c48_0%,#ef5081_100%)] mt-[15px] mb-[15px] rounded-[3px]" onClick={()=>{
                if(!inputValue){return}
                handelAddTod(inputValue)
                setINputValue('')
                
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}