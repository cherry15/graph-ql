export interface ITrack {
  id: string
  title: string
  author: IAuthor
  thumbnail?: string
  length?: number
  modulesCount?: number
  description?: string
  numberOfViews?: number
  modules: [IModule]
}

export interface IModule {
  id: string
  title: string
  length?: number
}

export interface IAuthor {
  id: string
  name: string
  photo?: string
}
