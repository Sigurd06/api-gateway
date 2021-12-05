import { Injectable } from '@nestjs/common';
import { ClientProxySerivce } from '../../common/proxy/client.service';

@Injectable()
export class UsersService {
  constructor(private readonly clientProxy: ClientProxySerivce) {}
  private clientProxyUsers = this.clientProxy.clientProxyUsers();

  get(data: string) {
    return this.clientProxyUsers.send('PING', data);
  }
}
