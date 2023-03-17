import { IsString } from 'class-validator';

export class CreateBreedCommand {
  @IsString({ message: 'El campo Breed es requerido' })
  Breed: string;

  @IsString({ message: 'el campo getBreedById es requerido' })
  getBreedById: string;

  @IsString({ message: 'El campo updateEnviromentBreed es requerido' })
  updateEnviromentBreed: string;

  @IsString({ message: 'El campo validationRangeParentsBreed es requerido' })
  validationRangeParentsBreed: string;

  @IsString({ message: 'El campo updateFoodComponentBreed es requerido' })
  updateFoodComponentBreed: string;
}
