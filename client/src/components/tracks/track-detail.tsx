import React from 'react'
import { ITrack } from './track-model'
import styles from './track-detail.module.css'

export interface ITrackDetailProps {
  track: ITrack
}

const TrackDetail = ({ track }: ITrackDetailProps) => {
  const { title, thumbnail, author, description } = track

  return (
    <div className={styles.trackDetail}>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.heading}>By {author.name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default TrackDetail
