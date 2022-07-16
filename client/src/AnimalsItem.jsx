export default function AnimalsItem(props) {
  const { name, type, diet, latin, range, habitat, min_weight, max_weight, image } = props
  return(
    <section>
      <div className="heading-container">
        <h2>{name} <em>({latin})</em></h2>
      </div>
      <div className="animal-details">
        <ul>
          <li>Type: {type}</li>
          <li>Diet: {diet}</li>
          <li>Range: {range}</li>
          <li>Habitat: {habitat}</li>
          <li>Weight: {min_weight}lbs - {max_weight}lbs</li>
        </ul>
        <img src={image} className="animalPic"/>
      </div>
    </section>
  )
}