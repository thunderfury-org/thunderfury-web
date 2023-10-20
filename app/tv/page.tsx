'use client'

import { TvDetail, listAllTvs } from '@/lib/api/tv'
import { useState } from 'react'

export default function Tv() {
  const [allTvs, setAllTvs] = useState<TvDetail[]>([])

  listAllTvs().then(setAllTvs)

  return (
    <div>
      {allTvs.map((tv) => (
        <div key={tv.id}>
          <div>
            <img src={'/images/m/w500' + tv.poster_path} width={180} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}
