import { Body, Controller, Post } from '@nestjs/common';
import { CrearDatoCasoUso } from '../application/crear-dato.caso-uso';
import { GuardarService } from './guardar.service';

@Controller()
export class DatosController {
  constructor(private readonly service: GuardarService) {}

  @Post()
  guardar(@Body() command: any) {
    const useCase = new CrearDatoCasoUso(this.service);
    const respuesta = useCase.ejecutar(command);
    return respuesta;
  }
}
