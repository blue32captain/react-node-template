export const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  })

export const get = url =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({}),
  })
