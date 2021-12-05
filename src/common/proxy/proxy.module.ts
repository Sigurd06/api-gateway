import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxySerivce } from './client.service';

@Module({
  imports: [ConfigModule],
  providers: [ClientProxySerivce],
  exports: [ClientProxySerivce],
})
export class ProxyModule {}
