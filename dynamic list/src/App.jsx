import { useState } from 'react'
import {people} from './data.jsx'

function InputTag({text, setText}){

  const handleChange = (event) => {
    setText(event.target.value)
    // people.filter
  }

  return <input type="text" value={text} onChange={e => handleChange(e)} />
}

function App() {

  let [text, setText] = useState("")

  console.log(people)
  let data = people

  if(text){
    data = people.filter(ele => ele.name === text)
  }

  return (
    <>

      <InputTag text={text} setText={setText} />
      {data.map((ele, i) => {

        return <div key={ele.id}>

          <img src={ele.imageId}/>
          <span><b>{ele.name}</b></span>
          <span>{ele.profession}</span>
          <span>known for {ele.accomplishment}</span>

        </div>

      } )}

    </>
  )
}

export default App
