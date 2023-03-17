import { FeedingDomainEntity } from '../../../entities/feeding.domain';
export interface ICreatedFeedingResponse {
  responseFeedingQuality: FeedingDomainEntity;
  message: string;
}
