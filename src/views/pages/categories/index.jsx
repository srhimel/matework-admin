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
  FocusLock,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CIcon, Shared } from '../../components'
import '../../components/shared/checkbox.css'
import { DateRange } from '../../components/shared/dateRangePicker'
// import { useAppMutation, useAppQuery } from '../../../hooks'

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [search, setSearch] = useState('')
  const [checkedItems, setCheckedItems] = useState([false])
  const [selectedProductList, setSelectedProductList] = useState([])

  const allChecked = checkedItems.every(Boolean)
  const data = [
    {
      id: 1,
      name: 'Category 1',
      image: '',
      slug: '/category-1',
      parent: '',
      children: [
        {
          id: 3,
          name: 'Children 1',
          slug: '/child-1',
          image: '',

          parent: '',
          children: [],
          services: []
        },
        {
          id: 4,
          name: 'Children 2',
          slug: '/child-2',
          image: '',

          parent: '',
          children: [],
          services: []
        }
      ],
      services: []
    },
    {
      id: 2,
      name: 'Category 2',
      slug: '/category-2',
      image: '',

      parent: '',
      children: [],
      services: []
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
      setSelectedProductList(feeds)
      // console.log('all product')
    } else {
      setSelectedProductList([])
      // console.log('no product')
    }
    const newCheckedItems = Array(feeds.length + 1).fill(isChecked)
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

  return (
    <Box borderRadius={'10px'}>
      <Box borderRadius={'10px'} p={'20px'} bg={'white'}>
        {/* top header */}
        <HStack
          wrap={'wrap'}
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', sm: 'row' }}
          gap={'20px'}>
          {/* create and delete button wrapped */}
          <HStack>
            {/* Create feed */}
            <Button
              onClick={onOpen}
              px={8}
              borderRadius={10}
              bg={'black'}
              color={'white'}
              py={'5px'}
              _hover={{ bg: '#5C5C5C' }}>
              <Box mr={'16px'}>
                <CIcon.PlusIcon />
              </Box>
              Create Category
            </Button>
            {/* Modal for create a new category  */}
            <Modal isOpen={isOpen} onClose={onClose} size={'5xl'}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>add form</ModalBody>
              </ModalContent>
            </Modal>
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
        {/* feeds table */}
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
                  <Th>Name</Th>
                  <Th>Slug</Th>
                  <Th>Children</Th>
                  <Th>Services</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((item) => {
                  return (
                    <SingleCat
                      item={item}
                      key={item.id}
                      handleChildCheckboxChange={handleChildCheckboxChange}
                      checkedItems={checkedItems}
                    />
                  )
                })}
              </Tbody>
              <Tfoot>
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
                  <Th>Name</Th>
                  <Th>Slug</Th>
                  <Th>Children</Th>
                  <Th>Services</Th>
                  <Th>Action</Th>
                </Tr>
              </Tfoot>
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
                  //   setfeedCount(e.target.value)
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
      {/* feeds-modal */}

      {/* <SegmentModal onClose={onClose} isOpen={isOpen} refetch={refetch} /> */}
      {/* <DeleteSegmentModal
        onClose={deleteModalOnClose}
        isOpen={isDeleteModalOpen}
        segmentInfo={segmentInfo}
        // refetch={refetch}
      />
      <EditSegmentModal
        isOpen={isEditModalOpen}
        onClose={editModalOnClose}
        editInfo={editInfo}
        // refetch={refetch}
      /> */}
    </Box>
  )
}

export default Categories

const SingleCat = ({ item, key, handleChildCheckboxChange, checkedItems }) => {
  const {
    isOpen: isChildOpen,
    onOpen: onChildOpen,
    onClose: onChildClose
  } = useDisclosure()

  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose
  } = useDisclosure()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <Tr key={key}>
      <Td>
        <Checkbox
          isChecked={checkedItems[item.id]}
          onChange={(e) => handleChildCheckboxChange(item.id, e, item)}
          size='sm'
          padding={'6px'}
          borderRadius='6px'
          bg='rgba(215, 215, 215, 0.6)'></Checkbox>
      </Td>

      <Td
        cursor={'pointer'}
        // onClick={() => {
        //   setEditInfo(JSON.parse(JSON.stringify(feed)))
        //   setTimeout(() => editModal(feed), 0)
        // }}
        _hover={{ cursor: 'pointer' }}
        textAlign={'left'}>
        {item.name}
      </Td>
      <Td textAlign={'left'}>{item.slug}</Td>
      <Td textAlign={'left'}>
        <VStack align={'start'} justify={'center'}>
          <div>
            <Button size={'xs'} colorScheme='blue' onClick={onChildOpen}>
              Add Sub Category
            </Button>
            {/* Modal for adding sub category */}
            <Modal isOpen={isChildOpen} onClose={onChildClose} size={'5xl'}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>add form</ModalBody>
              </ModalContent>
            </Modal>
          </div>
          <div>
            {item.children.length
              ? item.children.map((i) => i.name).join(' ,')
              : ''}
          </div>
        </VStack>
      </Td>
      <Td textAlign={'left'}>{item.services}</Td>
      <Td textAlign={'left'}>
        <HStack gap={2}>
          <Button size={'xs'} colorScheme='blue' onClick={onEditOpen}>
            Edit
          </Button>
          {/* Modal for Editing category */}
          <Modal isOpen={isEditOpen} onClose={onEditClose} size={'5xl'}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>add form</ModalBody>
            </ModalContent>
          </Modal>
          <Button colorScheme='red' size={'xs'} onClick={onOpen}>
            Delete
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Delete Customer
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={onClose} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </HStack>
      </Td>
    </Tr>
  )
}
