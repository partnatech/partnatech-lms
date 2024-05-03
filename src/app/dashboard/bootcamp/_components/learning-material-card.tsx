import React from "react"

interface LearningMaterialsProps {
  image: string
  title: string
  date: string
}

export const LearningMaterialsCard = (props: LearningMaterialsProps) => {
  return (
    <div className="border border-primary-border rounded-lg flex flex-col justify-between hover:cursor-pointer">
      <img src={props.image} alt={props.image} className="rounded-t-lg" />
      <div className="p-4">
        <p>{props.title}</p>
        <p className="text-secondary-content-dark">{props.date}</p>
      </div>
    </div>
  )
}
