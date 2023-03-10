import { Module } from '@nestjs/common';
import { PostgresModule } from './databases/postgres/postgres.module';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [PostgresModule],
  controllers: [],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class PersistenceModule {}
