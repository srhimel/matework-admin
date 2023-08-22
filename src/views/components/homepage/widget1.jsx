import {
  Box,
  Button,
  CloseButton,
  Flex,
  FocusLock,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Tag,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react'
import dyIcon from '../../../assets/icon.svg'
import { Calender } from '../icons/customIcon'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeDate,
  resetDate
} from '../../../app/features/dateRange/dateRangeSlice'
import { DateRangePicker } from '../shared/dateRangePicker'
export const widget1 = ({ props }) => {
  return (
    <Flex
      {...props}
      direction={'column'}
      justifyContent={'space-between'}
      gap={6}
      h='full'>
      <Grid
        templateColumns={'repeat(2, auto)'}
        gap={8}
        justifyContent={'start'}
        alignItems={'center'}>
        <Box>
          <img src={dyIcon} alt='' />
        </Box>
        <Box>
          <Heading size={'lg'}>dynamatic</Heading>
          <Text>Advance Cart | 65,123 Installs</Text>
        </Box>
      </Grid>

      <Text fontSize={'lg'}>
        One to one marketing has been a sought after dream for small and medium
        brands for the longest time. With Dynamatic's dynamic engine this is now
        a reality. Power your entire cart with end to end data driven
        personalization.
      </Text>
      <DateRangePicker />
    </Flex>
  )
}
