## 创建项目

`create-react-app project-name --template typescript`

## 项目配置

`npm i @craco/craco@alpha -D `

-   配置别名@需要在craco.config.js和tsconfig.json两个文件中配置

```json
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```

craco.config.js

```
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
```

修改package.json

```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

## 项目规范

-   `npm i prettier -D`

.prettierrc文件中

```
{
    "useTabs": false,
    "tabWidth": 4,
    "printWidth": 120,
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false
}

```

package.json中

```
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        "eject": "react-scripts eject",
        "prettier": "prettier --write ."
    },
```

.prettierignore 忽略文件配置

```
/build/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*

```

配置好prettier之后，执行命令 `npm run prettier` 就可以格式化所有代码，不需要ctrl + s 保存进行格式化了

-   eslint配置
-   安装 `npm i eslint -D `
-   `npx eslint --init`

> prettier和eslint保持一致
>
> `npm i eslint-plugin-prettier eslint-config-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser -D`

.eslintrc.js文件中

```
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
```

## 新建项目目录结构

## 样式重置

-   `npm i normalize.css`

## less配置

-   `npm i craco-less@2.1.0-alpha.0`

craco.config.js中

```
const path = require('path')
const CracoLessPlugin = require('craco-less')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    plugins: [{ plugin: CracoLessPlugin }],
    webpack: {
        alias: {
            '@': resolve('src')
        }
    }
}

```

## 配置路由

-   `npm i react-router-dom`

配置单独路由文件：

```
import { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'

const routes: RouteObject[] = [
    {
        path: '/discover',
        element: <Discover />
    }
]

export default routes

```

使用HashRouter

```
    <HashRouter>
        <App />
    </HashRouter>
```

useRoutes将单独配置的routes使用

```
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
    return <div className="App">{useRoutes(routes)}</div>
}

export default App

```

## props类型约束

-   直接对props进行类型约束

```
interface IProps {
    name: string
    age: number
    height?: number
}

const Download = (props: IProps) => {
    return <div>Download- props.name{props.name}</div>
}

export default Download

```

```

import Download from '../download'

const Discover = () => {
    return (
        <>
            <div>Discover</div>
            <Download name="zm" age={21} />
        </>
    )
}

export default Discover

```

-   React.FC, children,ReactNode

```
import Download from '../download'

const Discover = () => {
    return (
        <>
            <div>Discover</div>
            <Download name="zm" age={21}>
                    <div>I am Children</div>
                    <div>me too</div>
            </Download>
        </>
    )
}

export default Discover

```

```
import React,{memo} from 'react'
import type { FC,ReactNode } from 'react'
interface IProps {
    children?: ReactNode
    name: string
    age: number
    height?: number
}

const Download: FC<IProps> = (props) => {
    return (
        <div>
            <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>{props.children}</div>
        </div>
    )
}
export default memo(Download)

```

## 配置用户代码片段

设置 -> 用户代码片段 - > typescriptreact.json文件中

```
"react typescript": {
  "prefix": "tsreact",
  "body": [
    "import React, { memo } from 'react'",
    "import type { FC, ReactNode } from 'react'",
    "",
    "interface IProps {",
    "    children?: ReactNode",
    "}",
    "",
    "const ${1:Home}: FC<IProps> = () => {",
    "    return <div>${1:Home}</div>",
    "}",
    "",
    "export default memo(${1:Home})",
    ""
  ],
  "description": "react typescript"
}
```

## 使用模板生成页面代码结构，并配置其它路由

```
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />
    },
    {
        path: '/discover',
        element: <Discover />
    },
    {
        path: '/mine',
        element: <Mine />
    },
    {
        path: '/focus',
        element: <Focus />
    },
    {
        path: '/download',
        element: <Download />
    }
]

export default routes

```

## 路由懒加载

```
import React, { lazy } from 'react'
// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))
```

懒加载的组件可能没加载完成，需要设置Suspense

```
import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

function App() {
    return (
        <div className="App">
            <div className="nav">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
            <Suspense fallback="loading...">
                {/* <Suspense fallback={组件}> */}
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
}

export default App
```

## discover子页面路由配置

```
    {
        path: '/discover',
        element: <Discover />,
        children: [
            {
                path: '/discover',
		// 重定向
                element: <Navigate to="/discover/recommend" />
            },
            {
                path: '/discover/recommend',
                element: <Recommend />
            },
            {
                path: '/discover/ranking',
                element: <Ranking />
            },
            {
                path: '/discover/songs',
                element: <Songs />
            },
            {
                path: '/discover/djradio',
                element: <Djradio />
            },
            {
                path: '/discover/artist',
                element: <Artist />
            },
            {
                path: '/discover/album',
                element: <Album />
            }
        ]
    },
```

```
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
    children?: ReactNode
}

