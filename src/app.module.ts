import { Module } from '@nestjs/common';
import { DatosController } from './subdomains/__SUBDOMINIO__/contexts/__CONTEXTO__1__/infrastructure/datos.controller';
import { GuardarService } from './subdomains/__SUBDOMINIO__/contexts/__CONTEXTO__1__/infrastructure/guardar.service';

@Module({
  imports: [],
  controllers: [DatosController],
  providers: [GuardarService],
})
export class AppModule {}
