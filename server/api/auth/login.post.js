import { compare } from "bcrypt"
import { getUserByUsername } from "~~/server/db/users"

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const { username, password } = body

  if (!username || !password) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Invalid Params'
    }))
  }

  // Is the user registered
  const user = await getUserByUsername(username)

  if (!user) {
    return sendError(event, createError({
      statusCode: 400,
      statusMessage: 'Username or password is invalid'
    }))
  }

  // Compare passwords
  const doesThePasswordMatch = await compare(password, user.password)

  return {
    user: user,
    doesThePasswordMatch
  }
})