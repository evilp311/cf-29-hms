import { Check } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
export default function TodoCard(props) {
  const { todo, hadelCompleteTodo, handelDeleteTodo, todoIndex } = props;
  const [isDeleting, setIsDeleting] = useState(false);
const[isComplete,setISCopmlete]=useState(false);
 // const handleDelete = () => {
 //  
 //   setIsDeleting(true);
 //   
 //   setTimeout(() => {
 //     handelDeleteTodo(todoIndex);
 //   }, 500); 
 // };
  //const handelComplete=()=>{
  //  setISCopmlete(true)
//
  //  setTimeout(()=>{
  //      hadelCompleteTodo(todoIndex);
  //  },400);
  //}

  return (
    <div 
      className={`flex items-center justify-between gap-2 w-[87%] mt-4 bg-[#e0e8f5] rounded-[3px] border-l-4 transform-3d
        ${ todo.compleate ? 'border-l-green-500' : 'border-l-red-500'}
      ${isComplete? `opacity-0 translate-z-full rotate-x-90 rotate-z-10`:`opacity-100 translate-y-0`}
      transition-all duration-300 ease-in-out
       ${ isDeleting ? `opacity-0 translate-z-full rotate-x-90 rotate-z-10`:`opacity-100 translate-y-0` }`}
    >
      <div className='flex gap-3.5 w-full'>
        <button
          disabled={todo.compleate}
          onClick={()=>{
            hadelCompleteTodo(todoIndex)
          }}
          className={`text-green-500 cursor-pointer w-[30px] h-[40px] flex items-center justify-center transition-all duration-300
            ${isDeleting ? 'opacity-0 scale-50' : 'opacity-100 scale-100 hover:scale-110'}
            ${
            todo.compleate ? 'bg-green-100' : 'bg-white'
          } rounded-[2px] transition-colors duration-300`}
        >
          <Check size={18} />
        </button>
        
        <p className={`p-2 flex-grow ${
          todo.compleate ? 'line-through text-gray-500' : 'text-gray-800'
        }`}>
          {todo.input}
        </p>
        
        <button
          onClick={()=>{
            handelDeleteTodo(todoIndex)
          }}
          disabled={isDeleting}
          className={`bg-[#f56468] h-[40px] w-[35px] flex items-center justify-center rounded-[3px] text-white cursor-pointer transition-all duration-300 ${
            isDeleting ? 'opacity-0 scale-50' : 'opacity-100 scale-100 hover:scale-110'
          }`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}