import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './componets/Navbar'

function App() {
  return (
	<div>
	  <Grid templateAreas={{
		base:` "nav" "main"`,
		lg: `"nav nav" "aside main" `
		
	  }}>
		<GridItem area='nav'><Navbar /></GridItem>
		<Show above='lg'>  
		<GridItem area='aside'>aside</GridItem>
		</Show>
		<GridItem  area='main'>main</GridItem>
	  </Grid>
	</div>
  )
}

export default App

