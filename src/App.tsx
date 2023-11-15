import routes from '@/router/index'
import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import AppHeader from '@/components/app-header'
import { ViewWrapper } from '@/style'
function App() {
  return (
    <ViewWrapper>
      <div className="App">
        <AppHeader />
        <Suspense fallback="">
          {/* <Suspense fallback={组件}> */}
          {useRoutes(routes)}
        </Suspense>
      </div>
    </ViewWrapper>
  )
}

export default App
