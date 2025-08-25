import TodoCard from "./TodoCard"
export default function TodoList(props){
    const{todos,selectedTab}=props

    const filterTodsList=selectedTab==='همه'?
    todos:
        selectedTab==='انجام نشده'?
            todos.filter(val=>!val.compleate):
            todos.filter(val=>val.compleate)

    return(
        <>
            {filterTodsList.map((todo,todoIndex)=>{
                return(
                <TodoCard 
                key={todoIndex}
                todoIndex={todos.findIndex(val=>val.input==todo.input)} 
                todo={todo}
                 {...props}/>

                )
          
            })}
        </>
    )
}