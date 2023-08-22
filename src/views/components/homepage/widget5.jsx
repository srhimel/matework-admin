import { Box, Flex, Grid, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { PieChart, Pie, Sector, Cell } from 'recharts'
export const widget5 = ({ props, isRed }) => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 }
  ]
  const COLORS = ['#3FBA73 ', '#151515']
  return (
    <Flex
      {...props}
      direction={'column'}
      justifyContent={'space-between'}
      gap={10}
      h='full'>
      <Text fontSize={'xl'}>Widget Revenue</Text>

      <Grid templateColumns={'2fr 1fr'} justifyContent={'space-between'}>
        <Box>
          <PieChart width={250} height={240}>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={120}
              fill='#8884d8'
              dataKey='value'>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
        <Flex direction={'column'} gap={4} w={'full'}>
          <HStack gap={3}>
            <Box h={4} w={4} rounded={'full'} bg={'pGreen'}></Box>
            <Text>Dynamatic</Text>
          </HStack>
          <HStack gap={3}>
            <Box h={4} w={4} rounded={'full'} bg={'pBlack'}></Box>
            <Text>Others</Text>
          </HStack>
        </Flex>
      </Grid>
    </Flex>
  )
}
