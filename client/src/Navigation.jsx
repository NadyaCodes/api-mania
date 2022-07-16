import React, { useState } from 'react'


export default function Navigation(props) {
  const {state, setState} = props

  const toggleElement = (element) => {
    state.xkcd ? setState((prev) => ({...prev, [element]: false})) : setState((prev) => ({...prev, [element]: true}))
  }

  return(
    <nav>
      <button>Animals</button>
      <button>Products</button>
      <button>Quotes</button>
      <button>Users</button>
      <button>Animals</button>
      <button>Satellite Pic</button>
      <button onClick={() => toggleElement("xkcd")}>XKCD</button>
      <button>Fox</button>
    </nav>
  )
}