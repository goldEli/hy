import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [PostsModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
