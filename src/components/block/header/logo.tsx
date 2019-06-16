import React from 'react'
import LogoImage from '../../../assets/header-logo.svg'
import { LogoWrapper } from './style';

type LogoProps = {
  size: number
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <LogoWrapper src={LogoImage} width={size} alt="Volanty Logo" />
  )
}
export default Logo;