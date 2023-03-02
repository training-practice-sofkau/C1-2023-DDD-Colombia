import { Injectable } from '@nestjs/common';
import { IGuardarService } from '../domain/guardar.servicio';

@Injectable()
export class GuardarService implements IGuardarService {
  private readonly datos: any[] = [];

  execute(command: any) {
    this.datos.push(command);
    return this.datos.at(-1);
  }
}
