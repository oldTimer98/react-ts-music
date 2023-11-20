import routes from '@/router/index'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import AppHeader from '@/components/app-header'
import { ViewWrapper } from '@/style'
import AppFooter from '@/components/app-footer'
import { FloatButton } from 'antd'
function App() {
  return (
    <ViewWrapper>
      <AppHeader />
      <Suspense fallback="">
        {/* <Suspense fallback={组件}> */}
        {useRoutes(routes)}
      </Suspense>
      <AppFooter />
      <FloatButton.BackTop shape="square" />
    </ViewWrapper>
  )
}

export default App
