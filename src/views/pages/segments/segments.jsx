import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  SearchIcon
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr
} from '@chakra-ui/react'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import TableSkeleton from '../../components/TableSkeleton/TableSkeleton'
import { Link, useNavigate } from 'react-router-dom'
import { CIcon, Shared } from '../../components'
import '../../components/shared/checkbox.css'
import { DateRange } from '../../components/shared/dateRangePicker'
import { useDispatch } from 'react-redux'
import { restoreCondition } from '../../../app/features/segmentRules/segmentsRulesSlice'
// import { useAppMutation, useAppQuery } from '../../../hooks'

const Segments = () => {
  const [checkedItems, setCheckedItems] = useState([false])
  const [selectedProductList, setSelectedProductList] = useState([])

  const allChecked = checkedItems.every(Boolean)

  const [search, setSearch] = useState('')

  const segments = [
    {},
    {
      id: 1,
      name: 'Segment-1',
      orders: 51,
      rules: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 2,
      name: 'Segment-1',
      orders: 51,
      rules: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 1,
      name: 'Segment-1',
      orders: 51,
      rules: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 2,
      name: 'Segment-1',
      orders: 51,
      rules: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    }
  ]

  // const { mutateAsync, isLoading: saveUpdate } = useAppMutation({
  //   url: `/api/upsell/segments?id=${segmentId}`,
  //   method: 'PUT'
  // })

  // const { data, isLoading, refetch, isFetching } = useAppQuery({
  //   url: `/api/segments?limit=${pageNum * segmentCount}&name=${search}`
  // })

  // useEffect(() => {
  //   if (data?.segment?.length) setSegments(data?.segment)
  //   else setSegments([])
  // }, [data])

  // checkbox controller
  // select all products
  const handleParentCheckboxChange = (e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setSelectedProductList(segments)
      // console.log('all product')
    } else {
      setSelectedProductList([])
      // console.log('no product')
    }
    const newCheckedItems = Array(segments.length).fill(isChecked)
    setCheckedItems(newCheckedItems)
  }

  // select single product
  const handleChildCheckboxChange = (index, e, product) => {
    selectedProductList.push(product)
    const isChecked = e.target.checked
    // console.log(isChecked, index)
    if (!isChecked) {
      removeItemById(index)
    }
    const newCheckedItems = [...checkedItems]
    newCheckedItems[index] = isChecked
    setCheckedItems(newCheckedItems)
  }

  // removing deselected item from selectedProductList
  const removeItemById = (id) => {
    const index = selectedProductList.findIndex((item) => item.id === id)
    let temp
    if (index !== -1) {
      temp = selectedProductList.filter((item) => item.id !== id)
    }
    setSelectedProductList(temp)
  }
  // console.log(selectedProductList)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAddNew = () => {
    dispatch(restoreCondition())
    navigate('create-new')
  }
  return (
    <Box borderRadius={'10px'}>
      <Box>
        <Box borderRadius={'10px'} p={'20px'} bg={'white'}>
          {/* top header */}
          <HStack
            wrap={'wrap'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', sm: 'row' }}
            gap={'20px'}>
            {/* create and delete button wrapped */}
            <HStack>
              {/* Create segment */}
              <Button
                width={250}
                onClick={handleAddNew}
                borderRadius={10}
                bg={'black'}
                color={'white'}
                py={'5px'}
                _hover={{ bg: '#5C5C5C' }}>
                <Box mr={'16px'}>
                  <CIcon.PlusIcon />
                </Box>
                Create segment
              </Button>
              {/* delete */}
              <Button
                // onClick={() => {
                //   onOpen()
                //   dispatch(restoreCondition())
                // }}
                border={'1px solid #e0e0e0'}
                bg={'white'}
                color={'#AAA8AC'}
                py={'5px'}
                _hover={{ bg: '#5C5C5C', color: 'white' }}>
                <DeleteIcon
                  _hover={{ color: 'white' }}
                  mr={'16px'}
                  color={'#AAA8AC'}
                />
                Delete
              </Button>
            </HStack>
            <HStack>
              <HStack gap={0}>
                {/* date picker */}
                <Shared.DateRangeDrop />
                {/* sort by */}
                <Select
                  _focusVisible={{ borderColor: '#e0e0e0' }}
                  ml={-2}
                  borderLeft={0}
                  w={102}
                  color={'#AAA8AC'}
                  placeholder='Sort By'>
                  <option value='option1'>Name</option>
                  <option value='option2'>Date</option>
                </Select>
              </HStack>
              {/* search box */}
              <Box>
                <HStack
                  pr={5}
                  border={'1px solid #e0e0e0'}
                  borderRadius='10px'
                  position='relative'
                  flex={1}>
                  <Input
                    border={0}
                    fontSize='16px'
                    focusBorderColor='rgba(23, 22, 26, 0.04)'
                    _focusVisible={{ borderColor: 'rgba(23, 22, 26, 0.04)' }}
                    _placeholder={{ color: '#828084', fontSize: '16px' }}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && setSearch(e.target.value)
                    }
                    placeholder='type here to search'
                  />
                  <SearchIcon />
                </HStack>
              </Box>
            </HStack>
          </HStack>
        </Box>
        <br />
        <Box bg={'white'} borderRadius={'10px'}>
          {/* segments table */}
          <TableContainer border={0} p={'30px'}>
            {
              //   isLoading || isFetching ? (
              // <TableSkeleton />
              // ) :
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th align='left'>
                      <Checkbox
                        isChecked={allChecked}
                        onChange={handleParentCheckboxChange}
                        size='sm'
                        padding={'6px'}
                        borderRadius='6px'
                        bg='rgba(215, 215, 215, 0.6)'></Checkbox>
                    </Th>
                    <Th>NAME</Th>
                    <Th></Th>
                    <Th></Th>
                    <Th>ORDERS</Th>
                    <Th>RULES</Th>
                    <Th>HITS</Th>
                    <Th>CONVERSION</Th>
                    <Th>REVENUE</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {segments?.map((segment) => {
                    return (
                      segment?.id && (
                        <Tr key={segment.id}>
                          <Td>
                            <Checkbox
                              isChecked={checkedItems[segment.id]}
                              onChange={(e) =>
                                handleChildCheckboxChange(
                                  segment.id,
                                  e,
                                  segment
                                )
                              }
                              size='sm'
                              padding={'6px'}
                              borderRadius='6px'
                              bg='rgba(215, 215, 215, 0.6)'></Checkbox>
                          </Td>

                          <Td
                            cursor={'pointer'}
                            // onClick={() => {
                            //   setEditInfo(JSON.parse(JSON.stringify(segment)))
                            //   setTimeout(() => editModal(segment), 0)
                            // }}
                            _hover={{ cursor: 'pointer' }}
                            textAlign={'left'}>
                            {segment.name}
                          </Td>
                          <Td></Td>
                          <Td></Td>
                          <Td textAlign={'left'}>{segment.orders}</Td>
                          <Td textAlign={'left'}>{segment.rules}</Td>
                          <Td textAlign={'left'}>{segment.hits}%</Td>
                          <Td textAlign={'left'}>{segment.conversion}%</Td>
                          <Td textAlign={'left'}>${segment.revenue}</Td>
                          <Td textAlign={'left'}>
                            <HStack gap={2} as={Link} to='/segments/update'>
                              <Tooltip label='Edit'>
                                <EditIcon
                                  // onClick={() => {
                                  //   setEditInfo(JSON.parse(JSON.stringify(segment)))
                                  //   setTimeout(() => editModal(segment), 0)
                                  // }}
                                  _hover={{ cursor: 'pointer' }}
                                />
                              </Tooltip>
                            </HStack>
                          </Td>
                        </Tr>
                      )
                    )
                  })}
                </Tbody>
              </Table>
            }
          </TableContainer>

          {/* bottom part */}
          <Box p={'30px'} mt={'150px'}>
            <HStack justifyContent={'space-between'} wrap={'wrap-reverse'}>
              <HStack gap={'45px'} wrap={'wrap'}>
                {/* left part */}
                <HStack gap={'8px'}>
                  <Menu>
                    <MenuButton
                      bg={'rgba(23, 22, 26, 0.04)'}
                      px={'15px'}
                      h={'50px'}
                      py={'12px'}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}>
                      <Text color={'#AAA8AC'}>Bulk actions</Text>
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
                  <Button
                    h={'50px'}
                    bg={'#000'}
                    // bg={'#828084'}
                    _hover={{ bg: '#333333' }}
                    color={'white'}
                    px={'18px'}
                    py={'14px'}>
                    Apply
                  </Button>
                </HStack>
                {/* middle part */}
                <HStack gap={'8px'}>
                  <Text>Showing</Text>
                  <Select
                    fontSize='16px'
                    color='#AAA8AC'
                    borderColor='transparent'
                    focusBorderColor='rgba(23, 22, 26, 0.04)'
                    bg='rgba(23, 22, 26, 0.04)'
                    borderRadius={'10px'}
                    border='0'
                    defaultValue={10}
                    // onChange={(e) => {
                    //   setSegmentCount(e.target.value)
                    //   setPageNum(1)
                    //   setTimeout(refetch, 0)
                    // }}
                    w={'68px'}
                    h={'50px'}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </Select>
                  <Text>out of 1000 campaigns</Text>
                </HStack>
              </HStack>
              {/* left part */}
              <HStack gap={'8px'}>
                <Button
                  // onClick={() => {
                  //   setPageNum((state) => state + 1)
                  //   setTimeout(refetch, 0)
                  // }}
                  bg={'white'}>
                  <CIcon.LoadingIcon />
                  <Text fontSize={'17px'} ml={'10px'} fontWeight={700}>
                    Load More
                  </Text>
                </Button>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Segments
