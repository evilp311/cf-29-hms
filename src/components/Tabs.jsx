export default function Tabs(props){
     const{todos,selectedTab,setSelectedTab}=props;
     const tabs=['همه','انجام نشده','انجام شده']
    return(
        <nav >
            {tabs.map((tab,tabIndex)=>{
                const numOfTasks = tab==='همه'?
                    todos.length:
                    tab==='انجام نشده'?
                        todos.filter(val=> !val.compleate).length:
                        todos.filter(val=> val.compleate).length

                return(
                    <button className={"tab-button cursor-pointer p-1.5  text-white bg-[linear-gradient(#fc6c48_0%,#ef5081_100%)] m-1.5 rounded-[8px] hover:translate-0.5 "  +
                        (tab===selectedTab ? 'tab-selected':'')
                    }
                      onClick={()=>{
                        setSelectedTab(tab);
                    }}
                    key={tabIndex} >
                        <h4>{tab} <span className="opacity-[0.4] font-normal">{numOfTasks}</span></h4>
                    </button>
                )
            })}
               <hr className="opacity-[0.4]" />
        </nav>
    )
}