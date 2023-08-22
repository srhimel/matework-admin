import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowUpIcon,
  CheckIcon,
  CloseIcon,
  SettingsIcon,
  StarIcon
} from '@chakra-ui/icons'
import { CIcon } from '../components'
import plans from '../../lib/data/plans'

const PlanCard = ({ plan, planStatus, upgrade, isVisible }) => {
  const { name, title, price, order, endpoint, legacyName, plan_id } = plan
  const navigate = useNavigate()

  // const { mutateAsync, isLoading: loading } = useAppMutation({
  //   url: endpoint
  // })

  // const inputData = { ...plan, test: false }

  // const handlePurchase = async () => {
  //   try {
  //     mutateAsync(inputData).then((data) => {
  //       if (data?.confirmationUrl) {
  //         const { confirmationUrl } = data
  //         localStorage.setItem('NVDWelcome', true)
  //         if (name === 'Free') {
  //           navigate('/')
  //         } else {
  //           window.location.href = confirmationUrl
  //         }
  //       }
  //     })
  //   } catch (error) {
  //     console.log('There is an error', error.message)
  //   }
  // }
  return (
    <Card
      border='none'
      shadow='none'
      borderRadius='10px'
      bg={legacyName === planStatus ? 'green.100' : ''}
      _hover={{ bg: 'green.100' }}
      transition='ease-in-out'
      transitionDuration='200ms'>
      <CardHeader mb={2}>
        <Heading size='lg' mb={4}>
          {name}
        </Heading>
        <Text color='#36454F' fontSize='18px'>
          {title}
        </Text>
        <HStack alignItems='center' mb={2}>
          <Text fontSize='3xl' fontWeight='bold'>
            {price}
            <span style={{ fontSize: '20px' }}>$</span>
          </Text>
          <Text color='#36454F' fontSize='15px'>
            per month
          </Text>
        </HStack>
        {legacyName === planStatus ? (
          <Button
            color='#828084'
            fontSize='16px'
            fontWeight='normal'
            _active={false}
            _hover={false}
            _focus={false}
            cursor='not-allowed'
            bg='#F6F6F6'
            py='4'
            px='18px'
            mb={3}
            borderRadius='10px'
            rightIcon={<ArrowUpIcon />}>
            Current Plan
          </Button>
        ) : (
          <Button
            // isDisabled={!isVisible}
            // isLoading={loading}
            // onClick={handlePurchase}
            _hover={{ bg: 'black' }}
            color='#FFFFFF'
            fontSize='16px'
            fontWeight='normal'
            cursor='pointer'
            bg='pBlack'
            py='14px'
            px='18px'
            mb={3}
            borderRadius='10px'
            rightIcon={<ArrowForwardIcon />}>
            {upgrade ? `Upgrade to ${name}` : `Purchase ${name} Plan`}
          </Button>
        )}
      </CardHeader>
      <CardBody pt={0}>
        <Text color='#36454F' fontSize='18px' fontWeight='medium' mb={5}>
          Includes
        </Text>
        <VStack align='flex-start'>
          <HStack color='#36454F'>
            <CheckIcon />
            <Text>
              {order !== '99999'
                ? `Up to ${order} orders per month`
                : 'Unlimited Orders per month'}{' '}
            </Text>
          </HStack>
          <HStack color='#36454F'>
            <CheckIcon />
            <Text> Free expert installation</Text>
          </HStack>
          <HStack color='#36454F'>
            <CheckIcon />
            <Text> Automatic Installation</Text>
          </HStack>
          <HStack color='#36454F'>
            <CheckIcon />
            <Text> Email Support</Text>
          </HStack>
          <HStack color='#36454F'>
            {name === 'Enterprise' ? <CheckIcon /> : <CloseIcon />}
            <Text> Shopify Plus</Text>
          </HStack>
          <HStack color='#36454F'>
            {name === 'Enterprise' ? <CheckIcon /> : <CloseIcon />}
            <Text> Live Chat</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

const Upgrade = () => {
  const merchantBill = {
    name: 'Navidium Growth Plan'
  }
  // const {
  //   data: merchantBill,
  //   isLoading: merchantLoading,
  //   isError: merchantError,
  //   refetch: refetchMerchant
  // } = useAppQuery({
  //   url: '/api/billing'
  // })
  const { pathname } = useLocation()

  return (
    <Box>
      <VStack align='flex-start'>
        <Heading size={'lg'}>Upgrade your plan</Heading>
        <Text color='#36454F' width={{ base: 'full', lg: '70%' }}>
          To utilize the full features of our app, please consider upgrading
          your plan.
        </Text>
      </VStack>

      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)'
        }}
        gap='4'
        mt={8}>
        {plans?.map((plan) => (
          <PlanCard
            plan={plan}
            key={plan.name}
            upgrade
            planStatus={merchantBill?.name}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Upgrade
