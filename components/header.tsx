'use client'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Dropdown, Space, Input, Affix } from 'antd'
import { AudioOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'
const Header = ({ items }: { items: MenuProps['items'] }) => {
  const { Search } = Input
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff'
      }}
    />
  )
  const list = [
    {
      title: '全部'
    },
    {
      title: '前端'
    },
    {
      title: '后端'
    },
    {
      title: '运维'
    },
    {
      title: '随记'
    }
  ]
  const router = useRouter()

  const [current, setCurrent] = useState('mail')
  const onClick: MenuProps['onClick'] = (e) => {
    router.push(e.key)
    setCurrent(e.key)
  }
  const onSearch = (value: any, _e: any, info: any) => console.log(info?.source, value)

  const [top, setTop] = useState<number>(0)
  return (
    <>
      <div className={'h-16  flex items-center px-10 justify-between'} style={{ borderBottom: '1px solid rgba(5, 5, 5, 0.06)' }}>
        <div className={'w-10'}>logo</div>
        <Menu
          className={'h-16  leading-[64px] '}
          style={{ border: 'none' }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div>
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
        <div>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>Hover me</Space>
              <DownOutlined></DownOutlined>
            </a>
          </Dropdown>
        </div>
      </div>
      <Affix offsetTop={top}>
        <div className={'h-10  flex gap-3 items-center pl-14 sticky'} style={{ borderBottom: '1px solid rgba(5, 5, 5, 0.06)' }}>
          {list.map((item) => (
            <div key={item.title} className={'cursor-pointer'}>
              {item.title}
            </div>
          ))}
        </div>
      </Affix>
    </>
  )
}

export default Header
