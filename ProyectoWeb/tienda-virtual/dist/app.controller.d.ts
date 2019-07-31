import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    loginVista(res: any, mensaje: string): void;
    helloWorld(): string;
    homeVista(res: any): void;
    protegida(session: any, res: any): void;
}
