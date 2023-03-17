import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { AppController } from './app.controller';
import { PostgreSQLModule } from './subdomains/genetic/context/crosses-between-species/infrastructure/persistence/databases/postgres/postgresql.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
      // envFilePath: '../environments/.env.dev',
    }),
    PostgreSQLModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
