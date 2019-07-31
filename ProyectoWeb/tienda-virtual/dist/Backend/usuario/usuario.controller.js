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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("./usuario.service");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    getHello() {
        return "Hola Producto";
    }
    validarCredenciales(usuario, res, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEncontrado = yield this._usuarioService.getUserById({ username: usuario.username });
            console.log(usuarioEncontrado);
            if (usuarioEncontrado) {
                if (usuario.password === usuarioEncontrado.password) {
                    session.idUsuario = usuarioEncontrado.idUsuario,
                        session.username = usuarioEncontrado.username;
                    session.nombre = usuarioEncontrado.nombre;
                    session.apellido = usuarioEncontrado.apellido;
                    session.direccion = usuarioEncontrado.direccion;
                    session.identificacion = usuarioEncontrado.identificacion;
                    res.redirect('/tiendavirtual/protegida');
                }
                else {
                    res.redirect('/tiendavirtual/login?mensaje=Contraseña Incorrecta');
                }
            }
            else {
                res.redirect('/tiendavirtual/login?mensaje=El Usuario No existe');
            }
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "getHello", null);
__decorate([
    common_1.Post('validar'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __param(2, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "validarCredenciales", null);
UsuarioController = __decorate([
    common_1.Controller('/tiendavirtual/usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map