import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { UsuariosModule } from './subdomains/sistema-de-contactos/contexts/usuarios/infrastructure/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
    }),
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
