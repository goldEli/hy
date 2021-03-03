import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './modules/posts/posts.module';
import { ClientModule } from './modules/client/client.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Client } from './modules/client/client.model';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'hy',
      models: [Client, User],
      define: {
        timestamps: false,
      },
    }),
    PostsModule,
    ClientModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
