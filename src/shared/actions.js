import { initGlobalState } from 'qiankun'

const initialState = {
  token: '123456'
}
const actions = initGlobalState(initialState)

export default actions
