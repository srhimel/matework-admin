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
import { Area, AreaChart, ResponsiveContainer } from 'recharts'
import { Increase, IncreaseGreen, IncreaseRed } from '../icons/customIcon'

export const widget4 = ({ props, isRed }) => {
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
          <Text fontSize={'3xl'} fontWeight={'bold'} color={'#151515'}>
            $76,231
          </Text>
          <HStack mt={2}>
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
        <Box>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart width={150} height={130} data={data}>
              <Area
                dataKey='uv'
                strokeWidth={2}
                fillOpacity={'.7'}
                stroke={isRed ? '#FD1709' : '#3FBA73'}
                fill={isRed ? '#FD170959' : '#3FBA7359'}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Grid>
    </Flex>
  )
}
