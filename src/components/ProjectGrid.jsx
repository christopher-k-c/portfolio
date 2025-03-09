import React from 'react'
import { ProjectCard } from './ProjectCard'

export const ProjectGrid = ({projects}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {projects.map((card, index) => (
        <ProjectCard key={index} card={card} />
      ))}
    </div>
  )
}
