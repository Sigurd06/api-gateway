import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxyService } from './client.service';

@Module({
  imports: [ConfigModule],
  providers: [ClientProxyService],
  exports: [ClientProxyService],
})
export class ProxyModule {}
