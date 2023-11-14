import Loadable from 'react-loadable'
export default function withLoadable(comp: any) {
  return Loadable({
    //懒加载组件页面
    loader: comp,
    loading: () => null
  })
}
