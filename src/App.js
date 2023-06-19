import React from 'react'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
	<div>
	  <Grid templateAreas={{
		base:` "nav" "main"`,
		lg: `"nav nav" "aside main" `
		
	  }}>
		<GridItem bg='red' area='nav'>Nav</GridItem>
		<Show above='lg'>  
		<GridItem bg='blue' area='aside'>aside</GridItem>
		</Show>
		<GridItem bg='purple' area='main'>main</GridItem>
	  </Grid>
	</div>
  )
}

export default App

