import React from 'react'

interface IProps {
  children: React.ReactNode
}
const Template: React.FC<IProps> = ({ children }) => {
  return <div>{children}</div>
}
export default Template
