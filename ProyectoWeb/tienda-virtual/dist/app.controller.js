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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    loginVista(res, mensaje) {
        res.render('vistas_login/login', {
            mensaje: mensaje,
        });
    }
    helloWorld() {
        return 'Hello world';
    }
    homeVista(res) {
        res.redirect('/tiendavirtual/producto/home?tipo=All');
    }
    protegida(session, res) {
        console.log("Portegida", session);
        if (session.username) {
            res.redirect('/tiendavirtual/producto/home?tipo=All');
        }
        else {
            res.redirect('/tiendavirtual/login');
        }
    }
    logout(res, session) {
        session.idUsuario = undefined;
        session.username = undefined;
        session.nombre = undefined;
        session.apellido = undefined;
        session.direccion = undefined;
        session.identificacion = undefined;
        session.destroy();
        res.redirect('/tiendavirtual/login');
    }
};
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('mensaje')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "loginVista", null);
__decorate([
    common_1.Get('/hello-world'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "helloWorld", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "homeVista", null);
__decorate([
    common_1.Get('protegida'),
    __param(0, common_1.Session()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "protegida", null);
__decorate([
    common_1.Get('logout'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller('tiendavirtual'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map