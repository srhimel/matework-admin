import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  Divider,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AssetImage } from '../../../assets'
import { CIcon } from '..'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAndConditionFeed,
  addOrConditionFeed,
  changeActiveFeed,
  deleteAndConditionFeed,
  deleteOrConditionFeed,
  manipulateInputFeed
} from '../../../app/features/feedRules/feedRulesSlice'

const AddProducts = () => {
  const feedsRules = useSelector((state) => state.feedRules)
  const [equalOrContains, setEqualOrContains] = useState({ '0-0': 'equal' })

  const dispatch = useDispatch()

  const generateId = () => {
    const conArr = Object.keys(feedsRules?.conditions)
    const lastId = conArr[conArr.length - 1].slice(-1)
    console.log(conArr, lastId)
    return `condition_${Number(lastId) + 1}`
  }

  const [checkedItems, setCheckedItems] = useState([false])
  const [selectedProductList, setSelectedProductList] = useState([])

  const allChecked = checkedItems.every(Boolean)
  // dummy product list
  const results = [
    {
      id: 1,
      name: 'Product-1',
      img: AssetImage.shoe_1,
      orders: 51,
      products: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 2,
      name: 'Product-2',
      img: AssetImage.shoe_2,
      orders: 51,
      products: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 3,
      name: 'Product-3',
      img: AssetImage.shoe_3,
      orders: 51,
      products: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    },
    {
      id: 4,
      name: 'Product-4',
      img: AssetImage.shoe_4,
      orders: 51,
      products: 5,
      hits: '112',
      conversion: 5,
      revenue: 76231
    }
  ]

  // select all products
  const handleParentCheckboxChange = (e) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setSelectedProductList(results)
      // console.log('all product')
    } else {
      setSelectedProductList([])
      // console.log('no product')
    }
    const newCheckedItems = Array(results.length + 1).fill(isChecked)
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
  console.log(selectedProductList)
  return (
    <Box>
      <Tabs>
        <HStack
          flexWrap={'wrap'}
          gap={2}
          justifyContent={'space-between'}
          py={30}>
          <Text fontSize={20} color={'black'} fontWeight={700}>
            Add products
          </Text>
          <Divider
            border={'1px'}
            borderColor={'#60606B'}
            my={'26px'}
            w={{ base: 150, md: 200, lg: 350 }}
          />
          <TabList
            bg={'rgba(215, 215, 215, 0.6)'}
            display='inline-flex'
            borderRadius={'17px'}>
            <Tab
              _selected={{ color: '#fff', bg: '#151515' }}
              color='#828084'
              borderRadius='17px'
              w='119px'
              h={'34px'}
              fontSize='14px'
              // onClick={() => setFeedType("auto")}
            >
              Regular
            </Tab>
            <Tab
              _selected={{ color: '#fff', bg: '#151515' }}
              color='#828084'
              borderRadius='17px'
              w='119px'
              h={'34px'}
              fontSize='14px'
              // onClick={() => {
              //   setFeedType("custom");
              //   setSelected([]);
              // }}
            >
              Advance
            </Tab>
          </TabList>
        </HStack>
        <TabPanels>
          {/* ----- Regular ----- */}
          <TabPanel p={0}>
            {/* search field */}
            <HStack
              bg={'#F1EDE7'}
              borderRadius={10}
              px={'10px'}
              py={'10px'}
              position='relative'
              flex={1}>
              <Input
                fontSize='16px'
                color='#828084'
                focusBorderColor='rgba(23, 22, 26, 0.04)'
                _focusVisible={{ borderColor: 'rgba(23, 22, 26, 0.04)' }}
                borderRadius='10px'
                border='0px'
                _placeholder={{ color: '#828084', fontSize: '16px' }}
                placeholder='Search products here...'
              />
              <SearchIcon />
            </HStack>
            <Grid
              templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
              gap={5}
              py={2}>
              <GridItem>
                <Box
                  p={15}
                  border=' 1px solid rgba(0, 0, 0, 0.10)'
                  borderRadius={10}>
                  {/* search results */}
                  <Stack alignItems={'flex-start'}>
                    <HStack
                      w={'full'}
                      borderRadius={10}
                      bg={'#F8F8F8'}
                      p={5}
                      justifyContent={'space-between'}
                      gap={8}>
                      <Text fontSize={15} fontWeight={500} color={'#151515'}>
                        Search results
                      </Text>
                      <Text
                        fontSize={14}
                        fontWeight={300}
                        color={'rgba(21, 21, 21, 0.50)'}>
                        {results.length < 2
                          ? `${results.length} product`
                          : `${results.length} products`}
                      </Text>
                    </HStack>
                    <HStack my={2}>
                      <Checkbox
                        isChecked={allChecked}
                        onChange={(e) => handleParentCheckboxChange(e)}
                        size='sm'
                        padding={'6px'}
                        borderRadius='6px'
                        bg='rgba(215, 215, 215, 0.6)'
                      />
                      <Text>Select all</Text>
                    </HStack>
                    {results.map((p) => (
                      <HStack gap={3} key={p.id} my={2}>
                        <Checkbox
                          isChecked={checkedItems[p.id]}
                          onChange={(e) =>
                            handleChildCheckboxChange(p.id, e, p)
                          }
                          // onChange={(e) => handleCheck(p.id)}
                          size='sm'
                          padding={'6px'}
                          borderRadius='6px'
                          bg='rgba(215, 215, 215, 0.6)'
                        />
                        <Image h={50} w={50} borderRadius={10} src={p.img} />
                        <Text>{p.name}</Text>
                      </HStack>
                    ))}
                  </Stack>
                </Box>
              </GridItem>
              <GridItem>
                {/* selected products */}
                <Box
                  p={15}
                  border=' 1px solid rgba(0, 0, 0, 0.10)'
                  borderRadius={10}>
                  <HStack
                    mb={5}
                    w={'full'}
                    borderRadius={10}
                    bg={'#151515'}
                    p={5}
                    justifyContent={'space-between'}
                    gap={8}>
                    <Text fontSize={15} fontWeight={500} color={'#fff'}>
                      Selected products
                    </Text>
                    <Text
                      fontSize={14}
                      fontWeight={300}
                      color={'rgba(255, 255, 255, 0.80)'}>
                      {selectedProductList.length < 2
                        ? `${selectedProductList.length} product`
                        : `${selectedProductList.length} products`}
                    </Text>
                  </HStack>
                  {selectedProductList.length < 1 && (
                    <Text>No product selected</Text>
                  )}
                  {selectedProductList?.map((p) => (
                    <HStack gap={3} key={p.id} my={3}>
                      {/* <Box
                        cursor={'pointer'}
                        onClick={() => removeItemById(p.id)}
                        color={'white'}
                        px={2}
                        py={1}
                        borderRadius={10}
                        bg={'#fe5c36'}>
                        X
                      </Box> */}
                      <Image h={50} w={50} borderRadius={10} src={p.img} />
                      <Text>{p.name}</Text>
                    </HStack>
                  ))}
                </Box>
              </GridItem>
            </Grid>
          </TabPanel>
          {/* ----- advance ----- */}
          <TabPanel p={0}>
            {/* rule-form */}
            <Box
              py={'20px'}
              mt={'30px'}
              border={'1px'}
              borderColor={'rgba(215, 215, 215, 0.6)'}
              borderRadius={'10px'}>
              <HStack px={'20px'}>
                <CIcon.SixDotIcon />
                <Text fontSize={'18px'}>Rule #1</Text>
              </HStack>
              {Object.keys(feedsRules?.conditions).map((id, mainIndex) => {
                return (
                  <Box key={mainIndex}>
                    {feedsRules?.conditions[id].map((i, index) => (
                      <Box mt={'30px'} px={'20px'} key={index}>
                        <HStack alignItems={'center'}>
                          <Box w={'50px'}>
                            <Text fontSize={'18px'}>
                              {index > 0
                                ? 'And'
                                : mainIndex === 0
                                ? 'If'
                                : 'Or If'}
                            </Text>
                          </Box>

                          <HStack gap={'20px'} w={'full'} alignItems={'center'}>
                            <Select
                              fontSize='16px'
                              color='#828084'
                              borderColor='transparent'
                              focusBorderColor='rgba(23, 22, 26, 0.04)'
                              bg='rgba(23, 22, 26, 0.04)'
                              borderRadius={'10px'}
                              border='0'
                              required
                              value={i.match_by}
                              onChange={(e) => {
                                const oldEqualOrContains = JSON.parse(
                                  JSON.stringify(equalOrContains)
                                )
                                const anArray = [
                                  'product_price',
                                  'product_specific_quantity',
                                  'customer_orders_count',
                                  'customer_total_spent',
                                  'cart_subtotal',
                                  'cart_item_count',
                                  'cart_item_count'
                                ]
                                anArray.find((x) => x === e.target.value)
                                  ? (oldEqualOrContains[
                                      `${mainIndex}-${index}`
                                    ] = 'equal')
                                  : (oldEqualOrContains[
                                      `${mainIndex}-${index}`
                                    ] = 'contains')
                                setEqualOrContains(oldEqualOrContains)

                                dispatch(
                                  manipulateInputFeed({
                                    id: id,
                                    index: index,
                                    field: 'match_by',
                                    value: e.target.value
                                  })
                                )
                              }}>
                              <option hidden value=''>
                                -- Select an option --
                              </option>
                              <optgroup label='Product Rules'>
                                <option value='product_price'>
                                  Product Price
                                </option>
                                <option value='product_title'>
                                  Product Title
                                </option>
                                <option value='product_vendor'>
                                  Product Vendor
                                </option>
                                <option value='product_type'>
                                  Product Type
                                </option>
                                <option value='product_handle'>
                                  Product Handle
                                </option>
                                <option value='product_specific_quantity'>
                                  Product Specific Quantity
                                </option>
                              </optgroup>
                              <optgroup label='Collection Rules'>
                                <option value='collection'>Collection</option>
                              </optgroup>
                              <optgroup label='Customer Rules'>
                                <option value='customer_tags'>
                                  Customer Tags
                                </option>
                                <option value='customer_orders_count'>
                                  Customer Orders Count
                                </option>
                                <option value='customer_total_spent'>
                                  Customer Total Spent
                                </option>
                              </optgroup>
                              <optgroup label='Cart Rules'>
                                <option value='cart_subtotal'>
                                  Cart Subtotal
                                </option>
                                <option value='cart_line_count'>
                                  Cart Line Count
                                </option>
                                <option value='cart_item_count'>
                                  Cart Item Count
                                </option>
                              </optgroup>
                            </Select>
                            <Select
                              // _focus={{ bg: 'rgba(23, 22, 26, 0.05)', border: '1px' }}
                              fontSize='16px'
                              color='#828084'
                              borderColor='transparent'
                              focusBorderColor='rgba(23, 22, 26, 0.04)'
                              bg='rgba(23, 22, 26, 0.04)'
                              borderRadius={'10px'}
                              border='0'
                              required
                              value={i.condition}
                              onChange={(e) =>
                                dispatch(
                                  manipulateInputFeed({
                                    id: id,
                                    index: index,
                                    field: 'condition',
                                    value: e.target.value
                                  })
                                )
                              }>
                              <option hidden value=''>
                                -- Select an option --
                              </option>
                              {equalOrContains[`${mainIndex}-${index}`] ===
                              'equal' ? (
                                <>
                                  <option value='is_equal_to'>
                                    Is equal to
                                  </option>
                                  <option value='is_greater_than'>
                                    Is greater than
                                  </option>
                                  <option value='is_less_than'>
                                    Is less than
                                  </option>
                                </>
                              ) : (
                                <>
                                  <option value='contains'>Contains</option>
                                  <option value='does_not_contain'>
                                    Does not contains
                                  </option>
                                </>
                              )}
                            </Select>
                            <Input
                              fontSize='16px'
                              color='#828084'
                              borderColor='transparent'
                              focusBorderColor='rgba(23, 22, 26, 0.04)'
                              bg='rgba(23, 22, 26, 0.04)'
                              borderRadius={'10px'}
                              border='0'
                              placeholder='Value'
                              required
                              value={i.value}
                              onChange={(e) =>
                                dispatch(
                                  manipulateInputFeed({
                                    id: id,
                                    index: index,
                                    field: 'value',
                                    value: e.target.value
                                  })
                                )
                              }
                            />
                          </HStack>

                          {index === 0 ? (
                            mainIndex === 0 ? (
                              <Box h={'41px'} w={'47px'}>
                                {' '}
                              </Box>
                            ) : (
                              <CloseButton
                                bg={'rgba(195, 72, 34, 0.15)'}
                                p={'20px'}
                                borderRadius={'full'}
                                onClick={() =>
                                  dispatch(deleteOrConditionFeed({ id: id }))
                                }></CloseButton>
                            )
                          ) : (
                            <CloseButton
                              bg={'rgba(195, 72, 34, 0.15)'}
                              p={'20px'}
                              borderRadius={'full'}
                              onClick={() =>
                                dispatch(
                                  deleteAndConditionFeed({
                                    id: id,
                                    index: index
                                  })
                                )
                              }
                            />
                          )}
                        </HStack>
                      </Box>
                    ))}
                    {/* and or button */}
                    <Box
                      w={'full'}
                      borderTop={'1px'}
                      borderColor={'#D7D7D7'}
                      mt={'45px'}>
                      <HStack position={'relative'} top={'-15px'} ml={'20px'}>
                        <Button
                          color={'#828084'}
                          bg={'white'}
                          border={'1px'}
                          borderColor={'#D7D7D7'}
                          w={'60px'}
                          h={'29px'}
                          fontSize={'16px'}
                          fontWeight={400}
                          onClick={() =>
                            dispatch(addAndConditionFeed({ id: id }))
                          }>
                          AND
                        </Button>

                        {mainIndex + 1 ===
                        Object.keys(feedsRules?.conditions).length ? (
                          <Button
                            color={'#828084'}
                            bg={'white'}
                            w={'60px'}
                            h={'29px'}
                            border={'1px'}
                            borderColor={'#D7D7D7'}
                            fontSize={'16px'}
                            fontWeight={400}
                            onClick={() =>
                              dispatch(addOrConditionFeed({ id: generateId() }))
                            }>
                            OR
                          </Button>
                        ) : (
                          <></>
                        )}
                      </HStack>
                    </Box>
                  </Box>
                )
              })}
              <HStack px={'20px'} gap={'80px'}>
                <HStack gap={'15px'}>
                  <HStack>
                    <Switch
                      name='exit-matched'
                      id='exit-matched'
                      colorScheme='green'
                      // className='recharge-switch'
                      onChange={(e) =>
                        e.target.checked
                          ? dispatch(changeActiveFeed({ active: true }))
                          : dispatch(changeActiveFeed({ active: false }))
                      }
                    />
                  </HStack>
                  <Text fontSize={'18px'} fontWeight={500}>
                    Exit if Matched
                  </Text>
                </HStack>
                <Text
                  color={'rgba(0, 0, 0, 0.6)'}
                  fontSize={'16px'}
                  fontWeight={400}>
                  (When enabled, all rules after this will be ignored if this
                  rule is matched)
                </Text>
              </HStack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Text mt={5}>
        Undo blur comment bullet font. Opacity plugin scrolling plugin draft.
        Mask duplicate asset device text asset. Strikethrough layer horizontal
        stroke project pencil. Scrolling align figjam background hand. Stroke
        layer flatten editor.
      </Text>
    </Box>
  )
}

export default AddProducts
