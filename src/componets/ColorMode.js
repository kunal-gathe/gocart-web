import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'

function ColorMode() {
    const {toggleColorMode , ColorMode} = useColorMode();
  return (
    <HStack >
        <Switch  isChecked = {ColorMode === 'dark'} onChange={toggleColorMode} />
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorMode
