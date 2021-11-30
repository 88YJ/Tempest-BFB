/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      investing {
        items {
          id
          name
          slogan
          likes
          nopes
          ownerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        investing {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
      id
      name
      slogan
      likes
      nopes
      deck {
        items {
          id
          cardID
          title
          imageUri
          description
          locationInDeck
          createdAt
          updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
      ownerID
      owner {
        id
        username
        email
        investing {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slogan
        likes
        nopes
        deck {
          nextToken
        }
        team {
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
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
      id
      cardID
      title
      imageUri
      description
      locationInDeck
      createdAt
      updatedAt
    }
  }
`;
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardID
        title
        imageUri
        description
        locationInDeck
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      cardID
      name
      imageUri
      position
      linkedIn
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardID
        name
        imageUri
        position
        linkedIn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
