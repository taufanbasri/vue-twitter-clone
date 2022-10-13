import { decodeAccessToken } from "../utils/jwt"
import { sendError } from "h3";
import { getUserById } from "../db/users";
import UrlPattern from "url-pattern";

export default defineEventHandler(async (event) => {
  const endpoints = [
    '/api/auth/user',
    '/api/user/tweets',
    '/api/tweets',
  ]

  const isHandleByThisMiddleware = endpoints.some(endpoint => {
    const pattern = new UrlPattern(endpoint)

    return pattern.match(event.req.url)
  })

  if (!isHandleByThisMiddleware) {
    return
  }

  const token = event.req.headers['authorization']?.split(' ')[1]

  const decoded = decodeAccessToken(token)

  if (!decoded) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    }))
  }


  try {
    console.log('try');
    const userId = decoded.userId

    const user = await getUserById(userId)

    event.context.auth = { user }
  } catch (error) {
    return
  }

})