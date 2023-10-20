import { TvDetail } from './tv'

export type SubscriptionDetail = {
  id: number
  media_type: string
  media_id: number
  resource_provider: string
  resource_url?: string
  season_number?: number
  resolutions?: string[]
  subtitles?: string[]
  status: string
  tv_detail?: TvDetail
}

export type NewSubscription = {
  media_type: string
  tmdb_id: number
  resource_provider: string
  resource_url: string
  season_number?: number
  resolutions?: string[]
  subtitles?: string[]
}

export async function createSubscription(sub: NewSubscription): Promise<SubscriptionDetail> {
  const resp = await fetch('/api/subscriptions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sub),
  })
  return await resp.json()
}
