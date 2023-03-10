import { IEventPublisher } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { ApellidoDeInformacionPersonalActualizadoEventPublisher } from './apellido-de-informacion-personal-actualizado.event-publisher';
import { Topic } from './enums';

class EventPublisher extends ApellidoDeInformacionPersonalActualizadoEventPublisher {}

describe('ApellidoDeInformacionPersonalActualizadoEventPublisher', () => {
  let eventPublisher: EventPublisher;
  let publisher: IEventPublisher;

  beforeEach(() => {
    publisher = {
      emit: jest.fn(),
    };
    eventPublisher = new EventPublisher(publisher);
  });

  it('should be defined', () => {
    expect(eventPublisher).toBeDefined();
  });

  it('should emit the event', () => {
    const data = new InformacionPersonalDomainEntityBase({
      informacionPersonalId: '0ec18195-8133-4d26-bff4-eb19a7366c52',
      apellido: 'Lasso Figueroa',
    });
    const expectedTopic = Topic.ApellidoDeInformacionPersonalActualizado;
    const expectedData = JSON.stringify({ data });
    eventPublisher.response = data;

    // Act
    eventPublisher.publish();

    // Assert
    expect(publisher.emit).toHaveBeenCalledWith(expectedTopic, expectedData);
  });
});
