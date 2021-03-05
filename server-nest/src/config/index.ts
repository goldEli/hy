export const jwt = {
  secret: 'secretKey123',
  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12, // 12h
};
