import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './modules/client/client.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './modules/user/user.entity';
import { Client } from './modules/client/client.entity';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { UserController } from './modules/user/user.controller';
import { ClientController } from './modules/client/client.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      retryAttempts: 1,
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'hy',
      entities: [User, Client],
      synchronize: true,
    }),
    ClientModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ClientController);
  }
}
