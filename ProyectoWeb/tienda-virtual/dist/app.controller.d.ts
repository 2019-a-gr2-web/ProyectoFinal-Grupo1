import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    loginVista(res: any): void;
    helloWorld(): string;
    homeVista(res: any): void;
}
