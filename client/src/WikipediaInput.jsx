import { useState } from 'react'
import WikipediaDisplay from './WikipediaDisplay'

export default function WikipediaInput() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [page, setPage] = useState(false)


  const handleDate = (event) => {
    setDay(event.target.value)
  }

  const handleMonth = (event) => {
    setMonth(event.target.value)
  }

  const showData = () => {
    page ? setPage(false) : setPage(true)
  }


  return(
    <section>
      {page ? 
        <WikipediaDisplay day={day} month={month}/> 
        : <div>
            Day: <input type='text' id='day' name='day' onChange={handleDate} value={day}></input>
            Month(numeric): <input type='text' id='month' name='month' onChange={handleMonth} value={month}></input>
            <button type='submit' onClick={() => showData()}>Search</button>
          </div>}
    </section>
  )
}