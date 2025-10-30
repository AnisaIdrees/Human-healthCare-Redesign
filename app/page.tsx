import React from 'react'
import HeroSection from '@/components/section/HeroSection'
import PressSection from '@/components/section/PressSection'
import ServicesSection from '@/components/section/ServicesSection'
import TestimonialsSection from '@/components/section/TestimonialsSection'

export default function page() {
  return (
    <div className='bg-purple-200'>

    <HeroSection/>
    <ServicesSection/>
    <PressSection/>
    <TestimonialsSection/>
    </div>
  )
}
