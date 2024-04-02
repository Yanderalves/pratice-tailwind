import React, { ComponentProps } from 'react'

export type CardProps = ComponentProps<'div'>


export default function Card({ ...props }: CardProps) {
  return (
    <div>{props.children}</div>
  )
}
