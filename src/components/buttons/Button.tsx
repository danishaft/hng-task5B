import { CSSProperties, ReactNode } from 'react'
import styles from './Button.module.scss'
interface Button {
  text: string,
  children?: ReactNode,
  type: "button" | "submit" | "reset" | undefined,
  color: string,
  bgColor?: string,
  border?: string,
  reverse?: string,
}
const Button1 = ({text, children, type, color,bgColor , border, reverse}: Button) => {
  const style: CSSProperties = {
    backgroundColor : `${bgColor}`,
    color : `${color}`,
    border: border ? `1px solid ${color}` : '',
    flexDirection: reverse ? `row-reverse` : 'row',
  }
  return (
    <button type={type} style={style} className={`${styles.btn}`}>
      {children}
       <p>{text}</p>
    </button>
  )
}

const Button2 = ({text, children, type, color,bgColor , border, reverse}: Button) => {
  const style: CSSProperties = {
    backgroundColor : `${bgColor}`,
    color : `${color}`,
    border: border ? `1px solid ${color}` : '',
    flexDirection: reverse ? `row-reverse` : 'row',
  }
  return (
    <button type={type} style={style} className={`${styles.btn} ${styles.btn2}`}>
      {children}
       <p>{text}</p>
    </button>
  )
}

export {Button1, Button2}