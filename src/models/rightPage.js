// import { getRightPageData } from '../services/index';
import rightPageData from '../db/rightPageData'
export default {
  // 命名空间 (必填)
  namespace: 'rightPage',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // 参数可以直接简写成{pathname}
        if (location.pathname === '/') {
          dispatch({ type: 'getRightPageData' });
        }
      });
    },
  },

  // 异步请求
  effects: {
    *getRightPageData({ payload }, { call, put }) {
      // const data = yield call(getRightPageData);
      const data = rightPageData
      console.log(rightPageData, 'rightPageData')
      if (data) {
        yield put({
          type: 'setData',
          payload: data,
        });
      } else {
        console.log(`获取右侧数据数据失败`);
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
