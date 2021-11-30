import { DeepOmit } from '../utils/DeepOmit'
import { ListCardsQuery, GetCardQuery } from '../API'
import { GraphQLResult } from '@aws-amplify/api'

export type Card = DeepOmit<Exclude<GetCardQuery['getCard'], null>, '__typename'>

export class CardConvertor {
  static fromGraphqlList = (listCardsQuery: GraphQLResult<ListCardsQuery>): Card[] => {
    return (
      listCardsQuery.data?.listCards?.items?.map(
        card =>
          ({
            id: card?.id,
            name: card?.name,
            slogan: card?.slogan,
            likes: card?.likes,
            nopes: card?.nopes,
            deck: card?.deck,
            team: card?.team,
            ownerID: card?.ownerID,
          } as Card),
      ) || []
    )
  }
}
