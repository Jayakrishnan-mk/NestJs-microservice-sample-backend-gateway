import { AppService } from './app.service';
import { CreateUserRequest } from './create-user-request.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(createUserRequest: CreateUserRequest): void;
    getAnalytics(): import("rxjs").Observable<any>;
}
