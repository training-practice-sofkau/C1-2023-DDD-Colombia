import { FeedingPostgresEntity } from './../databases/postgres/entities/feeding-postgres.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FeedingSerivce extends FeedingPostgresEntity {}
