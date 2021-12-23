import request from '@/utils/request';
const requst = {
    //获取地址信息
    getCellList() {
        return request({
            url: `/user`,
            method: 'get',
        })
    },
}
export default requst