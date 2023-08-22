import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const widget2 = ({ props }) => {
  return (
    <Flex
      direction={'column'}
      justify={'space-between'}
      gap={12}
      {...props}
      h={'full'}>
      <HStack justify={'space-between'} wrap={'wrap'}>
        <Text fontSize={'xl'} fontWeight={'semibold'} color={'#151515'}>
          Campaigns
        </Text>
        <HStack gap={8}>
          <HStack gap={3}>
            <Box h={4} w={4} rounded={'full'} bg={'pBlack'}></Box>
            <Text>Active</Text>
          </HStack>
          <HStack gap={3}>
            <Box h={4} w={4} rounded={'full'} bg={'#E7E7E7'}></Box>

            <Text>Inactive</Text>
          </HStack>
        </HStack>
      </HStack>
      <Flex direction={'column'} gap={4} w={'full'}>
        <Box
          py={4}
          px={10}
          w={`${(5 / 17) * 100}%`}
          minW={48}
          rounded={'lg'}
          textAlign={'end'}
          bg={'#E7E7E7'}>
          <Text>5 Campaigns</Text>
        </Box>
        <Box
          w={`${(12 / 17) * 100}%`}
          py={4}
          px={10}
          minW={48}
          rounded={'lg'}
          textAlign={'end'}
          bg={'pBlack'}
          color={'white'}>
          <Text>12 Campaigns</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
