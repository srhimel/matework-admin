import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { HComponent } from '../../components'

const Homepage = () => {
  return (
    <Box>
      <Grid templateColumns={{ base: 'repeat(12, 1fr)' }} gap={6}>
        <GridItem
          rounded={'md'}
          pr={{ base: 0, xl: 10 }}
          colSpan={{ base: 12, md: 12, xl: 6 }}>
          <HComponent.widget1 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 12, xl: 6 }}
          bg='white'>
          <HComponent.widget2 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, xl: 4 }}
          bg='pGreen'
          color={'white'}>
          <HComponent.widget3 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, xl: 4 }}
          bg='white'>
          <HComponent.widget4 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, xl: 4 }}
          bg='white'>
          <HComponent.widget4 isRed={true} />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 0, md: 6, xl: 0 }}
          display={{ base: 'none', md: 'block', xl: 'none' }}></GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, xl: 7 }}
          bg='white'>
          <HComponent.widget4 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, xl: 5 }}
          bg='white'>
          <HComponent.widget4 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, lg: 6, xl: 5 }}
          bg='white'>
          <HComponent.widget5 />
        </GridItem>
        <GridItem
          rounded={'md'}
          p={6}
          colSpan={{ base: 12, md: 6, lg: 6, xl: 7 }}
          bg='white'>
          <HComponent.widget6 />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Homepage
