import { Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const InstallationCard = ({ number, text }) => {
  return (
    <Flex gap={8} direction={'column'} alignItems={'flex-start'}>
      <Tag px={5} py={1} rounded={'full'} fontWeight={'black'}>
        {number}
      </Tag>
      <Text color={'white'} fontSize={'md'}>
        {text}
      </Text>
    </Flex>
  )
}

export default InstallationCard
