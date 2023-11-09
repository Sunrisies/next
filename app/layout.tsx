import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '../lib/AntdRegistry'
import React from 'react'
import { Button, ConfigProvider, Menu } from 'antd'
import MyHeader from '../components/header'
async function getData() {
  const res = await fetch('http://chaoyang1024.top:3000/api/user/nav', {
    headers: {
      Authorization:
        '	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxfSwiaWF0IjoxNjk5NTA0Mzk0LCJleHAiOjE3MDAxMDkxOTR9.joCPyWUZdEmi8SHxtzovrbiHnhhB8qkUzltXiKlvecI'
    }
  })
  const data = await res.json()
  return data
}
import theme from '../theme/themeConfig'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: '朝阳 个人博客',
//   description: '朝阳的个人博客'
// }

export default async function RootLayout(props: { children: React.ReactNode; header: React.ReactNode }) {
  const { data: navList } = await getData()
  // const router = useRouter()
  // // console.log(data,'====')
  // const items: MenuProps['items'] = [
  //   {
  //     label: '首页',
  //     key: '/'
  //   },
  //   {
  //     label: '归档',
  //     key: '/history'
  //   },
  //   {
  //     label: '标签',
  //     key: '/tags'
  //   },
  //   {
  //     label: '作品',
  //     key: '/works'
  //   },
  //   {
  //     label: '友链',
  //     key: '/link'
  //   },
  //   {
  //     label: '留言',
  //     key: '/msg'
  //   },
  //   {
  //     label: '互动',
  //     key: '/interaction'
  //   },
  //   {
  //     label: '关于',
  //     key: '/about'
  //   }
  // ]
  // const [current, setCurrent] = useState('mail')
  // // let current = ''
  // const onClick: MenuProps['onClick'] = (e) => {
  //   router.push(e.key)
  //   // current = e.key
  //   setCurrent(e.key)
  //   // console.log(current, setCurrent)
  // }
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider theme={theme}>
          <MyHeader items={navList}></MyHeader>
          <StyledComponentsRegistry>{props.children}</StyledComponentsRegistry>

          <Button type="primary">Button</Button>
        </ConfigProvider>
      </body>
    </html>
  )
}
