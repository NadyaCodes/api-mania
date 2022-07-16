import axios from 'axios'
import {useEffect, useState} from 'react'
import AnimalsItem from './AnimalsItem'

export default function Animals() {
  const [animals, setAnimals] = useState({})

  useEffect(() => {
    const fetchAnimals = async () => {
      axios.get("/animals").then((data) => {
        console.log(data.data)
        setAnimals(data.data)
      })
    }

    fetchAnimals()
  }, [])

  // const displayAnimals = () => {
  //   for (let animal of animals) {
  //     console.log("animal", animal)
  //     return(
  //       <AnimalsItem 
  //         name={animal.name}
  //       />
  //     )
  //   }
  // }

  // const displayAnimals = animals.map((animal, index) => {
  //   return(
  //     <AnimalsItem
  //       key={index}
  //       name={animal.name}
  //     />
  //   )
  // })

  const displayAnimals = animals.map((animal, index) => {
    // const timeString = repo.created_at.toJSON();
    return (
      <AnimalsItem
        name={animal.name}
        latin={animal.latin_name}
        key={index}
        type={animal.animal_type}
        diet={animal.diet}
        range={animal.geo_range}
        habitat={animal.habitat}
        max_weight={animal.weight_max}
        min_weight={animal.weight_min}
        image={animal.image_link}
        // description={repo.description}
        // language={repo.language}
        // forksCount={repo.forks_count}
        // dateCreated={timeString}
        // state={state}
        // setState={setState}
        // key={index}
      />
    );
  });



  
  return(
    <article>
      {displayAnimals}
    </article>
  )
}