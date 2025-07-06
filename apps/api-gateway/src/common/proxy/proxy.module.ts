import { Module } from '@nestjs/common';
import { ClientProxyTrips } from './client-proxy';

@Module({
  providers: [ClientProxyTrips],
  exports: [ClientProxyTrips],
})
export class ProxyModule {}
