import React from 'react'

const Button = ({children, variant='', className='', ...props}) => {
    const base = ' px-6 py-2 rounded-full font-semibold transition';
    const variants = {
        gradient: 'btn-gradient',
        outline: 'btn-outline'
    }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button