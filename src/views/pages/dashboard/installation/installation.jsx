import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { CIcon, InComponent } from '../../../components'
import { Link } from 'react-router-dom'

const Installation = () => {
  return (
    <Box>
      <Stack gap={3}>
        <Text color={'black'} fontSize={32} fontWeight={700}>
          Things to know before Installation
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
                to={'/installation/request'}
                iconSpacing={4}
                rightIcon={<CIcon.NxtRoundIcon />}
                rounded={'lg'}
                fontWeight={'semibold'}
                bg={'pBlack'}
                color={'white'}
                _hover={{ bg: 'black' }}>
                Request Expert Onboarding
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Stack>
      <Grid
        mt={12}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)'
        }}
        gap={6}>
        <GridItem rounded={'md'} p={8} bg={'pBlack'}>
          <InComponent.InstallationCard
            number={1}
            text={'Request an Expert Onboarding.'}
          />
        </GridItem>

        <GridItem rounded={'md'} p={8} bg={'pBlack'}>
          <InComponent.InstallationCard
            number={2}
            text={
              'Once we receive your request we will request Collaborator access to your store via the Shopify Partner Developer platform.'
            }
          />
        </GridItem>
        <GridItem rounded={'md'} p={8} bg={'pGreen'}>
          <InComponent.InstallationCard
            number={3}
            text={
              'Please allow up to 48 hours for our team to complete the onboarding,testing.'
            }
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Installation
