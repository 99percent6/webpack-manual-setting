import { getCookie } from './cookies';
import parseUrl from 'url';

export const queryHandler = async function ({ url, method, body }) {
  if (!url || !method) {
    console.error('URL and method is required fields');
    throw new Error();
  }
  
  let data = {
    method,
    json: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  if (body) {
    Object.assign(data, { body: JSON.stringify(body) });
  }
  
  const token = getCookie('token');
  if (token && !url.includes('token')) {
    const parsedUrl = parseUrl.parse(url);
    const symbol = parsedUrl.search ? '&' : '?';
    url += `${symbol}token=${token}`;
  }

  try {
    let result = await fetch(url, data);
    const jsonResult = await result.json();
    return jsonResult;
  } catch (error) {
    console.error(error);
  }
}