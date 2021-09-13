import request from '@/utils/request';
const requst = {
    //播放视频
    playRadio(data){
        return request({
            url: '/ads/list',
            method: 'get',
            data
        })
    }
}
export default requst