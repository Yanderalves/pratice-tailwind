import React, { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'px-4 py-2 rounded-md text-sm border border-white',
  variants: {
    color: {
      gradient: 'bg-[#18C8FF]',
      normal: '#FFFFF'
    },
    opacity: {
      normal: 'opacity-100',
      transparent: 'opacity-75'
    }
  },
  defaultVariants: {
    color: 'gradient',
    opacity: 'normal'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export default function Button({ color, opacity, className, ...props }: ButtonProps) {


  return (
    <button {...props} className={button({ color, opacity, className }
    )}>
      {props.children}
    </button>
  );
}
