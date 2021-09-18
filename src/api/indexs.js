import request from '@/utils/request';
const requst = {
    //播放视频
    getAds(data){
        return request({
            url: '/ads/list',
            method: 'get',
            data
        })
    }
}
export default requst