export default function Container({children}){
    return(
     <div  className=" w-[35%] h-[750px] mt-25  bg-[#f4f7fc] border-[#eee] [box-shadow:0_0_15px_0_rgba(0,0,0,0.05)] rounded-[4px] pt-10 pb-10 pr-5 pl-5 ">
        {children}
     </div>
    )
}