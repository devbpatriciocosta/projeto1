import { useState } from 'react'

import Title from '../src/components/title/Title'
import Subtitle from '../src/components/subtitle/Subtitle'
import Button from '../src/components/button/Button'


function HomePage () {
  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log("Handle Click")
    setClick(click + 1)
  }


  return (

    <div>
      <Title title="BernaFlix" />
      <Subtitle subtitle="Meus filmes estão aqui!"/>
      <Button onClick={handleClick} button="Like"/>
      <p> {click} </p>
    </div>
    
  )
}

export default HomePage