const Discover: FC<IProps> = () => {
    return (
        <div>
            <div>
                <Link to="/discover/recommend">推荐</Link>
                <Link to="/discover/ranking">排行榜</Link>
                <Link to="/discover/songs">歌单</Link>
                <Link to="/discover/djradio">主播电台</Link>
                <Link to="/discover/artist">歌手</Link>
                <Link to="/discover/album">新碟上架</Link>
            </div>
            {/* 设置了就没有闪动 */}
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </div>
    )
}

export default memo(Discover)

```

## redux集成

-   `npm i @reduxjs/toolkit react-redux`

## state类型配置

-   官网 `https://react-redux.js.org/using-react-redux/usage-with-typescript`
-   创建store,定义state类型，useSelector, useDispatch的ts类型

```js
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch, shallowEqual } from 'react-redux'
import countReducer from './modules/counter'

const store = configureStore({
    reducer: {
        counter: countReducer
    }
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual

export default store

```

-   在index.tsx中给App提供store

```js
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import './assets/css/index.less'

import App from '@/App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
)

```

-   创建对应模块

```js
import { createSlice } from '@reduxjs/toolkit'

const countSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 999,
        msg: 'zm'
    },
    reducers: {
        changeMsgAction(state, { payload }) {
            state.msg = payload
        }
    }
})

export const { changeMsgAction } = countSlice.actions
export default countSlice.reducer
```

-   在组件中使用state,就有了很好的类型提示

```js
import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { changeMsgAction } from './store/modules/counter'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'

function App() {
    const { count, msg } = useAppSelector(
        (state) => ({
            count: state.counter.count,
            msg: state.counter.msg
        }),
        shallowEqualApp
    )
    const dispatch = useAppDispatch()
    function handleChangeMsg() {
        dispatch(changeMsgAction('1899'))
    }
    return (
        <div className="App">
            <div>
                count:{count}-msg:{msg}
                <button onClick={handleChangeMsg}>changeMsg</button>
            </div>
            <div className="nav">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
            <Suspense fallback="loading...">
                {/* <Suspense fallback={组件}> */}
                <div className="main">{useRoutes(routes)}</div>
            </Suspense>
        </div>
    )
}

export default App
```

## 封装网络请求-axios,useState()定义数据类型

-   安装依赖 `npm i axios`
-   封装网络请求
-   useState()定义数据类型

    -   工具 json to typescript，地址 `https://transform.tools/json-to-typescript`
    -   工具2：`https://tooltt.com/json2typescript/`

-   测试网络请求接口

```js
import zmRequest from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

interface IBannerData {
    imageUrl: string
    targetId: number
    targetType: number
    titleColor: string
    typeTitle: string
    url?: any
    exclusive: boolean
    encodeId: string
    scm: string
    bannerBizType: string
}

const Recommend: FC<IProps> = () => {
    const [banners, setBanners] = useState<IBannerData[]>([])
    // 测试网络请求
    useEffect(() => {
        zmRequest
            .get({
                url: '/banner'
            })
            .then((res) => {
                setBanners(res.banners)
            })
    }, [])
    return (
        <div>
            <div>Recommend Page</div>
            {banners.map((item, index) => {
                return <div key={index}>{item.imageUrl}</div>
            })}
        </div>
    )
}

export default memo(Recommend)

```

## 生产环境和开发环境区分

```js
// 1.手动切换
export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.prod:9002'
export const TIME_OUT = 10000

// 2.依赖当前环境：development/production
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//     BASE_URL = 'http://codercba.dev:9002'
// } else {
//     BASE_URL = 'http://codercba.prod:9002'
// }

// export { BASE_URL }

// 3.从定义的环境变量的配置文件中，加载变量
// console.log(process.env.REACT_APP_BASE_URL)
```

-   .env.development配置文件
    `REACT_APP_BASE_URL=http://codercba.dev.9002`
-   .env.production配置文件

    `REACT_APP_BASE_URL=http://codercba.prod:9002`

## ts类型知识补充

-   类组件与ts

```js
import { PureComponent, ReactNode } from 'react'

interface IProps {
    msg: string
    count?: number
}

interface IState {
    name: string
    age: number
}

export class Demo02 extends PureComponent<IProps, IState> {
    state = {
        name: 'zm',
        age: 21
    }
    render(): ReactNode {
        return (
            <div>
                {this.state.name}-{this.state.age}
                props:{this.props.msg}
            </div>
        )
    }
}

```

## CSS的编写方案-styled-components

-   安装依赖 `npm i styled-components -D`
-   同时安装类型声明 `npm i @types/styled-components -D`

## styled-components混入，theme

```js
const theme = {
    color: {
        primary: '#c20c0c',
        secondary: ''
    },
    size: {},
    mixin: {
        wrapv1: `
            width:1100px;
            margin:0 auto;
        `
    }
}

export default theme
```

