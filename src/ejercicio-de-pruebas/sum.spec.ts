import sum from './sum';

describe('Sum', () => {
  it('should be to equal 3', () => {
    // Arrange - Preparar
    const a = 1;
    const b = 2;
    const expected = 3;

    // Act - Actuar
    const result = sum(a, b);

    // Assert - Afirmar
    expect(result).toBe(expected);
  });

  it('should not be to equal 3', () => {
    // Arrange - Preparar
    const a = 1;
    const b = 2;
    const expected = 4;

    // Act - Actuar
    const result = sum(a, b);

    // Assert - Afirmar
    expect(result).not.toBe(expected);
  });
});
