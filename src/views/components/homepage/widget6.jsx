import {
  Box,
  Flex,
  Grid,
  HStack,
  Tag,
  TagLeftIcon,
  Text
} from '@chakra-ui/react'
import React from 'react'
import { Increase, IncreaseGreen, IncreaseRed } from '../icons/customIcon'
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'

export const widget6 = ({ props, isRed }) => {
  const min = 1000
  const max = 9999

  const data = [
    {
      name: 'Page K',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page L',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 1398,
      amt: 2010
    },
    {
      name: 'Page C',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 4800,
      amt: 2181
    },

    {
      name: 'Page C',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page E',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 4800,
      amt: 2181
    }
  ]
  return (
    <Flex
      {...props}
      direction={'column'}
      justifyContent={'space-between'}
      gap={6}
      h='full'>
      <Text fontSize={'xl'}>Widget Revenue</Text>

      <Grid templateColumns={'repeat(1, 1fr)'} gap={5} mt={'auto'}>
        <Box>
          <Text fontSize={'3xl'} fontWeight={'bold'} color={'#151515'}>
            $76,231
          </Text>
          <HStack mt={2} w='full' justify={'space-between'}>
            <Text>12% ROI</Text>
            <Tag
              color={isRed ? '#FD1709' : '#3FBA73'}
              bg={isRed ? 'rgba(253, 23, 9, 0.1)' : 'rgba(74, 157, 120, 0.15)'}
              rounded={'full'}>
              <TagLeftIcon
                boxSize='12px'
                as={isRed ? IncreaseRed : IncreaseGreen}
              />
              +12.5%
            </Tag>
          </HStack>
        </Box>
        <Box h='150px' w={'full'}>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart width={'100%'} height={130} data={data}>
              <Bar dataKey='uv' fill='#000' radius={5}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.uv >= 2000 ? '#3FBA73 ' : '#000'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    </Flex>
  )
}
