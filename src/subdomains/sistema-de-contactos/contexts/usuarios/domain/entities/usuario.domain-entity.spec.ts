import { InformacionPersonalDomainEntityBase } from './informacion-personal.domain-entity';
import { UsuarioDomainEntityBase } from './usuario.domain-entity';

describe('UsuarioDomainEntity', () => {
  let entity: UsuarioDomainEntityBase;

  beforeEach(() => {
    entity = new UsuarioDomainEntityBase();
  });

  it('should be defined', () => {
    expect(entity).toBeDefined();
  });

  it('should have a usuarioId property', () => {
    // Arrange
    const usuarioId = '9297be3f-e833-404d-be67-8a125918f802';

    // Act
    entity.usuarioId = usuarioId;

    // Assert
    expect(entity.usuarioId).toBeDefined();
  });

  it('should have a email property', () => {
    // Arrange
    const email = 'julian.lasso@sofka.com.co';

    // Act
    entity.email = email;

    // Assert
    expect(entity.email).toBeDefined();
  });

  it('should have a password property', () => {
    // Arrange
    const password = '123456';

    // Act
    entity.password = password;

    // Assert
    expect(entity.password).toBeDefined();
  });

  it('should have a informacionPersonal property', () => {
    // Arrange
    const informacionPersonal = new InformacionPersonalDomainEntityBase();

    // Act
    entity.informacionPersonal = informacionPersonal;

    // Assert
    expect(entity.informacionPersonal).toBeDefined();
  });
});
