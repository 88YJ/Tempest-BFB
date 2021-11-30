/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $input: CreateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    createSlide(input: $input, condition: $condition) {
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
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $input: UpdateSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    updateSlide(input: $input, condition: $condition) {
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
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $input: DeleteSlideInput!
    $condition: ModelSlideConditionInput
  ) {
    deleteSlide(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
