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
import { Increase } from '../icons/customIcon'
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts'

export const widget3 = ({ props }) => {
  const min = 1000
  const max = 9999

  const data = [
    {
      name: 'Page A',
      uv: Math.floor(Math.random() * (max - min + 1)) + min,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
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

      <Grid templateColumns={'repeat(2, 1fr)'}>
        <Box>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            $76,231
          </Text>
          <HStack mt={2}>
            <Text>12% ROI</Text>
            <Tag variant={'white'} bg={'rgb(255,255,255,.2)'} rounded={'full'}>
              <TagLeftIcon boxSize='12px' as={Increase} />
              +12.5%
            </Tag>
          </HStack>
        </Box>
        <Box>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              width={150}
              height={130}
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5
              }}>
              <Bar dataKey='uv' fill='#000' radius={5}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.uv >= 2000 ? '#fff' : '#000'}
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
