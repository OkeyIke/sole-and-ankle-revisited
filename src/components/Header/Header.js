import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import NavLink from '../NavLink'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/woman'>Woman</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <SHoppingBagButton>
            <VisuallyHidden>Open cart</VisuallyHidden>
            <Icon id='shopping-bag' />
          </SHoppingBagButton>
          <UnstyledButton>
            <VisuallyHidden>Search</VisuallyHidden>
            <Icon id='search' />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <VisuallyHidden>Open menu</VisuallyHidden>
            <Icon id='menu' />
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media (${QUERIES.tabletAndSmaller}) {
    overflow: revert;
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media (${QUERIES.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.3vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`

const LogoWrapper = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    flex: revert;
  }
`

const SHoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`

export default Header
