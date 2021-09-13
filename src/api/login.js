import request from '@/utils/request';
const requst = {
    // //get样例
    // getCommandDone(params) {
    //     return request({
    //         url: `/shop-admin/user/test`,
    //         params,
    //         method: 'get',
    //     })
    // },
    //     //播放视频
    // playRadio(data){
    //     return request({
    //         url: '/test',
    //         method: 'post',
    //         data
    //     })
    // }
    // 登录
    Login(params) {
        return request({
            url: `/wechat/info`,
            params,
            method: 'get',
        })
    },
}
export default requst