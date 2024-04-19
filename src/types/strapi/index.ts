export interface DataWrapper<T> {
  id: number
  attributes: T
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination: Pagination
  }
}

export interface Image {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText: any
      caption: any
      width: number
      height: number
      formats: any
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: string
      provider: string
      provider_metadata: any
      createdAt: string
      updatedAt: string
    }
  }
}
