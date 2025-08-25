import Container from "./components/Container"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from "react"


function App() {

const [todos,setTodos]=useState([
  {input:"برو به سوپر مارکت",compleate:false},
])
const [selectedTab,setSelectedTab]=useState('انجام نشده');

function handelAddTod(newTodo){
  const newTodoList=[...todos,{input:newTodo,compleate:false}]
  setTodos(newTodoList)
}
function hadelCompleteTodo(todoIndex){
  let newTodoList=[...todos]
  let completeTodo=todos[todoIndex]
  completeTodo['compleate']=true
  newTodoList[todoIndex]=completeTodo
  setTodos(newTodoList);

}
function handelDeleteTodo(todoIndex){
  let newTodoList=todos.filter((val,valIndex)=>{
    return valIndex!==todoIndex
    
  })
  setTodos(newTodoList)
}

  return (
    <>
    <Container  >
        <Header todos={todos}/>
        <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <TodoInput handelAddTod={handelAddTod}/>
        <TodoList todos={todos} selectedTab={selectedTab} handelDeleteTodo={handelDeleteTodo} hadelCompleteTodo={hadelCompleteTodo} />
    </Container>
   
    </>
  )
}

export default App
