import React from 'react'
import Layout from '../components/layout/layout'
import QueryResult from '../components/query-result/query-result'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

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
    variables: { trackId: params.trackId },
  })
  return (
    <Layout>
      <h1>Track</h1>
      <QueryResult error={error} loading={loading} data={data}>
        {JSON.stringify(data?.track)}
      </QueryResult>
    </Layout>
  )
}

export default Track
