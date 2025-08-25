export default function Header(props){
    const{todos}=props;
    const todosLength=todos.length;
    const newDay= new Date();
    const day=newDay.getDay()
    const convertDay=day==1?"دوشنبه":
    day==2?'سه شنبه':
    day==3?'چهارشنبه':
    day==4?'پنجشنبه':
    day==5?'جمعه':
    day==6?'شنبه':
    'یکشنبه'
    const nowDay= String( newDay.getDate()<10?`0${newDay.getDate()}`:newDay.getDate())
    const nowMonth=String (newDay.getMonth() <10 ?`0${newDay.getMonth()+1}`:newDay.getMonth()+1)
    const nowYear= String(newDay.getFullYear())
    const date= nowMonth +"-"+ nowDay +"-"+ nowYear
   
    return(
       <header>
            <div className="text-xl text-[#f65c65] font-normal">
                <h1>{convertDay}</h1>
                <h2>{date}</h2>    
            </div>  
            <h1 className=" text-2xl text-center mt-2 mb-2 font-bold text-[#f65c65]">شما {todosLength} تا کار انجام نشده دارید</h1>
       </header>
    )
}