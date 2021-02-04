import React from 'react'

// assets
import logo from '../../assets/images/logo.svg'

export const Icons = {
  logo,
}

export interface IIconProps {
  type: keyof typeof Icons
  className: string
  alt: string
}

export default function Icon(props: IIconProps): JSX.Element {
  return <img src={Icons[props.type]} className={props.className} alt={props.alt} />
}
