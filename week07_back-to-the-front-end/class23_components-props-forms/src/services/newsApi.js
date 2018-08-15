const API_KEY = '9e217382d31d48af8c3bc200cdc6ddbd';
const API_QUERY = `apiKey=${API_KEY}`;
const BASE_URL = 'https://newsapi.org/v2';
const EVERYTHING_URL = `${BASE_URL}/everything?${API_QUERY}`;
const SOURCES_URL = `${BASE_URL}/sources?${API_QUERY}`;
const SORT_QUERY = 'sortBy=publishedAt';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ topic, sources = ['bad'] }, { page = 1, pageSize = 20 }) {
  const search = `&q=${topic}&sources=${sources.join()}`;
  const paging = `&page=${page}&pageSize=${pageSize}`;
  const sort = `&${SORT_QUERY}`;

  return get(`${EVERYTHING_URL}${search}${paging}${sort}`);
}

export function getSources() {
  return get(SOURCES_URL).then(r => r.sources);
}