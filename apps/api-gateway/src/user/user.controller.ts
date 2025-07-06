import { Body, Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyTrips) {}
  private clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body userDTO: UserDTO): Observable<IUser> {}
}
