/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label='Menu'>
        <InnerWrapper>
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
        </InnerWrapper>
      </Content>
    </Wrapper>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  /* width: 100dvw; */
  display: flex;
  justify-content: flex-end;
`

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms ease-in;
`

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  height: 100%;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  background: var(--color-white);
  padding: 24px 16px 32px 32px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 1.28, 0.95, 1.04);
    animation-delay: 200ms;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 600ms ease both;
  animation-delay: 400ms;
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
  animation: ${slideIn} 200ms ease-in both;
  animation-delay: 400ms;
`

const PrimaryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-size: 1.125rem;
  font-weight: var(--font-medium);
  text-transform: uppercase;
  text-decoration: none;

  &:first-of-type {
    color: var(--color-secondary);
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
    color: var(--color-gray-700);
    font-size: 14px;
    font-weight: var(--font-normal);
    text-decoration: none;
  }
`

export default MobileMenu
