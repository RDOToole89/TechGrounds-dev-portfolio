import { requireAuth } from '../middlewares/requireAuth';
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />     
      </div> 
      <button>Submit</button> 
      </form>
    </div>
  `);
});

router.post('/testlogin', (req: Request, res: Response) => {
  const { email, password } = req.body; // body property is added by body-parser middleware

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('You must provide a valid email or password');
  }
});

router.get('/test', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div> 
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
      `);
  } else {
    res.send(`
    <div> 
      <div>You are not logged in</div>
      <a href="/login">Login</a>
    </div>`);
  }
});

router.get('/testlogout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/testprotected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route');
});

export { router };
