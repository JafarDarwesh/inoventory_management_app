import React from 'react'

export function Qs({k}) {
  const qu=['HTML & CSS is for','React is framework for','In React we use *render* in','In React we use *Hooks* in',"FINISH"]
  if (k<5) {
    return <p>{qu[k]}</p>
  }
}
