import QuoteItem from "./QuoteItem";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Quote() {
  const [ quotes, setQuotes ] = useState([])

  useEffect(() => {
    const fetchQuotes = async () => {
      axios.get('/quotes').then((data) => {
        setQuotes(data.data)
      })
    }
    fetchQuotes()
  }, [])

  const displayQuotes = quotes.map((quote, index) => {
    return(
      <QuoteItem />
    )
  })
  
  
  return(
    <article>
      {displayQuotes}
    </article>
  )
}