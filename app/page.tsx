import Companioncard from '@/components/CompanionCard'
import CompanionList from '@/components/Companionlist'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main >
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <Companioncard 
          id= "123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject= "Science"
          duration={45}
          color="#ffda6e"
        />
        <Companioncard
          id="456"
          name="Countsy the Number"
          topic="Derivitives & Intergrals"
          subject="Maths"
          duration={45}
          color="#e5d0ff"
        />
        <Companioncard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={45}
          color="#bde7ff"
        />
       
      </section>
      <section className='home-section'>
        <CompanionList 
           title = "Recently Completed session"
           companions = {recentSessions}
           classNames = "w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page