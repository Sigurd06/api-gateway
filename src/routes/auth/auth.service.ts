import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { ClientProxyService } from '../../common/proxy/client.service';
import { CreateUserDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly clientProxy: ClientProxyService) {}
  private clientProxyUsers = this.clientProxy.clientProxyUsers();

  singup(data: CreateUserDTO) {
    return this.clientProxyUsers.send('SINGUP', data).pipe(
      map((message: any) => {
        if (message.status === 400) {
          throw new HttpException(message.response, HttpStatus.BAD_REQUEST);
        }

        return {
          message: 'user succefully created',
          status: HttpStatus.CREATED,
        };
      }),
    );
  }
}
