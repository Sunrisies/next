'use client'
import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import './footer.module.scss'
// import { GITHUB_REPO } from '@/constant';

dayjs.extend(duration)

const FooterWrap = () => {
  const [runningTime, setRunningTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      const startDate = dayjs('2019-09-01 00:00:00')
      const nowDate = dayjs()
      const res = dayjs.duration(+nowDate - +startDate).format('Y年M个月D天HH小时mm分ss秒')
      setRunningTime(+res)
    }, 1000)

    return () => clearInterval(interval) //清除定时器
  }, []) // 注意，由于我们不需要在组件卸载时清除定时器，所以我们只在依赖数组中放入空数组。

  const jumpToUrl = () => {
    // window.open(GITHUB_REPO)
  }

  return (
    <div className='footer-wrap'>
      <p>
        博客已运行 {runningTime ? runningTime : '正在加载...'} <span className='ani'>(='◡'=)☆</span>
      </p>
      <p className='fixed-powered'>
        <span className='txt'>Powered by</span>{' '}
        <span className='author' onClick={jumpToUrl}>
          galaxy-s10
        </span>
      </p>
      <a href='http://beian.miit.gov.cn' target='__blank' className='beianhao'>
        粤ICP备19114467号-2
      </a>
    </div>
  )
}

export default FooterWrap
