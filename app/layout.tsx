import type { Metadata } from 'next'
import { ConfigProvider, theme } from 'antd'

import Content from '@/app/content'
import StyleRegistry from '@/lib/StyleRegistry'

export const metadata: Metadata = {
  title: 'Thunderfury',
  description: 'Thunderfury Web UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100vh' }}>
        <StyleRegistry>
          <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm }}>
            <Content>{children}</Content>
          </ConfigProvider>
        </StyleRegistry>
      </body>
    </html>
  )
}
