import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Collapse,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'
import {
  FiChevronDown,
  FiCompass,
  FiHome,
  FiMenu,
  FiSettings,
  FiTrendingUp
} from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import {
  Link,
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation
} from 'react-router-dom'
import { CIcon } from '../components'
import Footer from './Footer'
import { FeedsIcon, SegmentIcon } from '../components/icons/customIcon'

const LinkItems = [
  {
    name: 'Dashboard',
    icon: CIcon.Dashboard,
    href: '/'
  },
  {
    name: 'Categories',
    icon: CIcon.Campaigns,
    href: '/categories'
  }
]

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH='100vh' bg={'#F1EDE7'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', xl: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='xs'>
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box
        ml={{ base: 0, xl: 72 }}
        px={{ base: 5, xl: 12 }}
        display={'flex'}
        flexDirection={'column'}
        minH={'calc(100vh - 80px)'}>
        <Box pt={{ base: 5, xl: 12 }} flexGrow={'1'}>
          <ScrollRestoration />
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('#151515', 'white')}
      color={'white'}
      w={{ base: 'full', xl: 72 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='3xl' fontFamily='monospace' fontWeight='bold'>
          {/* <img src='/logo.svg' width={198} alt='' /> */}
          Matework
        </Text>
        <CloseButton display={{ base: 'flex', xl: 'none' }} onClick={onClose} />
      </Flex>
      <Flex
        justifyContent='flex-start'
        alignItems='center'
        mx={4}
        px={4}
        py={3}
        mb={4}
        rounded={'md'}
        bg={'rgb(255, 255, 255, 0.05)'}>
        <Avatar src={''} size={'sm'}></Avatar>
        <VStack alignItems={'flex-start'} spacing={1} ml='10px'>
          <Text
            noOfLines={1}
            as='a'
            target={'_blank'}
            href={``}
            rel='no-referer'
            color={'#767676'}
            fontSize='10px'>
            {'makemedaddy.mypify.com'.slice(0, 25)}
          </Text>
          <Text noOfLines={1} fontWeight={700} fontSize='15px'>
            {'makemedaddy.mypify.com'.slice(0, 11)}
          </Text>
        </VStack>
        <IoIosArrowDown style={{ marginLeft: 'auto' }} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          innerItems={link?.children}
          href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, innerItems, href, ...rest }) => {
  const { isOpen, onToggle } = useDisclosure()
  return innerItems ? (
    <Box className='nav-withChild'>
      <Flex
        onClick={onToggle}
        align='center'
        {...rest}
        p='4'
        gap={3}
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'rgba(255,255,255,.05)',
          color: 'white'
        }}>
        {icon && (
          <Icon
            fontSize='16'
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
        {isOpen ? (
          <IoIosArrowUp style={{ marginLeft: 'auto' }} />
        ) : (
          <IoIosArrowDown style={{ marginLeft: 'auto' }} />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box p='2' color='gray.900' bg='#F1EDE7' rounded='md' mx={4}>
          {innerItems.map(
            ({ icon: innerIcon, name: innerName, href: innerHref }) => (
              <NavLink
                key={innerName}
                to={innerHref}
                style={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none' }}>
                <Flex
                  className='inner-item'
                  align='center'
                  p='4'
                  gap={3}
                  borderRadius='lg'
                  role='group'
                  cursor='pointer'
                  _hover={{
                    bg: '#151515a9 !important',
                    color: 'white'
                  }}>
                  {innerIcon && (
                    <Icon
                      mr='4'
                      fontSize='16'
                      _groupHover={{
                        color: 'white'
                      }}
                      as={innerIcon}
                    />
                  )}
                  {innerName}
                </Flex>
              </NavLink>
            )
          )}
        </Box>
      </Collapse>
    </Box>
  ) : (
    <NavLink
      to={href}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        gap={3}
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'rgba(255,255,255,.05)',
          color: 'white'
        }}
        {...rest}>
        {icon && (
          <Icon
            fontSize='16'
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const { pathname } = useLocation()
  return (
    <Flex
      position={'sticky'}
      top={0}
      zIndex={1}
      ml={{ base: 0, xl: 72 }}
      px={{ base: 5, xl: 12 }}
      height='20'
      alignItems='center'
      bg={{
        base: useColorModeValue('black', 'white'),
        xl: useColorModeValue('white', 'black')
      }}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', xl: 'space-between' }}
      {...rest}>
      <Box display={{ base: 'none', xl: 'block' }}>
        <Text
          fontWeight={'bold'}
          fontSize={'3xl'}
          textTransform={'capitalize'}
          color={'#151515'}>
          {pathname === '/'
            ? 'Dashboard'
            : pathname.includes('blog')
            ? 'Recommended For You'
            : pathname.split('/')[1]}
        </Text>
      </Box>

      <IconButton
        colorScheme='whiteAlpha'
        display={{ base: 'flex', xl: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', xl: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
        <img src='/logo.svg' width={198} alt='' />
      </Text>

      <HStack spacing={{ base: '0' }}>
        <Flex ml={6} mr={6} position={'relative'} color={{ base: 'white' }}>
          <CIcon.Bell color={'#666'} />
          <Flex
            position={'absolute'}
            top={-1}
            right={-1}
            align={'center'}
            justify={'center'}
            bg={'gray.900'}
            color={'white'}
            height={4}
            rounded={'full'}
            w={4}
            fontSize={'x-small'}>
            <Text>0</Text>
          </Flex>
        </Flex>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar size={'sm'} />
                <VStack
                  display={{ base: 'none', xl: 'flex' }}
                  alignItems='flex-start'
                  spacing='0'
                  ml='2'>
                  <Text fontSize='sm' fontWeight={700}>
                    Justina Clark
                  </Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', xl: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
