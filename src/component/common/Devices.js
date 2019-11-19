// import { useMediaQuery } from 'react-responsive'
// export const Desktop = ({ children }) => {
//   const isDesktop = useMediaQuery({ minWidth: 992 })
//   return isDesktop ? children : null
// }
// export const Tablet = ({ children }) => {
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
//   return isTablet ? children : null
// }
// export const ThinkPad = ({ children }) => {
//   const isThinkpad = useMediaQuery({ minWidth: 1016, maxWidth: 1333 })
//   return isThinkpad ? children : null
// }
// export const Mobile = ({ children }) => {
//   const isMobile = useMediaQuery({ maxWidth: 767 })
//   return isMobile ? children : null
// }
// export const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ minWidth: 768 })
//   return isNotMobile ? children : null
// }

import { useMediaQuery } from 'react-responsive'
export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1462, maxWidth:1729 })
  return isDesktop ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
export const ThinkPad = ({ children }) => {
  const isThinkpad = useMediaQuery({ minWidth: 992 ,maxWidth:1462})
  return isThinkpad ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
