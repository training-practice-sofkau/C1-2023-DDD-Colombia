/**
 *
 *
 * @export
 * @interface ICreateCrossesGeneticCommand
 */
export interface ICreateCrossesGeneticCommand {
  breedId: string;
  breedName: string;
  breedDescription: string;
  enviromentBreed: string;
  hybridVigors: {
    hybridVigorId: string;
    ageHybridVigor: number;
    weigthHybrydVigor: number;
  };
  feeding: {
    feedingId: string;
    foodPermittedFeeding: string;
    descriptionFeeding: string;
    foodQualityFeeding: string;
  };
}
