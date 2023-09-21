import { MediaInfo, searchTv } from '@/lib/api/provider'
import { Select, SelectProps } from 'antd'
import { useState } from 'react'

let timeout: ReturnType<typeof setTimeout> | null
let currentValue: string

const fetch = (value: string, callback: Function) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  const fake = () => {
    searchTv(value).then((data: MediaInfo[]) => {
      if (currentValue === value) {
        callback(
          data.map((i: MediaInfo) => ({
            value: i.tmdb_id,
            label: `${i.name} (${i.year})`,
          }))
        )
      }
    })
  }
  if (value) {
    timeout = setTimeout(fake, 300)
  } else {
    callback([])
  }
}

export default function TmdbSearchSelect({ onSelect }: { onSelect: SelectProps['onSelect'] }) {
  const [data, setData] = useState<SelectProps['options']>([])

  const handleSearch = (newValue: string) => {
    fetch(newValue, setData)
  }

  return (
    <Select
      showSearch
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onSelect={onSelect}
      notFoundContent={null}
      options={data}
    />
  )
}
