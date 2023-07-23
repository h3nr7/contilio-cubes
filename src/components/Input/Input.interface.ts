import React from "react"

export interface IInput {
  name: string
  className?: string
  type?: 'text' | 'password'
  placeholder?: string
  value?: string | number
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}