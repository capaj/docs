import React from 'react'
import styled from 'styled-components'
import { theme } from '@prisma/lens/dist/web'
import { AlertCircle } from 'react-feather'

interface AdmonitionType {
  type?: string
}

type AdmonitionProps = React.ReactNode & AdmonitionType

const colorMap: any = {
  info: theme.colors.gray200,
  warning: theme.colors.orange300,
  alert: theme.colors.red600,
}

const Admonition = ({ children, type, ...props }: AdmonitionProps) => {
  return (
    <AdmonitionWrapper {...props} type={type}>
      {type === 'alert' && (
        <span className="alert-circle">
          <AlertCircle color="white" />
        </span>
      )}
      {children}
    </AdmonitionWrapper>
  )
}

export default Admonition

const AdmonitionWrapper = styled.span<{ type?: string }>`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.gray600} !important;
  padding-left: ${p => (p.type === 'alert' ? '3rem' : '1.5rem')};
  padding-bottom: 8px;
  padding-bottom: 8px;
  margin: 2rem 0px;
  position: relative;
  display: flex;
  pre {
    font-weight: normal;
  }

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 100%;
    left: 0px;
    background: ${p => (p.type ? colorMap[p.type] : colorMap['info'])} !important;
    border-radius: 5px;
  }

  .alert-circle {
    position: absolute;
    width: 34px;
    height: 100%;
    left: 0px;
    display: flex;
    justify-content: center;
    padding: 12px 0;
    background: ${p => (p.type ? colorMap[p.type] : colorMap['info'])} !important;
    border-radius: 5px;
  }

  code {
    color: ${theme.colors.gray600} !important;
  }

  p {
    margin: 0;
  }
`