/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  email?: string,
  investing?: ModelCardConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items?:  Array<Card | null > | null,
  nextToken?: string | null,
};

export type Card = {
  __typename: "Card",
  id?: string,
  name?: string,
  slogan?: string,
  likes?: number,
  nopes?: number,
  deck?: ModelSlideConnection,
  team?: ModelMemberConnection,
  ownerID?: string,
  owner?: User,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelSlideConnection = {
  __typename: "ModelSlideConnection",
  items?:  Array<Slide | null > | null,
  nextToken?: string | null,
};

export type Slide = {
  __typename: "Slide",
  id?: string,
  cardID?: string,
  title?: string,
  imageUri?: string,
  description?: string,
  locationInDeck?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelMemberConnection = {
  __typename: "ModelMemberConnection",
  items?:  Array<Member | null > | null,
  nextToken?: string | null,
};

export type Member = {
  __typename: "Member",
  id?: string,
  cardID?: string,
  name?: string,
  imageUri?: string,
  position?: string,
  linkedIn?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateCardInput = {
  id?: string | null,
  name: string,
  slogan: string,
  likes: number,
  nopes: number,
  ownerID: string,
};

export type ModelCardConditionInput = {
  name?: ModelStringInput | null,
  slogan?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  nopes?: ModelIntInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCardInput = {
  id: string,
  name?: string | null,
  slogan?: string | null,
  likes?: number | null,
  nopes?: number | null,
  ownerID?: string | null,
};

export type DeleteCardInput = {
  id?: string | null,
};

export type CreateSlideInput = {
  id?: string | null,
  cardID: string,
  title: string,
  imageUri: string,
  description: string,
  locationInDeck: number,
};

export type ModelSlideConditionInput = {
  cardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  locationInDeck?: ModelIntInput | null,
  and?: Array< ModelSlideConditionInput | null > | null,
  or?: Array< ModelSlideConditionInput | null > | null,
  not?: ModelSlideConditionInput | null,
};

export type UpdateSlideInput = {
  id: string,
  cardID?: string | null,
  title?: string | null,
  imageUri?: string | null,
  description?: string | null,
  locationInDeck?: number | null,
};

export type DeleteSlideInput = {
  id?: string | null,
};

export type CreateMemberInput = {
  id?: string | null,
  cardID: string,
  name: string,
  imageUri: string,
  position: string,
  linkedIn?: string | null,
};

export type ModelMemberConditionInput = {
  cardID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  position?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  and?: Array< ModelMemberConditionInput | null > | null,
  or?: Array< ModelMemberConditionInput | null > | null,
  not?: ModelMemberConditionInput | null,
};

export type UpdateMemberInput = {
  id: string,
  cardID?: string | null,
  name?: string | null,
  imageUri?: string | null,
  position?: string | null,
  linkedIn?: string | null,
};

export type DeleteMemberInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  slogan?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  nopes?: ModelIntInput | null,
  ownerID?: ModelIDInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelSlideFilterInput = {
  id?: ModelIDInput | null,
  cardID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  description?: ModelStringInput | null,
  locationInDeck?: ModelIntInput | null,
  and?: Array< ModelSlideFilterInput | null > | null,
  or?: Array< ModelSlideFilterInput | null > | null,
  not?: ModelSlideFilterInput | null,
};

export type ModelMemberFilterInput = {
  id?: ModelIDInput | null,
  cardID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  position?: ModelStringInput | null,
  linkedIn?: ModelStringInput | null,
  and?: Array< ModelMemberFilterInput | null > | null,
  or?: Array< ModelMemberFilterInput | null > | null,
  not?: ModelMemberFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCardMutationVariables = {
  input?: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCardMutationVariables = {
  input?: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCardMutationVariables = {
  input?: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSlideMutationVariables = {
  input?: CreateSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type CreateSlideMutation = {
  createSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSlideMutationVariables = {
  input?: UpdateSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type UpdateSlideMutation = {
  updateSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSlideMutationVariables = {
  input?: DeleteSlideInput,
  condition?: ModelSlideConditionInput | null,
};

export type DeleteSlideMutation = {
  deleteSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMemberMutationVariables = {
  input?: CreateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type CreateMemberMutation = {
  createMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMemberMutationVariables = {
  input?: UpdateMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type UpdateMemberMutation = {
  updateMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMemberMutationVariables = {
  input?: DeleteMemberInput,
  condition?: ModelMemberConditionInput | null,
};

export type DeleteMemberMutation = {
  deleteMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  id?: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items?:  Array< {
      __typename: "Card",
      id: string,
      name: string,
      slogan: string,
      likes: number,
      nopes: number,
      deck?:  {
        __typename: "ModelSlideConnection",
        nextToken?: string | null,
      } | null,
      team?:  {
        __typename: "ModelMemberConnection",
        nextToken?: string | null,
      } | null,
      ownerID: string,
      owner?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSlideQueryVariables = {
  id?: string,
};

export type GetSlideQuery = {
  getSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSlidesQueryVariables = {
  filter?: ModelSlideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSlidesQuery = {
  listSlides?:  {
    __typename: "ModelSlideConnection",
    items?:  Array< {
      __typename: "Slide",
      id: string,
      cardID: string,
      title: string,
      imageUri: string,
      description: string,
      locationInDeck: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMemberQueryVariables = {
  id?: string,
};

export type GetMemberQuery = {
  getMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembersQueryVariables = {
  filter?: ModelMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembersQuery = {
  listMembers?:  {
    __typename: "ModelMemberConnection",
    items?:  Array< {
      __typename: "Member",
      id: string,
      cardID: string,
      name: string,
      imageUri: string,
      position: string,
      linkedIn?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    investing?:  {
      __typename: "ModelCardConnection",
      items?:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        slogan: string,
        likes: number,
        nopes: number,
        ownerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    name: string,
    slogan: string,
    likes: number,
    nopes: number,
    deck?:  {
      __typename: "ModelSlideConnection",
      items?:  Array< {
        __typename: "Slide",
        id: string,
        cardID: string,
        title: string,
        imageUri: string,
        description: string,
        locationInDeck: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    team?:  {
      __typename: "ModelMemberConnection",
      items?:  Array< {
        __typename: "Member",
        id: string,
        cardID: string,
        name: string,
        imageUri: string,
        position: string,
        linkedIn?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ownerID: string,
    owner?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      investing?:  {
        __typename: "ModelCardConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSlideSubscription = {
  onCreateSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSlideSubscription = {
  onUpdateSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSlideSubscription = {
  onDeleteSlide?:  {
    __typename: "Slide",
    id: string,
    cardID: string,
    title: string,
    imageUri: string,
    description: string,
    locationInDeck: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMemberSubscription = {
  onCreateMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMemberSubscription = {
  onUpdateMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMemberSubscription = {
  onDeleteMember?:  {
    __typename: "Member",
    id: string,
    cardID: string,
    name: string,
    imageUri: string,
    position: string,
    linkedIn?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
