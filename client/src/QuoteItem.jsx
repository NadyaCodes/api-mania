export default function QuoteItem(props) {
  
  return(
      <li>
        {props.quote}
        <em>{props.author}</em>
      </li>
  )
}