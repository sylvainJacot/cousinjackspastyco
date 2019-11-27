import {css} from 'styled-components'

export const sizes = {
    desktopL: 1440,
    desktop: 1024,
    tablet: 768,
    mobileS: 320
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `
    return accumulator
}, {})
