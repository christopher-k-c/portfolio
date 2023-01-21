import React from 'react'
import { TestCard } from './TestCard'

export const TestCardGrid = ({projects}) => {
  return (

    <>
        <div className='grid lg:grid-cols-2 grid-cols-1 m-4 gap-10 snap-y snap-mandatory max-w-7xl'>
            {projects.map((card, index) => {
                return <TestCard card={card} key={index}></TestCard>
            })}
        </div>
    </>

  )
}
