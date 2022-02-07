"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express_1 = __importDefault(require("express"));
const loginRoutesTest_1 = require("./routes/loginRoutesTest");
const cookie_session_1 = __importDefault(require("cookie-session"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.port || 3000;
// Start POSTGRESSDB
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
const Banker_1 = require("./entities/Banker");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'typeorm',
            entities: [Client_1.Client, Banker_1.Banker, typeorm_1.Transaction],
            synchronize: true,
        });
        console.log('Connected to Postgres');
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use((0, cookie_session_1.default)({ keys: ['abcde'] }));
        app.use(express_1.default.static('public'));
        app.use((0, cors_1.default)());
        app.get('/', (req, res) => {
            res.send('Welcome');
        });
        // Routers
        app.use(loginRoutesTest_1.router);
        app.listen(PORT, () => {
            console.log(`Server listening on PORT: ${PORT}...`);
        });
    }
    catch (error) {
        console.error(error);
        throw new Error('Unable to connect to Postgres DB');
    }
});
exports.main = main;
(0, exports.main)();
