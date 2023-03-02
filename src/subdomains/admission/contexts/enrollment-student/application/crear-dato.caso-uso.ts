import { IGuardarService } from '../domain/guardar.servicio';

export class CrearDatoCasoUso {
  constructor(private readonly service: IGuardarService) {}

  ejecutar(command: any) {
    command = { ...command, id: '123' };
    return this.service.execute(command);
  }
}
