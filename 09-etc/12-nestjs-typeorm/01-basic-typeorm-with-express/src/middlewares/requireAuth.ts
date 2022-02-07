import { Request, Response, NextFunction } from 'express';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session && req.session.loggedIn) {
    return next();
  }

  res.status(404);
  res.send('Not permitted');
};
