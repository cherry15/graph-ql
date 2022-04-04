import React from 'react'
import { ITrack } from './track-model'

export interface ITrackCardProps {
  track: ITrack
}

const TrackCard = ({ track }: ITrackCardProps) => {
  const { title, thumbnail, author, modulesCount } = track

  return (
    <div>
      <img src={thumbnail} alt={title} />
      <h4>{title}</h4>
      <p>By {author.name}, modules {modulesCount}</p>
    </div>
  )
}

export default TrackCard
