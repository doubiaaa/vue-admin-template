import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
  // 分页查询
  pageList(current, limit, searchObj) {
    return request({
      url: `${api_name}/findQueryPage/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 删除讲师
  removeTeacherId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
  // 添加讲师
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/saveTeacher`,
      method: 'post',
      data: teacher
    })
  },
  // 删除讲师
  getTeacherById(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: 'get'
    })
  },
  // 修改讲师
  updateTeacher(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: 'post',
      data: teacher
    })
  },
  batchRemove(idList) {
    return request({
      url: `${api_name}/removeBarch`,
      method: `delete`,
      data: idList
    })
  }
}

