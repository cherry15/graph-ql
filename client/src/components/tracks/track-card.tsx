import React from 'react'
import { ITrack } from './track-model'
import { NavLink } from 'react-router-dom'

export interface ITrackCardProps {
  track: ITrack
}

const TrackCard = ({ track }: ITrackCardProps) => {
  const { title, thumbnail, author, modulesCount, id } = track

  return (
    <div>
      <NavLink to={`/track/${id}`}>
        <img src={thumbnail} alt={title} />
        <h4>{title}</h4>
        <p>
          By {author.name}, {modulesCount} modules <span className='more'>more...</span>
        </p>
      </NavLink>
    </div>
  )
}

export default TrackCard
