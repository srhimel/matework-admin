import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { CIcon, InComponent } from '../../../components'
import { Link, useNavigate } from 'react-router-dom'

const InstallationRequest = () => {
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate('/installation/success')
  }
  return (
    <Box>
      <Stack gap={3}>
        <Text color={'black'} fontSize={32} fontWeight={700}>
          Fill the following form
        </Text>
        <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={10}>
          <GridItem>
            <Text maxW={556}>
              All installations and onboarding take place in a duplicate theme
              and we do not publish our app live. Once completed we will email
              you with a preview link for you to review the widget and ensure
              that it looks perfect on desktop, tablet, and mobile.
            </Text>
          </GridItem>
          <GridItem>
            <VStack justifyContent={'flex-end'} alignItems={'flex-end'} gap={3}>
              <Button
                iconSpacing={4}
                bg='white'
                rounded={'lg'}
                fontWeight={'semibold'}
                leftIcon={<CIcon.HelpIcon />}>
                Help & Support
              </Button>
              <Button
                as={Link}
                to={'/installation'}
                iconSpacing={4}
                leftIcon={<CIcon.PrvRoundIcon />}
                rounded={'lg'}
                fontWeight={'semibold'}
                bg={'pBlack'}
                color={'white'}
                _hover={{ bg: 'black' }}>
                Go Back
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Stack>
      <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={10} mt={12}>
        <GridItem>
          <Box>
            <Stack bg={'white'} p={6} borderRadius={10}>
              <form action='' onSubmit={handleFormSubmit}>
                <Grid gap={6} templateColumns={'repeat(2, 1fr)'}>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 1
                    }}>
                    <FormControl>
                      <FormLabel fontWeight={'semibold'} color={'black'}>
                        Store Address *
                      </FormLabel>
                      <Input
                        type='text'
                        minH={'47px'}
                        borderColor={'background: rgba(145, 146, 155, 1)'}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 1
                    }}>
                    <FormControl>
                      <FormLabel fontWeight={'semibold'} color={'black'}>
                        Theme Name *
                      </FormLabel>
                      <Input
                        type='text'
                        minH={'47px'}
                        borderColor={'background: rgba(145, 146, 155, 1)'}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 1
                    }}>
                    <FormControl>
                      <FormLabel fontWeight={'semibold'} color={'black'}>
                        Email *
                      </FormLabel>
                      <Input
                        type='email'
                        minH={'47px'}
                        borderColor={'background: rgba(145, 146, 155, 1)'}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 1
                    }}>
                    <FormControl>
                      <FormLabel fontWeight={'semibold'} color={'black'}>
                        Collaborator 4 Digit Code
                      </FormLabel>
                      <Input
                        type='password'
                        minH={'47px'}
                        borderColor={'background: rgba(145, 146, 155, 1)'}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 2
                    }}>
                    <FormControl>
                      <FormLabel fontWeight={'semibold'} color={'black'}>
                        Notes
                      </FormLabel>
                      <Textarea
                        rows={6}
                        borderColor={
                          'background: rgba(145, 146, 155, 1)'
                        }></Textarea>
                    </FormControl>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 1
                    }}>
                    <Select
                      borderColor={'background: rgba(145, 146, 155, 1)'}
                      minH={'46px'}
                      placeholder='How did you hear of us?'></Select>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 2
                    }}>
                    <Text>
                      NB: We will send you collaboration request from our
                      shopify partners dashboard. Please approve that when you
                      get it. If you are a PLUS merchant, please enable checkout
                      template for us.
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={{
                      base: 2,
                      xl: 2
                    }}>
                    <Button
                      minH={'47px'}
                      w={'full'}
                      rounded={'lg'}
                      fontWeight={'semibold'}
                      bg={'pBlack'}
                      color={'white'}
                      type='submit'
                      _hover={{ bg: 'black' }}>
                      <HStack justifyContent={'space-between'} w={'full'}>
                        <span>Request Expert Installation</span>
                        <span>
                          <CIcon.NxtRoundIcon />
                        </span>
                      </HStack>
                    </Button>
                  </GridItem>
                </Grid>
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
                  Store Address
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

export default InstallationRequest
