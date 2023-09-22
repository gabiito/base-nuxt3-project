export default defineEventHandler((event) => {
  const token = getCookie(event, 'token')

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
      message: 'Unauthorized',
    })
  }

  return {
    success: true,
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@mail.com',
      },
    },
  }
})
