import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BREED_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'breed-context',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class MessagingModule {}
