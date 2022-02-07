"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const requireAuth = (req, res, next) => {
    if (req.session && req.session.loggedIn) {
        return next();
    }
    res.status(404);
    res.send('Not permitted');
};
exports.requireAuth = requireAuth;
