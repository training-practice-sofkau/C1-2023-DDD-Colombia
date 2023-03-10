import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalCreadaEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';
import { CrearInformacionPersonalHelper } from './crear-informacion-personal.helper';

describe('CrearInformacionPersonalHelper', () => {
  let service: IInformacionPersonalDomainService;
  let event: InformacionPersonalCreadaEventPublisher;
  let entity: InformacionPersonalDomainEntityBase;
  let helper: typeof CrearInformacionPersonalHelper;

  beforeEach(() => {
    // Arrange
    service = {
      crearInformacionPersonal: jest.fn(),
    } as unknown as IInformacionPersonalDomainService;
    event = {
      publish: jest.fn(),
      response: undefined,
    } as unknown as InformacionPersonalCreadaEventPublisher;
    entity = new InformacionPersonalDomainEntityBase({
      informacionPersonalId: '19b48c31-1c27-4ccd-b461-2d9c29f4ef10',
      nombre: 'Julian Andres',
      apellido: 'Lasso',
      usuario: {
        usuarioId: '83382c49-e0a9-416b-b134-7d20d13331ff',
        email: 'julian.lasso@sofka.com.co',
        password: 'Contraseña123*Segura',
      },
    });

    // Act
    helper = CrearInformacionPersonalHelper;
  });

  it('should be defined', () => {
    // Assert
    expect(helper).toBeDefined();
  });

  it('should throw AggregateRootException if service is undefined', async () => {
    // Arrange
    service = undefined as unknown as IInformacionPersonalDomainService;
    const expectedMessage =
      'InformacionPersonalService no se encuentra definido';

    // Act
    const result = () => helper(entity, service, event);

    // Assert
    await expect(result).rejects.toThrow(AggregateRootException);
    await expect(result).rejects.toThrow(expectedMessage);
  });

  it('should throw AggregateRootException if event is undefined', async () => {
    // Arrange
    event = undefined as unknown as InformacionPersonalCreadaEventPublisher;
    const expectedMessage =
      'InformacionPersonalCreadaEventPublisher no se encuentra definido';

    // Act
    const result = () => helper(entity, service, event);

    // Assert
    await expect(result).rejects.toThrow(AggregateRootException);
    await expect(result).rejects.toThrow(expectedMessage);
  });

  it('should return entity', async () => {
    // Arrange
    service.crearInformacionPersonal = jest.fn().mockResolvedValue(entity);

    // Act
    const result = await helper(entity, service, event);

    // Assert
    expect(result).toEqual(entity);
  });

  it('should call service.crearInformacionPersonal', async () => {
    // Arrange
    jest.spyOn(service, 'crearInformacionPersonal');

    // Act
    await helper(entity, service, event);

    // Assert
    expect(service.crearInformacionPersonal).toHaveBeenCalledWith(entity);
  });

  it('should call event.publish', async () => {
    // Arrange
    jest.spyOn(event, 'publish');

    // Act
    await helper(entity, service, event);

    // Assert
    expect(event.publish).toHaveBeenCalled();
  });

  it('should set event.response', async () => {
    // Arrange
    service.crearInformacionPersonal = jest.fn().mockResolvedValue(entity);

    // Act
    await helper(entity, service, event);

    // Assert
    expect(event.response).toEqual(entity);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