```js
import { ThemeProvider } from 'styled-components'
root.render(
    <ThemeProvider theme={theme}>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </ThemeProvider>
)
```

-   组件样式中使用

```js
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    .content {
        height: 100px;

        ${(props) => props.theme.mixin.wrapv1}
    }
`
```

方式2：添加类(css -> common.less)

```
.wrap-v1 {
    width: 1100px;
    margin: 0 auto;
}

```

组件中使用：

```
            <div className="content wrap-v1">
                <Link to="/discover">发现音乐</Link>
                <Link to="/mine">我的音乐</Link>
                <Link to="/focus">关注</Link>
                <Link to="/download">下载客户端</Link>
            </div>
```

## app-header样式编写和antd集成

-   `npm i antd`
-   最新的antd（"antd":"^5.7.3"），安装好后，直接在组件中使用即可
-   icon图标需单独安装 `npm i --save @ant-design/icons`

## 发现音乐页面nav-bar样式，代码结构调整

## useRef()类型写法

```js
import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import download from '@/assets/img/download.png'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    const { banners } = useAppSelector(
        (state) => ({
            banners: state.recommend.banners
        }),
        shallowEqual
    )

    function handlePrevClick() {
        bannerRef.current?.prev()
    }
    function handleNextClick() {
        bannerRef.current?.next()
    }
    return (
        <BannerWrapper className="wrap-v2">
            <BannerLeft>
                <div className="swiper">
                    <Carousel autoplay effect="fade" ref={bannerRef}>
                        {banners.map((item) => {
                            return (
                                <div className="item" key={item.imageUrl}>
                                    <img src={item.imageUrl} alt="" />
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </BannerLeft>
            <BannerRight>
                <img src={download} alt="download" />
            </BannerRight>
            <BannerControl>
                <div className="arrow prev" onClick={() => handlePrevClick()}>
                    <LeftOutlined style={{ fontSize: '32px' }} />
                </div>
                <div className="arrow next" onClick={() => handleNextClick()}>
                    <RightOutlined style={{ fontSize: '32px' }} />
                </div>
            </BannerControl>
        </BannerWrapper>
    )
}

export default memo(TopBanner)

```

## 轮播图组件

## 动态样式

-   `npm i classnames`

```
                        <div className="carousel-indicators">
                            {banners.map((item, index) => {
                                return (
                                    <span
                                        className={classNames('dot', { active: index === currentIndex })}
                                        key={item.imageUrl}
                                    ></span>
                                )
                            })}
                        </div>
```

## recom-header热门推荐头部组件封装

## song-menu-item组件封装

## 新碟上架,及new-album-item封装

```js
<div className="banner">
    <Carousel ref={bannerRef} autoplay dots={false} speed={1500}>
        {/* 双重遍历， albums.slice(item * 5, (item + 1) * 5) 每页展示5条  */}
        {[0, 1].map((item) => {
            return (
                <div className="album-list" key={item}>
                    {albums.slice(item * 5, (item + 1) * 5).map((album) => {
                        return <div key={album.id}>{album.name}</div>
                    })}
                </div>
            )
        })}
    </Carousel>
</div>
```

## 榜单

-   引入图片方式

```css
import styled from 'styled-components'

export const RankingWrapper = styled.div`
    margin-top: 43px;
    .content {
        margin-top: 22px;
        height: 472px;
        background: url(${require('@/assets/img/recommend-top-bg.png')});
    }
`

```

## Promise.all保证顺序

```js
const rankingIds = [19723756, 3779629, 2884035]
export const fetchPlaylistDetailAction = createAsyncThunk('rankdata', (arg, { dispatch }) => {
    // 方式一
    // rankingIds.forEach((id) => {
    //     getPlaylistDetail(id).then((res) => {
    //         switch (id) {
    //             case 19723756:
    //                 console.log('飙升榜', res.playlist)
    //                 dispatch(changeUpRankingAction(res.playlist))
    //                 break
    //             case 3779629:
    //                 console.log('新歌榜', res.playlist)
    //                 dispatch(changeNewRankingAction(res.playlist))
    //                 break
    //             case 2884035:
    //                 console.log('原创榜', res.playlist)
    //                 dispatch(changeOriginRankingAction(res.playlist))
    //                 break
    //         }
    //     })
    // })
    // 方式二
    /**
     * 将三个结果都拿到，统一放到一个数组中管理
     * 1.获取到所有的结果后，进行dispatch操作
     * 2.获取到的结果一定是有正确顺序的
     */
    const promise: Promise<any>[] = []
    rankingIds.forEach((id) => {
        promise.push(getPlaylistDetail(id))
    })
    Promise.all(promise).then((res) => {
        // res =>  [{},{},{}]
        // map过滤数组
        const playlists = res.map((item) => item.playlist)
        dispatch(changeAllRankingDataActions(playlists))
    })
})
```

## 首页样式调整

## 音乐播放

-   views -> player
