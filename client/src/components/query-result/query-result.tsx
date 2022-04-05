import React from 'react'
import { ITrack } from '../tracks/track-model'

export interface IQueryResultProps {
  loading: boolean
  error: any
  data: ITrack
  children: React.ReactNode
}

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryResult = ({ loading, error, data, children }: IQueryResultProps) => {
  if (error) {
    return <p>ERROR: {error.message}</p>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  if (!data) {
    return <p>Nothing to show...</p>
  }
  if (data) {
    return <>{children}</>
  }
}

export default QueryResult
