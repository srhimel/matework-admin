import {
  Box,
  Button,
  CloseButton,
  Flex,
  FocusLock,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
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
      setTimeout(() => close(), 500)
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

export const DateRangeDrop = () => {
  const { startDate, endDate, type } = useSelector((state) => state.dateRange)
  const dispatch = useDispatch()
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handleChange = (start, end, type) => {
    dispatch(
      changeDate({
        type: type,
        startDate: start,
        endDate: end
      })
    )
    setTimeout(() => onClose(), 500)
  }

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement='bottom'>
        <PopoverTrigger>
          <Button
            fontWeight={400}
            border={'1px solid #e0e0e0'}
            leftIcon={<Calender />}
            color={'#AAA8AC'}
            bg={'white'}>
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
            <Grid
              gap={4}
              templateColumns={{
                base: '1fr',
                lg: '1fr 1fr'
              }}>
              <GridItem>
                <VStack
                  w='full'
                  h='full'
                  justify={'space-between'}
                  align={'flex-start'}>
                  <VStack align={'flex-start'} gap={1} w='full'>
                    <Box
                      cursor='pointer'
                      onClick={() =>
                        handleChange(
                          new Date(
                            new Date().setDate(new Date().getDate() - 1)
                          ),
                          new Date(),
                          'day'
                        )
                      }
                      bg={type === 'day' ? 'pBlack' : '#f0f0f0'}
                      w={'full'}
                      p={2}
                      rounded={'md'}
                      color={type === 'day' ? 'white' : 'black'}>
                      <Text fontSize={'sm'} fontWeight={'light'}>
                        Today
                      </Text>
                    </Box>
                    <Box
                      cursor='pointer'
                      onClick={() => {
                        dispatch(resetDate())
                        setTimeout(() => onClose(), 500)
                      }}
                      bg={type === 'week' ? 'pBlack' : '#f0f0f0'}
                      w={'full'}
                      p={2}
                      rounded={'md'}
                      color={type === 'week' ? 'white' : 'black'}>
                      {' '}
                      <Text fontSize={'sm'} fontWeight={'light'}>
                        This Week
                      </Text>
                    </Box>
                    <Box
                      cursor='pointer'
                      onClick={() =>
                        handleChange(
                          new Date(
                            new Date().setDate(new Date().getDate() - 30)
                          ),
                          new Date(),
                          'month'
                        )
                      }
                      bg={type === 'month' ? 'pBlack' : '#f0f0f0'}
                      w={'full'}
                      p={2}
                      rounded={'md'}
                      color={type === 'month' ? 'white' : 'black'}>
                      <Text fontSize={'sm'} fontWeight={'light'}>
                        This Month
                      </Text>
                    </Box>
                    <Box
                      cursor='pointer'
                      onClick={() =>
                        handleChange(
                          new Date(
                            new Date().setDate(new Date().getDate() - 61)
                          ),
                          new Date(
                            new Date().setDate(new Date().getDate() - 31)
                          ),
                          'lmonth'
                        )
                      }
                      bg={type === 'lmonth' ? 'pBlack' : '#f0f0f0'}
                      w={'full'}
                      p={2}
                      rounded={'md'}
                      color={type === 'lmonth' ? 'white' : 'black'}>
                      <Text fontSize={'sm'} fontWeight={'light'}>
                        Last Month
                      </Text>
                    </Box>
                  </VStack>
                  {type === 'custom' ? (
                    <Box
                      bg={'pBlack'}
                      w={'full'}
                      p={2}
                      color={'white'}
                      rounded={'md'}>
                      <Text fontWeight={'medium'} fontSize={'sm'}>
                        {new Date(startDate).toDateString()} -{' '}
                        {new Date(endDate).toDateString()}{' '}
                      </Text>
                    </Box>
                  ) : (
                    <></>
                  )}
                </VStack>
              </GridItem>
              <GridItem>
                <DateRange close={onClose} />
              </GridItem>
            </Grid>
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}
