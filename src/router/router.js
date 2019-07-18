import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        //我的工资条
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        //我的工资条列表
        path: '/billList',
        component: r => require.ensure([], () => r(require('../page/home/list')), 'billList')
    }, {//宣传页面
        path: '/propagate',
        component: r => require.ensure([], () => r(require('../page/propagate')), 'propagate')
    }, {//操作视频
        path: '/showHow',
        component: r => require.ensure([], () => r(require('../page/showHow')), 'showHow')
    }, {//商务合作
        path: '/cooperate',
        component: r => require.ensure([], () => r(require('../page/cooperate')), 'cooperate')
    }, {//使用帮助
        path: '/helpCenter',
        component: r => require.ensure([], () => r(require('../page/helpCenter')), 'helpCenter')
    }]
}]