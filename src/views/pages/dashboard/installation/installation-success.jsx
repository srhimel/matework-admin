import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import thankYouImage from '../../../../assets/installation.jpg'
import { Link } from 'react-router-dom'
import { CIcon } from '../../../components'

const InstallationSuccess = () => {
  return (
    <>
      <Stack bg={'white'} p={6} borderRadius={10} px={16}>
        <Grid
          alignItems={'center'}
          gap={12}
          templateColumns={{
            base: '1fr',
            lg: '2fr 1fr'
          }}>
          <GridItem>
            <Stack alignItems={'flex-start'} gap={6}>
              <Text color={'black'} fontSize={32} fontWeight={700} maxW={600}>
                Thank you, your request has been successfully received.
              </Text>
              <Text maxW={600}>
                We will send you collaboration request from our Shopify partners
                dashboard. Please approve that when you get it. If you are a
                PLUS merchant, please enable checkout template for us.
              </Text>
              <Button
                as={Link}
                to={'/'}
                iconSpacing={4}
                leftIcon={<CIcon.PrvRoundIcon />}
                rounded={'lg'}
                fontWeight={'semibold'}
                bg={'pBlack'}
                color={'white'}
                _hover={{ bg: 'black' }}>
                Back to Dashboard
              </Button>
            </Stack>
          </GridItem>
          <GridItem
            justifySelf={{
              base: 'start',
              lg: 'end'
            }}>
            <Image src={thankYouImage} alt='' />
          </GridItem>
        </Grid>
      </Stack>
    </>
  )
}

export default InstallationSuccess
