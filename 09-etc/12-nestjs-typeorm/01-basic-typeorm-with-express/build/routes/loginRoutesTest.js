"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const requireAuth_1 = require("../middlewares/requireAuth");
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
router.post('/testlogin', (req, res) => {
    const { email, password } = req.body; // body property is added by body-parser middleware
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('You must provide a valid email or password');
    }
});
router.get('/test', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
    <div> 
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
    </div>
      `);
    }
    else {
        res.send(`
    <div> 
      <div>You are not logged in</div>
      <a href="/login">Login</a>
    </div>`);
    }
});
router.get('/testlogout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/testprotected', requireAuth_1.requireAuth, (req, res) => {
    res.send('Welcome to the protected route');
});
