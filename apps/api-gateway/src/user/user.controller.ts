import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';
import { ClientProxyTrips } from 'src/common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  private _clientProxyUser = this.clientProxy.clientProxyUsers();
  constructor(private readonly clientProxy: ClientProxyTrips) {}
  

  @Post()
  create(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send()
  }
}
