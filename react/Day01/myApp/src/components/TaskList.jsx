import React from 'react'

export default function TaskList({task}) {
  return (
    <div>
        {
            task.map((el) => {
                return <p key={el.id}>{el.title}</p>
            })
        }
    </div>
  )
}
