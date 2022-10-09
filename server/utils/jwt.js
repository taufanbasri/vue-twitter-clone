import jwt from 'jsonwebtoken'

const generateAccessToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: '10m'
  })
}

const generateRefreshToken = (user) => {
  const config = useRuntimeConfig()

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: '4'
  })
}

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user)

  return {
    accessToken: accessToken,
    refreshToken: refreshToken
  }
}

export const sendRefreshToken = (event, token) => {
  setCookie(event.res, 'refresh_token', token, {
    httpOnly: true,
    sameSite: true
  })
}