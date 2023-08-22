import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Stack,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { CIcon } from '../../components'
import { FeedComponent } from '../../components'
import { changeFeedName } from '../../../app/features/feedRules/feedRulesSlice'

const AddNewFeed = () => {
  const [loading, setLoading] = useState(false)
  const feedRules = useSelector((state) => state.feedRules)
  // const { mutateAsync } = useAppMutation({
  //   url: `/api/upsell/segments`,
  //   method: 'POST'
  // })

  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    try {
      // const data = await mutateAsync()
      const data = { status: 200 }
      if (data.status === 200) {
        toast.success('Feed created successfully')

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
          Add new feed
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
          <Box bg={'white'} p={5} borderRadius={10}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel color='#000' fontSize={'14px'} fontWeight={'500'}>
                  Name
                </FormLabel>
                <Input
                  _focus={{ bg: '#FFFFFF', border: '1px' }}
                  fontSize='14px'
                  color='#828084'
                  focusBorderColor='rgba(23, 22, 26, 0.04)'
                  bg='rgba(23, 22, 26, 0.04)'
                  rounded={'lg'}
                  border='1px'
                  borderColor={'#91929B'}
                  py={'20px'}
                  w={'full'}
                  _placeholder={{ color: '#828084', fontSize: '16px' }}
                  placeholder='Feed Name'
                  value={feedRules?.name}
                  required
                  onChange={(e) =>
                    dispatch(changeFeedName({ name: e.target.value }))
                  }
                />
              </FormControl>
              <br />
              <Box>
                <FeedComponent.AddProducts />
              </Box>

              <Divider mt={'30px'} mb={'20px'}></Divider>
              {/* Save Changes button */}
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
          </Box>
        </GridItem>
        <GridItem>
          <HStack>
            <CIcon.RulesIcon />
            <Text fontSize={25} fontWeight={700} color={'black'}>
              Product Selection
            </Text>
          </HStack>
          <Text mt={15} fontSize={16} fontWeight={400} color={'#5A585C'}>
            Massa, dictum pellentesque volutpat sem tempor purus sem dictumst
            sed. Ultricies risus cras tempus, mus non dapibus. Quis proin aenean
            at a aliqu.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default AddNewFeed
