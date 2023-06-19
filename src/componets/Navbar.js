import { HStack, Image, } from '@chakra-ui/react'
import React from 'react'
import logo from '../asset/logo.png'
import ColorMode from './ColorMode'

function Navbar() {
  return (
    <div>
      <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
        {/* <Text>Gocart</Text> */}
        <ColorMode />
      </HStack>
    </div>
  )
}

export default Navbar
