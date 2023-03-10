jest.mock('@validations');

import * as validations from '@validations';
import { ApellidoValueObject } from './apellido.value-object';

describe('ApellidoValueObject', () => {
  // Arrange
  let objectValue: ApellidoValueObject;

  beforeEach(() => {
    // Act
    objectValue = new ApellidoValueObject();
  });

  it('should be defined', () => {
    // Assert
    expect(objectValue).toBeDefined();
  });

  describe('Validate the value', () => {
    it('should be valid', () => {
      // Arrange
      const apellido = 'Lasso Figueroa';
      const expected = 'Lasso Figueroa';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);

      // Act
      objectValue = new ApellidoValueObject(apellido);
      const result = objectValue.valueOf();

      // Assert
      expect(result).toBe(expected);
      expect(objectValue.hasErrors()).toBe(false);
      expect(objectValue.getErrors().length).toBe(0);
      expect(objectValue.getErrors()[0]?.message).toBeUndefined();
      expect(validations.IsEmpty).toHaveBeenCalled();
    });
  });

  describe('Validations', () => {
    it('should be empty', () => {
      // Arrange
      const apellido = undefined;
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const expectedMessage = 'El "apellido" no puede estar vacío';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(true);

      // Act
      objectValue = new ApellidoValueObject(apellido);
      const result = objectValue.valueOf();

      // Assert
      expect(result).toBeUndefined();
      expect(validations.IsEmpty).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
    });

    it('should be less than 100 characters', () => {
      // Arrange
      const apellido = 'Lasso Figueroa';
      const hasExpectedErrors = false;
      const numberErrorsExpected = 0;
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);
      jest.spyOn(validations, 'StringMaxLength').mockReturnValue(false);

      // Act
      objectValue = new ApellidoValueObject(apellido);

      // Assert
      expect(validations.StringMaxLength).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
    });

    it('should be greater than 100 characters', () => {
      // Arrange
      const apellido =
        'Quis labore reprehenderit consequat exercitation anim aliqua. Occaecat labore ex enim nisi proident tempor.';
      const hasExpectedErrors = true;
      const numberErrorsExpected = 1;
      const expectedMessage =
        'El "apellido" no puede tener más de 100 caracteres';
      jest.spyOn(validations, 'IsEmpty').mockReturnValue(false);
      jest.spyOn(validations, 'StringMaxLength').mockReturnValue(true);

      // Act
      objectValue = new ApellidoValueObject(apellido);

      // Assert
      expect(validations.StringMaxLength).toHaveBeenCalled();
      expect(objectValue.hasErrors()).toBe(hasExpectedErrors);
      expect(objectValue.getErrors().length).toBe(numberErrorsExpected);
      expect(objectValue.getErrors()[0]?.message).toContain(expectedMessage);
    });
  });
});
