// import { getLeftPageData } from '../services/index';
import leftPageData from '../db/leftPageData'

export default {
  // 命名空间 (必填)
  namespace: 'leftPage',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // 参数可以直接简写成{pathname}
        if (location.pathname === '/') {
          dispatch({ type: 'getLeftPageData' });
        }
      });
    },
  },

  // 异步请求
  effects: {
    *getLeftPageData({ payload }, { call, put }) {
      // const data = yield call(getLeftPageData);
      const data = leftPageData
      if (data) {
        yield put({
          type: 'setData',
          payload: data,
        });
      } else {
        console.log(`获取左侧数据数据失败`);
      }
    },
  },

  // 同步操作
  reducers: {
    setData(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
