'use client'

import { useState } from 'react'
import { TreeSelect, TreeSelectProps } from 'antd'
import type { DefaultOptionType } from 'antd/es/select'
import { listAlistFiles } from '@/lib/api/provider'

export default function AlistPathSelect({ onSelect }: { onSelect: TreeSelectProps['onSelect'] }) {
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([])

  const loadFiles = async (path: string) => {
    const files = await listAlistFiles(path)
    setTreeData(
      treeData.concat(
        files.map((file) => ({ id: file.path, pId: path, value: file.path, title: file.name, isLeaf: !file.is_dir }))
      )
    )
  }

  const onLoadData: TreeSelectProps['loadData'] = async ({ id }) => {
    await loadFiles(id)
  }

  const onDropdownVisibleChange: TreeSelectProps['onDropdownVisibleChange'] = async (open) => {
    if (!open || treeData.length > 0) return

    await loadFiles('')
  }

  return (
    <TreeSelect
      style={{ width: '100%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="选择目录"
      onSelect={onSelect}
      loadData={onLoadData}
      onDropdownVisibleChange={onDropdownVisibleChange}
      treeDataSimpleMode
      treeData={treeData}
    />
  )
}
