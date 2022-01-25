export const auth = (req, res, next) => {
  console.log('Authenticating...');

  next();
};
