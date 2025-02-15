import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    JwtModule.register({
      secret  : "rahasia",
      global : true
    }),
    AuthModule,
    ChatModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}