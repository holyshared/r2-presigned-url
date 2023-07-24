const r2 = require('./r2')

const main = async () => {
  const url = await r2.presignedURL.of('2023-07-24/example.jpg')
  return url
}

main().then((url) => {
  console.info(url)
}).catch(err => {
  console.error(err)
})