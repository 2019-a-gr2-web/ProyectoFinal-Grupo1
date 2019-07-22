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
const producto_service_1 = require("./producto.service");
let ProductoController = class ProductoController {
    constructor(_productoService) {
        this._productoService = _productoService;
    }
    getHello() {
        return "Hola Producto";
    }
    loginVista(res) {
        res.render('vistas_login/login');
    }
    helloWorld() {
        return 'Hello world';
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductoController.prototype, "getHello", null);
__decorate([
    common_1.Get('/login'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductoController.prototype, "loginVista", null);
__decorate([
    common_1.Get('/hello-world'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ProductoController.prototype, "helloWorld", null);
ProductoController = __decorate([
    common_1.Controller('tiendavirtual/producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.contoller.js.map