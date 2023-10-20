export type TvDetail = {
  id: number
  name: string
  year: number
  status: string
  first_air_date: string
  number_of_seasons: number
  tmdb_id: number
  overview: string
  poster_path: string
  backdrop_path: string
}

export async function listAllTvs(): Promise<TvDetail[]> {
  const resp = await fetch('/api/tvs')
  return await resp.json()
}
