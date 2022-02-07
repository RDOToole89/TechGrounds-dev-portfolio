"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientTwo = void 0;
const typeorm_1 = require("typeorm");
const Person_1 = require("./utils/Person");
let ClientTwo = class ClientTwo extends Person_1.Person {
    constructor() {
        super(...arguments);
        this.created_at = new Date();
        this.updated_at = new Date();
    }
};
__decorate([
    (0, typeorm_1.Column)({
        default: true,
        name: 'active', // provides a different name in the actual database
    }),
    __metadata("design:type", Boolean)
], ClientTwo.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json', nullable: true }) // nullable true makes data optional
    ,
    __metadata("design:type", Object)
], ClientTwo.prototype, "additional_info", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', default: [] }),
    __metadata("design:type", Array)
], ClientTwo.prototype, "family_members", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClientTwo.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClientTwo.prototype, "updated_at", void 0);
ClientTwo = __decorate([
    (0, typeorm_1.Entity)('client_two')
], ClientTwo);
exports.ClientTwo = ClientTwo;
