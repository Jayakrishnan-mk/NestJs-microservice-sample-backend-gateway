import { CreateUserRequest } from './create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private readonly communicationClient;
    private readonly analyticsClient;
    private readonly users;
    constructor(communicationClient: ClientProxy, analyticsClient: ClientProxy);
    getHello(): string;
    createUser(createUserRequest: CreateUserRequest): void;
    getAnalytics(): import("rxjs").Observable<any>;
}
