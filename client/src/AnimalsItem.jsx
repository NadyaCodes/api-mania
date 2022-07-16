export default function AnimalsItem(props) {
  const { name, type, diet, latin, range, habitat, min_weight, max_weight, image } = props
  return(
    <section>
      <h2>{name}</h2>
      <p>{latin}</p>
      <p>Type: {type}</p>
      <p>Diet: {diet}</p>
      <p>Range: {range}</p>
      <p>Habitat: {habitat}</p>
      <p>Weight: {min_weight}lbs - {max_weight}lbs</p>
      <img src={image} className="animalPic"/>
    </section>
  )
}