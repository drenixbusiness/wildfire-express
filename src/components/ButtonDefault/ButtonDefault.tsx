import React from 'react'

interface ButtonDefaultProps {
    text: string;
    customClassname?: string;
    type?: "button" | "submit" | "reset";
}

const ButtonDefault = ({ text, customClassname, type = "button" }: ButtonDefaultProps) => {
  return (
    <button type={type} className={customClassname}>
        {text}
    </button>
  )
}

export default ButtonDefault