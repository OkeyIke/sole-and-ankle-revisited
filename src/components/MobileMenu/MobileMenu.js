/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { COLORS, WEIGHTS } from '../../constants'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id='close' />
        </CloseButton>
        <Filler />
        <PrimaryNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </PrimaryNav>
        <FooterNav>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </FooterNav>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: hsl(220deg 5% 40% / 0.8);
  width: 100dvw;
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;

  background: ${COLORS.white};
  padding: 24px 16px 32px 32px;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`

const PrimaryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

const Filler = styled.div`
  flex: 1;
`

const FooterNav = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  & a {
    color: var(--gray-700, #60666c);
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
  }
`

export default MobileMenu
