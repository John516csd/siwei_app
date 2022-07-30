import request from '@/api/index';

const fetchAData = (params: API.IParams) => {
  return request({
    url: '/api/prod/mock/meeting-a/list',
    params: {
      page_now: params.page_now,
      page_size: params.page_size,
    },
    method: 'GET',
  });
};

const fetchBData = (params: API.IParams) => {
  return request({
    url: '/api/prod/mock/meeting-b/list',
    params: {
      page_now: params.page_now,
      page_size: params.page_size,
    },
    method: 'GET',
  });
};

export { fetchAData, fetchBData };
