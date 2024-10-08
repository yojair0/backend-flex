import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RabbitMQClientService } from '../rabbitmq-client.service';
export declare class UsersService {
    private userModel;
    private jwtService;
    private rabbitMQClientService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService, rabbitMQClientService: RabbitMQClientService);
    register(createUserDto: CreateUserDto): Promise<User>;
    login(email: string, password: string): Promise<{
        token: string;
    }>;
    getUserById(userId: string): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
    getPurchaseHistory(userId: string): Promise<string[]>;
    getAllUsers(): Promise<User[]>;
    addToCart(userId: string, courseId: string): Promise<{
        message: string;
    }>;
    clearCart(userId: string): Promise<{
        message: string;
    }>;
    purchaseCourses(userId: string): Promise<User>;
}
