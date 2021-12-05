import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProxyModule } from '../../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
