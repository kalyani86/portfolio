import React from 'react'
import { CardHoverEffectDemo } from './Card'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { Miniproject } from './MiniProjects'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'


export const Project = () => {
  return (
    <div className='mt-96 text-white'>
       <div className="h-20 w-full">
        <TextHoverEffect text="Project" />
      </div>
        <CardHoverEffectDemo/>
        <div className="h-20 w-full mb-8">
        <TextHoverEffect text="Mini Project" />
      </div>
      <Miniproject/>
      <ShootingStars className="absolute inset-0 pointer-events-none" />
      <StarsBackground  className="absolute inset-0 pointer-events-none"/>
    </div>
  )
}
