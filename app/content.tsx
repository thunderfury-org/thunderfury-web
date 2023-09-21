'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { MenuProps } from 'antd'
import { Dropdown, Button, Layout, Menu, Avatar, Space } from 'antd'
import { PlusCircleOutlined, CaretDownOutlined, UserOutlined } from '@ant-design/icons'

const menuItems: MenuProps['items'] = [
  {
    label: <Link href="/movie">电影</Link>,
    key: 'movie',
  },
  {
    label: <Link href="/tv">剧集</Link>,
    key: 'tv',
  },
  {
    label: <Link href="/discover">发现</Link>,
    key: 'discover',
  },
  {
    label: <Link href="/subscription">订阅</Link>,
    key: 'subscription',
  },
]

const createMeunItems: MenuProps['items'] = [
  {
    label: <Link href="/subscription/movie/new">订阅电影</Link>,
    key: 'movie',
  },
  {
    label: <Link href="/subscription/tv/new">订阅剧集</Link>,
    key: 'tv',
  },
]

export default function Content({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState('movie')

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key)
  }

  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Layout.Header
        style={{
          background: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <div style={{ justifyContent: 'flex-start' }}>
          <Menu mode="horizontal" onClick={onClick} selectedKeys={[current]} items={menuItems} />
        </div>
        <div style={{ justifyContent: 'flex-end' }}>
          <Space>
            <Dropdown menu={{ items: createMeunItems }} trigger={['click']} placement="bottomRight">
              <Button style={{ paddingLeft: 10, paddingRight: 10 }}>
                <PlusCircleOutlined />
                <CaretDownOutlined />
              </Button>
            </Dropdown>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Space>
        </div>
      </Layout.Header>
      <Layout.Content style={{ padding: '20px 50px', height: '100%' }}>{children}</Layout.Content>
    </Layout>
  )
}
