// import { Body, Controller, Post } from '@nestjs/common';
// import { CreateBreedUsesCase } from '../../aplication/uses-cases/create-breed/create-breed-use-case';
// import { RegisteredBreedPublisher } from '../messaging/publisher/registered-breed.publisher';
// import { BreedService } from '../persistence/databases/postgres/services/breed.service';
// import { CreateBreedCommand } from '../utils/commands/create-breed-command';

// @Controller('breeds')
// export class BreedController {
//   constructor(
//     private readonly breedService: BreedService,
//     private readonly registeredBreedPublisher: RegisteredBreedPublisher,
//   ) {}
//   @Post()
//   async create(@Body() command: CreateBreedCommand) {
//     const useCase = new CreateBreedUsesCase(
//       this.breedService,
//       this.registeredBreedPublisher,
//     );
//     return await useCase.execute(command);
//   }
// }
