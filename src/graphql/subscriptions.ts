/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
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
export const onCreateSlide = /* GraphQL */ `
  subscription OnCreateSlide {
    onCreateSlide {
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
export const onUpdateSlide = /* GraphQL */ `
  subscription OnUpdateSlide {
    onUpdateSlide {
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
export const onDeleteSlide = /* GraphQL */ `
  subscription OnDeleteSlide {
    onDeleteSlide {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
