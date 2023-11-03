import React from 'react'
import './index.scss'

interface ButtonProps {
  text?:string,
  type?: string
  disabled?:boolean
  style?:React.CSSProperties
  className?:string
  onClick?:(event: any) => void
}

const Button: React.FC<ButtonProps> = ({ text, type, disabled, style, className, onClick }) => {
  if (type == 'default'){
    return <div className={`yon-button yon-default-button ${ disabled ? 'yon-disabled-button' : null } ${className}`} style={style} onClick={ disabled ? onClick : undefined}>
      {text}
    </div>
  } else {
    return <div className={`yon-button yon-main-button ${ disabled ? 'yon-disabled-button' : null } ${className}`} style={style}  onClick={ disabled ? onClick : undefined}>
      {text}
    </div>
  }
}

Button.defaultProps = {
  text: '按钮',
  type: 'default',
  disabled: false,
  style: {},
  className: '',
  onClick: () => undefined
}

export default Button
