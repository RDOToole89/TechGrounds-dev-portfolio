"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const cookie_session_1 = __importDefault(require("cookie-session"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.port || 3000;
// MiddleWares => code that listens to Request and Response object and
// does some processing on it. The the call completes it calls next()
// The problem with MiddleWare and TypeScript is, is that it adds or
// removes properties from the Res / Res objects. Which is counter-productive
// to what TypeScript is made for. To guarantee structural integrity of data
// with types.
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ['abcde'] }));
app.use(express_1.default.static('public'));
app.use((0, cors_1.default)());
// app.get('/', (req: Request, res: Response) => {
//   res.send('Welcome');
// });
// Routers
app.use(loginRoutes_1.router);
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}...`);
});
