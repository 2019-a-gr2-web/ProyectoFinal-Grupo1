import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly _usuarioService;
    constructor(_usuarioService: UsuarioService);
    getHello(): string;
    validarCredenciales(usuario: any, res: any, session: any): Promise<void>;
}
