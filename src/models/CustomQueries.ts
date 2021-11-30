export const listCards = /* GraphQL */ `
  query ListCards($filter: ModelCardFilterInput, $limit: Int, $nextToken: String) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slogan
        likes
        nopes
        deck {
          items {
            cardID
            description
            id
            locationInDeck
            imageUri
            title
          }
          nextToken
        }
        team {
          items {
            id
            cardID
            name
            imageUri
            position
            linkedIn
          }
          nextToken
        }
        ownerID
        owner {
          id
          username
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
