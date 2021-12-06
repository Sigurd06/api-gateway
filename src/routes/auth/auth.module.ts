import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProxyModule } from '../../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
