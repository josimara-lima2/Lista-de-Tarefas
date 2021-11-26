import * as C from './style'
import {useState,KeyboardEvent} from 'react'

type Props={
    onEnter: (taskName:string) => void
}



export const AddArea = ({onEnter}:Props) => {

    const [inputText,setInputText] = useState('')
    const [doneInput,setDone] = useState(false)

    const handleKeyUp = (e:KeyboardEvent) => {
            if(e.code === 'Enter' && inputText !== ''){
                    onEnter(inputText)
                    setInputText('')
            }
    }
    
    function done() {
        
    }

    return(
        <C.Container>
            <div className="image">➕ </div>
            <input 
            type="text" 
            placeholder="Adicione uma tarefa" 
            value={inputText}
            onChange={(e)=>{
                setInputText(e.target.value)
                setDone(e.target.checked)
            }}
            onKeyUp={handleKeyUp}
            >

            </input>
        </C.Container>
    )
}