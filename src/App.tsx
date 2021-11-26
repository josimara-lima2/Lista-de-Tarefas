import { useState } from 'react';
import * as C from './app.styles'
import {Item} from './types/item'
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () =>{
  const [list,setList] = useState<Item[]>([
    {id:1, name:'estudar mais',done:true},
    {id:2, name:'estudar react',done:false}
  ])

  const handleAddTask = (taskname:string) => {
      let newList = [...list]
      newList.push({
        id:list.length+1,
        name:taskname,
        done:false
      })
      setList(newList)
  }
  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>
        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item,index)=>(
          <ListItem key={index} item={item}/>
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App