import {
  Box,
  Button,
  CloseButton,
  Flex,
  FocusLock,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeDate,
  resetDate
} from '../../../app/features/dateRange/dateRangeSlice'
import { Calender } from '../icons/customIcon'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export const CustomButton = ({ value, children, onClick }) => {
  const dateRange = useSelector((state) => state.dateRange)
  return (
    <Button
      onClick={onClick}
      bg={dateRange.type === value ? 'pBlack' : 'white'}
      color={dateRange.type === value ? 'white' : 'black'}
      _hover={{ bg: 'gray.800', color: 'white' }}
      px={6}>
      {children}
    </Button>
  )
}

export const DateRange = ({ close }) => {
  const dispatch = useDispatch()
  const { startDate, endDate } = useSelector((state) => state.dateRange)
  const onChange = (dates) => {
    const [start, end] = dates
    dispatch(
      changeDate({
        startDate: start
      })
    )
    if (new Date(end).getFullYear() > 2010) {
      dispatch(
        changeDate({
          type: 'custom',
          startDate: start,
          endDate: end
        })
      )
      close()
    }
  }

  return (
    <ReactDatePicker
      maxDate={new Date()}
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  )
}

export const DateRangePicker = () => {
  const dateRange = useSelector((state) => state.dateRange)
  const dispatch = useDispatch()
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <HStack justifyContent={'space-between'} gap={2} wrap={'wrap'}>
      <Flex
        wrap={'wrap'}
        bg={'white'}
        rounded={'md'}
        // justifyContent={'space-between'}
      >
        {dateRange.type === 'custom' ? (
          <Flex alignItems={'center'} p={1} px={4} gap={4} w={'full'}>
            <Text fontWeight={'medium'}>
              {new Date(dateRange.startDate).toDateString()} -{' '}
              {new Date(dateRange.endDate).toDateString()}{' '}
            </Text>
            <CloseButton
              ml='auto'
              onClick={() => dispatch(resetDate())}></CloseButton>
          </Flex>
        ) : (
          <>
            <CustomButton
              value={'day'}
              onClick={() =>
                dispatch(
                  changeDate({
                    type: 'day',
                    startDate: new Date(
                      new Date().setDate(new Date().getDate() - 1)
                    ),
                    endDate: new Date()
                  })
                )
              }>
              24h
            </CustomButton>
            <CustomButton value={'week'} onClick={() => dispatch(resetDate())}>
              7d
            </CustomButton>
            <CustomButton
              value={'month'}
              onClick={() =>
                dispatch(
                  changeDate({
                    type: 'month',
                    startDate: new Date(
                      new Date().setDate(new Date().getDate() - 30)
                    ),
                    endDate: new Date()
                  })
                )
              }>
              30d
            </CustomButton>
            <CustomButton
              value={'lmonth'}
              onClick={() =>
                dispatch(
                  changeDate({
                    type: 'lmonth',
                    startDate: new Date(
                      new Date().setDate(new Date().getDate() - 61)
                    ),
                    endDate: new Date(
                      new Date().setDate(new Date().getDate() - 31)
                    )
                  })
                )
              }>
              Last 30d
            </CustomButton>
          </>
        )}
      </Flex>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement='bottom'>
        <PopoverTrigger>
          <Button leftIcon={<Calender />} bg={'white'}>
            Select dates
          </Button>
        </PopoverTrigger>
        <PopoverContent w={'auto'} p={4}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton
              position={'absolute'}
              top={-3}
              right={-3}
              bg={'pBlack'}
              color={'white'}
              rounded={'full'}
            />
            <DateRange close={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </HStack>
  )
}
