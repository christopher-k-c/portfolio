import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectGrid = ({projects}) => {
  return (

    <>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 snap-y snap-mandatory max-w-7xl mb-20'>
            {projects.map((card, index) => {
                return <ProjectCard card={card} key={index}></ProjectCard>
            })}
        </div>
    </>

  )
}
