import request from '@/utils/request'

const { post, get } = request

export const funcApi = {
  list: '/function/list',
  create: ({ funcName }) => `/function/${funcName}/create`,
  info: ({ funcName }) => `/function/${funcName}/info`,
  stats: ({ funcName }) => `/function/${funcName}/stats`,
  status: ({ funcName }) => `/function/${funcName}/status`,
  trigger: ({ funcName }) => `/function/${funcName}/trigger`,
  deleteFunc: ({ funcName }) => `/function/${funcName}/delete`,
  Images: ({ funcName }) => `/function/${funcName}/Images`,
  delImage: ({ funcName }) => `/function/${funcName}/delImage`
}

export function getList () {
  return get(funcApi.list)
}

export function createFunc (data) {
  return post(funcApi.create, { data })
}

export function getInfo (funcName) {
  return get(funcApi.info({ funcName }))
}

export function getStats (funcName) {
  return get(funcApi.stats({ funcName }))
}

export function getStatus (funcName) {
  return get(funcApi.status({ funcName }))
}

export function triggerFunc (funcName, data) {
  return post(funcApi.trigger({ funcName }), { data })
}

export function deleteFunc (funcName) {
  return post(funcApi.deleteFunc({ funcName }))
}

export function create (funcName, data) {
    return post(funcApi.create({ funcName }), { data })
}

export function getImages (funcName) {
  return get(funcApi.Images({ funcName }))
}

export function delImage (funcName) {
  return post(funcApi.delImage({ funcName }))
}
