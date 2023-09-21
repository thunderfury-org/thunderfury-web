'use client'

import { Button, Checkbox, Form, Radio, Select } from 'antd'

import AlistPathSelect from '@/app/subscription/component/AlistPathSelect'
import TmdbSearchSelect from '../../component/TmdbSearchSelect'
import { createSubscription, NewSubscription } from '@/lib/api/subscription'

export default function NewTv() {
  const [form] = Form.useForm()

  const onFinish = (value: any) => {
    const sub: NewSubscription = {
      media_type: 'tv',
      tmdb_id: value.tmdb_id,
      season_number: value.season_number,
      resource_provider: value.resource_provider,
      resource_url: value.resource_url,
      resolutions: value.resolutions,
      subtitles: value.subtitles,
    }
    createSubscription(sub).then(() => {
      form.resetFields()
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <h1>订阅剧集</h1>
        <div style={{ paddingTop: 20 }}>
          <Form
            form={form}
            name="new_tv_subscription"
            colon={false}
            labelAlign="left"
            labelCol={{ span: 4 }}
            onFinish={onFinish}
            style={{ width: 500, maxWidth: 600 }}>
            <Form.Item name="tmdb_id" label="TMDB Id" rules={[{ required: true }]}>
              <TmdbSearchSelect onSelect={(v) => form.setFieldValue('tmdb_id', v)} />
            </Form.Item>
            <Form.Item name="season_number" label="第几季" rules={[{ required: true }]}>
              <Select
                options={[
                  { value: 1, label: '第 1 季' },
                  { value: 2, label: '第 2 季' },
                  { value: 3, label: '第 3 季' },
                ]}
              />
            </Form.Item>
            <Form.Item name="resource_provider" label="资源类型" rules={[{ required: true }]}>
              <Radio.Group
                options={[
                  { label: 'Alist', value: 'alist' },
                  { label: 'RSS', value: 'rss' },
                ]}
                optionType="button"
                buttonStyle="solid"
              />
            </Form.Item>
            <Form.Item name="resource_url" label="资源地址" rules={[{ required: true }]}>
              <AlistPathSelect onSelect={(v) => form.setFieldValue('resource_url', v)} />
            </Form.Item>
            <Form.Item name="resolutions" label="分辨率">
              <Checkbox.Group
                options={[
                  { value: '2160p', label: '2160p' },
                  { value: '1080p', label: '1080p' },
                  { value: '720p', label: '720p' },
                ]}
              />
            </Form.Item>
            <Form.Item name="subtitles" label="字幕">
              <Checkbox.Group
                options={[
                  { value: 'zh-CN', label: '简体中文' },
                  { value: 'zh-TW', label: '繁体中文' },
                  { value: 'jp', label: '日文' },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                订阅
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
