import request from '@/utils/request';

export function login(data) {
  return request({
    url: '/api/user',
    method: 'post',
    data: data,
  });
}

export function signUp(data) {
  return request({
    url: '/api/register',
    method: 'post',
    data: data,
  });
}

export function getInfo(token) {
  return request({
    url: '/api/me',
    method: 'get',
  });
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post',
  });
}
