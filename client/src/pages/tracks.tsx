import React from 'react'
import QueryResult from '../components/query-result/query-result'
import { gql, useQuery } from '@apollo/client'
import { ITrack } from '../components/tracks/track-model'
import TrackCard from '../components/tracks/track-card'
import styles from '../styles/container.module.css'
import pageStyles from './page.module.css'

const TRACKS = gql`
  query TracksQuery {
    tracksForHome {
      id
      title
      author {
        name
      }
      thumbnail
      modulesCount
    }
  }
`

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)
  return (
    <div className={pageStyles.page}>
      <h1>Tracks</h1>
      <QueryResult error={error} loading={loading} data={data}>
        <div className={styles.container}>
          {data?.tracksForHome?.map((track: ITrack) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </QueryResult>
    </div>
  )
}

export default Tracks
