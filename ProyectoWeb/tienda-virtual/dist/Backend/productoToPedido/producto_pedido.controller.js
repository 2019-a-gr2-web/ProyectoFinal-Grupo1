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
const producto_pedido_service_1 = require("./producto_pedido.service");
let DetalleController = class DetalleController {
    constructor(_detalleService) {
        this._detalleService = _detalleService;
    }
    getAllProducts(res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('vistas_factura/gestion_factura');
        });
    }
    crearDetalle() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    borrardetalle(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const buscarDetalle = yield this._detalleService.buscarTodo({ idDetalle: req.params.idDetalle });
            const productsList = yield this._detalleService.eliminar(buscarDetalle);
            res.redirect('/tiendavirtual/pedido/vercarrito');
        });
    }
};
__decorate([
    common_1.Get('/factura'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DetalleController.prototype, "getAllProducts", null);
__decorate([
    common_1.Post('/crear'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DetalleController.prototype, "crearDetalle", null);
__decorate([
    common_1.Get('borrardetalle/:idDetalle'),
    __param(0, common_1.Res()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DetalleController.prototype, "borrardetalle", null);
DetalleController = __decorate([
    common_1.Controller('tiendavirtual/detalle'),
    __metadata("design:paramtypes", [producto_pedido_service_1.DetalleService])
], DetalleController);
exports.DetalleController = DetalleController;
//# sourceMappingURL=producto_pedido.controller.js.map