export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.email) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password',
    })
  }

  setResponseStatus(201)
  return {
    success: true,
    data: {
      token: generateRandomToken(body.email),
    },
  }
})

function generateRandomToken(email) {
  let res = ''

  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      res += '-'
    } else if (i === 14) {
      res += '4'
    } else if (i === 19) {
      res += email[(Math.random() * email.length) | 0]
    } else {
      res += email[Math.floor(Math.random() * email.length)]
    }
  }

  return res
}
