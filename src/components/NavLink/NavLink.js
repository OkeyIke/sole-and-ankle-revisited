import React from 'react'
import styled from 'styled-components/macro'

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-medium);
  /* Text slide-up effect */
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Text = styled.span`
  display: block;
  transfrom: translateY(0%);
  transition: transform 500ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(-100%);
      transition: 250ms;
    }
  }
`

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;

  transfrom: translateY(var(--translate-from));
  ${Wrapper}:hover & {
    transform: translateY(var(--translate-to));
  }
`

const HoverText = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(var(--translate-from));
  font-weight: var(--font-bold);
  ${Wrapper}:hover & {
    transform: translateY(var(--translate-to));
  }
`

export default NavLink
