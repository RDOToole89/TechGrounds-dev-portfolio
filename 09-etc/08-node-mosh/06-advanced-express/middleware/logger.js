export const logger = (req, res, next) => {
  console.log('Loggin...');

  next();
};
