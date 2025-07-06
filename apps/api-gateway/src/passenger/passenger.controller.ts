import { Controller } from '@nestjs/common';

@Controller('api/v2/passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxyTrips) {}
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  
}
