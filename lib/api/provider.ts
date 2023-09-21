import exp from 'constants'

export type AlistFile = {
  name: string
  path: string
  is_dir: boolean
}

export type MediaInfo = {
  media_type: string
  tmdb_id: number
  name: string
  year: string
  overview: string
  poster_path: string
  backdrop_path: string
}

export async function listAlistFiles(path: string): Promise<AlistFile[]> {
  const url = '/api/provider/alist/files?' + new URLSearchParams({ path: path }).toString()
  const resp = await fetch(url)
  return await resp.json()
}

export async function searchTv(query: string): Promise<MediaInfo[]> {
  const url = '/api/provider/tmdb/tv/search?' + new URLSearchParams({ query: query }).toString()
  const resp = await fetch(url)
  return await resp.json()
}
