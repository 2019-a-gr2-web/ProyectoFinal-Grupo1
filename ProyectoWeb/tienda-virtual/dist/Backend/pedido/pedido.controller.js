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
const pedido_service_1 = require("./pedido.service");
const producto_pedido_service_1 = require("../productoToPedido/producto_pedido.service");
const producto_service_1 = require("../producto/producto.service");
let PedidoController = class PedidoController {
    constructor(_pedidoService, _productoService, _detalleService) {
        this._pedidoService = _pedidoService;
        this._productoService = _productoService;
        this._detalleService = _detalleService;
    }
    getHello() {
        return "Hola Producto";
    }
    crearPedido(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido = {
                direccionCliente: "Barrio San Carlos",
                identificacion: "1723882039",
            };
            const response = yield this._pedidoService.crearPedido(pedido);
            console.log(response.idPedido);
            const producto = yield this._productoService.getProductById(req.params.idProducto);
            console.log(producto);
            console.log("Producto ID", req.params.idProducto);
            const detalle = {
                cantidadProducto: 2,
                precioDetalle: producto.PVP * 2,
                producto: producto.idProducto,
                pedido: response.idPedido,
            };
            const responseDetalle = yield this._detalleService.crear(detalle);
            console.log(responseDetalle);
            const respon = yield this._detalleService.buscarTodo({ idDetalle: responseDetalle.idDetalle });
            console.log("Detalles", respon);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PedidoController.prototype, "getHello", null);
__decorate([
    common_1.Get('/crear/:idProducto'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "crearPedido", null);
PedidoController = __decorate([
    common_1.Controller('tiendavirtual/pedido'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService,
        producto_service_1.ProductoService,
        producto_pedido_service_1.DetalleService])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map