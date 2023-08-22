import {
  Box,
  Button,
  CloseButton,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Stack,
  Switch,
  Text,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAndCondition,
  addOrCondition,
  changeActive,
  changeName,
  changeNote,
  deleteAndCondition,
  deleteOrCondition,
  manipulateInput
} from '../../../app/features/segmentRules/segmentsRulesSlice'
import { convertToExpression } from '../../../handler/expressionProcessHandler'
import { CIcon } from '../../components'

const AddNewSegment = () => {
  const segmentsRules = useSelector((state) => state.segmentsRules)

  const [equalOrContains, setEqualOrContains] = useState({ '0-0': 'equal' })
  const [loading, setLoading] = useState(false)

  // const { mutateAsync } = useAppMutation({
  //   url: `/api/upsell/segments`,
  //   method: 'POST'
  // })

  const dispatch = useDispatch()

  const generateId = () => {
    const conArr = Object.keys(segmentsRules?.conditions)
    const lastId = conArr[conArr.length - 1].slice(-1)
    console.log(conArr, lastId)
    return `condition_${Number(lastId) + 1}`
  }

  async function handleSubmit(e) {
    console.log(segmentsRules)
    e.preventDefault()
    let conditions = Object.values(segmentsRules.conditions)
    conditions = conditions.flatMap((condition) => condition)
    const convertedData = convertToExpression(conditions)
    const data = {
      id: null,
      name: segmentsRules.name,
      conditions,
      expression: convertedData.singleConditionArr,
      condition_arr: convertedData.totalCondition,
      condition_operands: convertedData.operands,
      active_status: segmentsRules.active
    }
    console.log(data)
    setLoading(true)

    try {
      // const data = await mutateAsync(upsellCondition)
      const data = { status: 200 }
      if (data.status === 200) {
        toast.success('Segment created successfully')

        // dispatch(restoreCondition())
        // refetch()
      } else {
        toast.error('Something went wrong. Please try again')
      }
    } catch {
      toast.error('Something went wrong. Please try again')
    }
    setLoading(false)
  }

  return (
    <Box>
      <Stack gap={3}>
        <Text color={'black'} fontSize={32} fontWeight={700}>
          Add new segment
        </Text>
        <Text maxW={556}>
          Star text layer figma font opacity pencil ellipse. Editor comment
          device shadow comment project object editor. Scale export library
          figjam team auto ipsum undo. Image comment clip object share draft
          auto.
        </Text>
      </Stack>
      <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={10} mt={12}>
        <GridItem>
          <Box>
            <Stack bg={'white'} p={5} borderRadius={10}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel color='#000' fontSize={'14px'} fontWeight={'500'}>
                    Name
                  </FormLabel>
                  <Input
                    _focus={{ bg: '#FFFFFF', border: '1px' }}
                    fontSize='14px'
                    color='#828084'
                    bg='rgba(23, 22, 26, 0.04)'
                    rounded={'lg'}
                    border='1px'
                    // borderColor={'transparent'}
                    py={'20px'}
                    w={'full'}
                    _placeholder={{ color: '#828084', fontSize: '16px' }}
                    placeholder='Segment Name'
                    value={segmentsRules?.name}
                    required
                    onChange={(e) =>
                      dispatch(changeName({ name: e.target.value }))
                    }
                  />
                </FormControl>
                <br />

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
                  {Object.keys(segmentsRules?.conditions).map(
                    (id, mainIndex) => {
                      return (
                        <Box key={mainIndex}>
                          {segmentsRules?.conditions[id].map((i, index) => (
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

                                <HStack
                                  gap={'20px'}
                                  w={'full'}
                                  alignItems={'center'}>
                                  <Select
                                    fontSize='16px'
                                    color='#828084'
                                    bg='rgba(23, 22, 26, 0.04)'
                                    borderRadius={'10px'}
                                    border='1px'
                                    borderStyle={'solid'}
                                    borderColor={
                                      'background: rgba(145, 146, 155, 1)'
                                    }
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
                                        manipulateInput({
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
                                      <option value='collection'>
                                        Collection
                                      </option>
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
                                    bg='rgba(23, 22, 26, 0.04)'
                                    borderRadius={'10px'}
                                    border='1px'
                                    borderStyle={'solid'}
                                    borderColor={
                                      'background: rgba(145, 146, 155, 1)'
                                    }
                                    required
                                    value={i.condition}
                                    onChange={(e) =>
                                      dispatch(
                                        manipulateInput({
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
                                    {equalOrContains[
                                      `${mainIndex}-${index}`
                                    ] === 'equal' ? (
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
                                        <option value='contains'>
                                          Contains
                                        </option>
                                        <option value='does_not_contain'>
                                          Does not contains
                                        </option>
                                      </>
                                    )}
                                  </Select>
                                  <Input
                                    fontSize='16px'
                                    color='#828084'
                                    bg='rgba(23, 22, 26, 0.04)'
                                    borderRadius={'10px'}
                                    border='1px'
                                    borderStyle={'solid'}
                                    borderColor={
                                      'background: rgba(145, 146, 155, 1)'
                                    }
                                    placeholder='Value'
                                    required
                                    value={i.value}
                                    onChange={(e) =>
                                      dispatch(
                                        manipulateInput({
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
                                        dispatch(deleteOrCondition({ id: id }))
                                      }></CloseButton>
                                  )
                                ) : (
                                  <CloseButton
                                    bg={'rgba(195, 72, 34, 0.15)'}
                                    p={'20px'}
                                    borderRadius={'full'}
                                    onClick={() =>
                                      dispatch(
                                        deleteAndCondition({
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
                            <HStack
                              position={'relative'}
                              top={'-15px'}
                              ml={'20px'}>
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
                                  dispatch(addAndCondition({ id: id }))
                                }>
                                AND
                              </Button>

                              {mainIndex + 1 ===
                              Object.keys(segmentsRules?.conditions).length ? (
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
                                    dispatch(
                                      addOrCondition({ id: generateId() })
                                    )
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
                    }
                  )}
                  <HStack px={'20px'} gap={'80px'}>
                    <HStack gap={'15px'}>
                      <HStack>
                        <Switch
                          isChecked={segmentsRules.active}
                          name='exit-matched'
                          id='exit-matched'
                          colorScheme='green'
                          // className='recharge-switch'
                          onChange={(e) =>
                            e.target.checked
                              ? dispatch(changeActive({ active: true }))
                              : dispatch(changeActive({ active: false }))
                          }
                        />
                        {/* <FormLabel
                      htmlFor='exit-matched'
                      color=' #000000'
                      fontSize={'14px'}
                      cursor='pointer'
                      left='2px'
                      position='absolute'>
                      NO
                    </FormLabel>
                    <FormLabel
                      htmlFor='exit-matched'
                      cursor='pointer'
                      position='absolute'
                      left='3.5rem'
                      fontSize={'14px'}>
                      YES
                    </FormLabel> */}
                      </HStack>
                      <Text fontSize={'18px'} fontWeight={500}>
                        Exit if Matched
                      </Text>
                    </HStack>
                    <Text
                      color={'rgba(0, 0, 0, 0.6)'}
                      fontSize={'16px'}
                      fontWeight={400}>
                      (When enabled, all rules after this will be ignored if
                      this rule is matched)
                    </Text>
                  </HStack>
                </Box>
                <Divider mt={'30px'} mb={'20px'}></Divider>
                <HStack
                  as={'button'}
                  w={'full'}
                  justifyContent={'space-between'}
                  borderRadius={10}
                  bg='#000'
                  color='#fff'
                  py={'10px'}
                  px={25}
                  _hover={{ bg: '' }}
                  loadingText='Saving...'
                  isLoading={loading}
                  type='submit'>
                  <Text>Save Changes</Text>
                  <CIcon.RightArrowIcon />
                </HStack>
              </form>
            </Stack>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Box>
              <HStack>
                <CIcon.RulesIcon />
                <Text fontSize={25} fontWeight={700} color={'black'}>
                  Rules
                </Text>
              </HStack>
              <Text mt={15} fontSize={16} fontWeight={400} color={'#5A585C'}>
                Massa, dictum pellentesque volutpat sem tempor purus sem
                dictumst sed. Ultricies risus cras tempus, mus non dapibus. Quis
                proin aenean at a aliqu.
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default AddNewSegment
