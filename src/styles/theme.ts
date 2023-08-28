import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: 'rgba(41, 157,145,0.2)',
    500: '#299D91',
    600: '#24897E',
  },
  gray: {
    0: '#FFFFFF',
    50:'#F4F5F7',
    100:'rgb(210, 210, 210, 0.25)',
    200:'#C9C9C9',
    400:'#999DA3',
    500:'#9F9F9F',
    600:'#666666',
    700:'#4B5768',
    900:'#191919',
  },
  green: {
    50: '#EDFAF2',
    500: '#4DAF6E',
  },
  red: {
    50: '#FDEDED',
    500: '#E73D1C',
  },
  orange: {
    50: '#FEF7ED',
    500: '#F9B248',
  },
  purple: {
    900: '#1C1A2E',
  },
}

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Inter', sans-serif`,
}

const global = {
  body: {
    bg: 'gray.50',
    color: 'gray.900',
  },
}

export const theme = extendTheme({colors, fonts, styles: global})