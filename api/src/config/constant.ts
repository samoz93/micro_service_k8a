export const config = {
  auth: {
    salt: process.env.SALT_ROUNDS || 10,
    jwtSecret: process.env.JWT_SECRET || 'SAMOZ@TECH',
  },
  db: {
    userName: process.env.DB_USER_NAME || 'root',
    password: process.env.DB_PASSWORD || 'example',
  },
};
