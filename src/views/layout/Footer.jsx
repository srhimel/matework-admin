import { Flex, HStack, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  const date = new Date()
  return (
    <footer
      style={{
        marginTop: 'auto',
        paddingBottom: '20px'
      }}>
      <Flex
        mt={'20'}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        alignItems={'center'}
        flexDirection={{ base: 'column', md: 'row' }}>
        <Text color='gray.900'>
          2021 - {date.getFullYear()} &copy;{' '}
          <Text color='gray.900' as='span' fontWeight={700}>
            Matework &nbsp;
          </Text>
          | All right reserved
        </Text>

        <HStack gap={8} mr={5} color='gray.800'>
          <a target='_blank' rel='noreferrer' href='https://navidiumapp.com/'>
            About
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://navidiumapp.com/privacy-policy.html'>
            Privacy
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://navidiumapp.com/terms-condition.html'>
            TOS
          </a>
        </HStack>
      </Flex>
    </footer>
  )
}

export default Footer
