// import React, { useState } from 'react'


export default function Navigation(props) {
  const {state, setState} = props

  const toggleElement = (element) => {
    state[element] ? setState((prev) => ({...prev, [element]: false})) : setState((prev) => ({...prev, [element]: true}))
  }

  return(
    <nav>
      <button>Products</button>
      <button>Quotes</button>
      <button>Users</button>
      <button onClick={() => toggleElement("xkcd")} className={state.xkcd ? 'selected' : null}>XKCD</button>
      <button onClick={() => toggleElement("fox")} className={state.fox ? 'selected' : null}>Fox</button>
      <button onClick={() => toggleElement("satellite")} className={state.satellite ? 'selected' : null}>Satellite Pic</button>
      <button onClick={() => toggleElement("animals")} className={state.animals ? 'selected' : null}>Animals</button>
    </nav>
  )
}