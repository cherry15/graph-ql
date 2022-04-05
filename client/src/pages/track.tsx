import React from 'react'
import QueryResult from '../components/query-result/query-result'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import TrackDetail from '../components/tracks/track-detail'
import pageStyles from './page.module.css'

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`

const Track = () => {
  let params = useParams()
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId: params.id },
  })
  return (
    <div className={pageStyles.page}>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </div>
  )
}

export default Track
