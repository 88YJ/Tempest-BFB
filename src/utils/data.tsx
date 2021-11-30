import { Card } from '../models/Card'

export const MOCK_FOLLOWING = [
  {
    id: 1,
    name: 'Clutch',
    abv: 'CLH',
    likes: 150,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [1, 80, 80, 120, 130, 150],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 2,
    name: 'To Be',
    abv: '2B',
    likes: 210,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 150, 200, 200, 200, 210],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 3,
    name: 'AlterVerse',
    abv: 'AV',
    likes: 312,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 20, 180, 200, 290, 312],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Annex',
    abv: 'AX',
    likes: 90,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 15, 37, 59, 75, 90],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Beyond The Boundary',
    abv: 'BTB',
    likes: 400,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [70, 300, 300, 305, 310, 400],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 6,
    name: 'R&B',
    abv: 'RB',
    likes: 275,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 12, 18, 50, 200, 275],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 7,
    name: 'Apples Expo',
    abv: 'AE',
    likes: 990,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [150, 500, 700, 832, 957, 990],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 8,
    name: 'Indie Games For Hire',
    abv: 'IGFH',
    likes: 458,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [156, 179, 200, 200, 200, 458],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 9,
    name: 'To Be',
    abv: '2B',
    likes: 210,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 150, 200, 200, 200, 210],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 10,
    name: 'To Be',
    abv: '2B',
    likes: 210,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 150, 200, 200, 200, 210],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
  {
    id: 11,
    name: 'To Be',
    abv: '2B',
    likes: 210,
    data: {
      labels: ['0', '1', '2', '3'],
      datasets: [
        {
          data: [10, 150, 200, 200, 200, 210],
          color: (opacity = 1) => 'limegreen',
          strokeWidth: 2,
        },
      ],
    },
  },
]

export const MOCK_CARDS: Card[] = [
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '1',
    name: 'AirBNB',
    slogan:
      'Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.',
    likes: 320523,
    nopes: 30,
    deck: {
      nextToken: '',
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'Main Slide',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834971963671838751/Title2.PNG',
          description:
            'This is the main slide: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 2,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '2',
          title: 'Problem',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976914569560124/Problem2.PNG',
          description:
            'This is slide 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 3,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '3',
          title: 'Solution',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976925746855957/Solution2.PNG',
          description:
            'This is slide 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 4,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '4',
          title: 'Market Validation',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834978155403280424/Market_Validation2.PNG',
          description: 'This is slide 3',
        },
        {
          locationInDeck: 5,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '5',
          title: 'Market Size',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976963382345728/MarketSize2.PNG',
          description: 'This is slide 4',
        },
      ],
    },
    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'Position',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '2',
          name: 'Rashad Jaraysa',
          position: 'Position',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://media-exp1.licdn.com/dms/image/C5603AQHwI5c4qLMcNg/profile-displayphoto-shrink_800_800/0/1595793254668?e=1625097600&v=beta&t=LQWofD7f8FiyrkjGyMaQWq9Tl4qz1c_WX53vX4YzzkU',
        },
      ],
    },
  },
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '2',
    name: 'Clutch',
    slogan:
      'Clutch is a new gaming platfrom that takes Discord, Steam, Twitch, And OBS and brings them together in a way we have never seen before',
    likes: 25478,
    nopes: 30,
    deck: {
      nextToken: '',
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'Clutch',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944816034349086/Title1.PNG?width=470&height=937',
          description:
            'Clutch is a new gaming platfrom that takes Discord, Steam, Twitch, And OBS and brings them together in a way we have never seen before',
        },
        {
          locationInDeck: 2,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '2',
          title: 'Problem',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944893096689674/Problem1.PNG?width=468&height=935',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id praesentium beatae earum sunt unde, quae, modi illo neque commodi eius doloribus? Laboriosam soluta ipsum iusto perferendis quam est reiciendis.',
        },
        {
          locationInDeck: 3,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '3',
          title: 'Solution',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944963400958002/Solution1.PNG?width=469&height=936',
          description:
            'Minima id praesentium beatae earum sunt unde, quae, modi illo neque commodi eius doloribus? Laboriosam soluta ipsum iusto perferendis quam est reiciendis.',
        },

        {
          locationInDeck: 4,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '4',
          title: 'Market Size',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945021404643338/MarketSize1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quibusdam repellat repellendus, dolorem, beatae sint, cupiditate ut quo aliquid consectetur doloribus quos exercitationem quam perferendis alias vel debitis aliquam necessitatibus?',
        },

        {
          locationInDeck: 5,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '5',
          title: 'Market Validation',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945032279818250/Market_Validation1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero voluptates, porro doloribus labore dolores officia saepe, illo deleniti, maxime necessitatibus provident nihil dicta. Atque, mollitia nobis. Officia, quam explicabo?',
        },

        {
          locationInDeck: 6,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '6',
          title: 'Overall Market',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945079051026453/Overall_Market1.PNG?width=467&height=935',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id qui numquam ex inventore, illo consectetur, fugit iste nobis labore expedita maiores quibusdam nesciunt voluptatum! At eos dignissimos suscipit pariatur ut?',
        },

        {
          locationInDeck: 7,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '7',
          title: 'Product',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963505077682206/Product1.PNG?width=468&height=935',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit est rerum suscipit corrupti deserunt culpa ut deleniti explicabo doloribus. Totam porro laboriosam consequatur similique reiciendis rem, quo nostrum numquam.',
        },

        {
          locationInDeck: 8,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '8',
          title: 'Business Model',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963534130970684/Business_Model1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corporis nihil repellat repudiandae. Cumque cum iusto voluptates, libero, corporis, modi expedita cupiditate sint culpa inventore ducimus iste voluptas quia velit!',
        },

        {
          locationInDeck: 9,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '9',
          title: 'Competitive Edges',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963557560877096/Competitive_Edges1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet et eum. Dolores incidunt cumque beatae illo placeat qui pariatur quod nisi deserunt velit totam, est praesentium officiis doloremque et?',
        },
      ],
    },

    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'Position',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Rashad Jaraysa',
          position: 'Position',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://media-exp1.licdn.com/dms/image/C5603AQHwI5c4qLMcNg/profile-displayphoto-shrink_800_800/0/1595793254668?e=1625097600&v=beta&t=LQWofD7f8FiyrkjGyMaQWq9Tl4qz1c_WX53vX4YzzkU',
        },
      ],
    },
  },
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '3',
    name: 'Uber',
    slogan: 'Next Gen Car Service',
    likes: 1200587,
    nopes: 30,
    deck: {
      nextToken: '',
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'main slide',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834983797929017364/Title3.PNG',
          description: 'This is the main slide',
        },
      ],
    },
    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'CEO',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
      ],
    },
  },
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '4',
    name: 'AirBNB',
    slogan:
      'Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.',
    likes: 57153,
    nopes: 30,
    deck: {
      nextToken: '',
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'Main Slide',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834971963671838751/Title2.PNG',
          description:
            'This is the main slide: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 2,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '2',
          title: 'Problem',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976914569560124/Problem2.PNG',
          description:
            'This is slide 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 3,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '3',
          title: 'Solution',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976925746855957/Solution2.PNG',
          description:
            'This is slide 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum cursus dolor vel iaculis. Nunc interdum, mauris sit amet volutpat consequat, ante felis luctus nibh, non sagittis urna purus nec tortor. Curabitur ut purus tincidunt velit venenatis rhoncus. Integer sit amet egestas risus. Ut laoreet augue dui, eget faucibus turpis pharetra id. Mauris non aliquam ipsum. Curabitur nisi ligula, bibendum id ultricies sit amet, scelerisque non neque. Morbi aliquet sodales lacinia. Nam nisi mi, dignissim sed mattis accumsan, tincidunt sed risus. Sed ut libero eu nulla fermentum commodo. Integer orci nulla, faucibus at metus in, varius sodales arcu. Donec at pulvinar ipsum. Cras semper, ex sit amet lobortis vehicula, enim diam vulputate massa, nec eleifend sapien nulla maximus mauris. Pellentesque egestas in purus vel blandit. Ut sed nulla venenatis, ultricies lacus ac, pretium urna. Cras eget massa id risus hendrerit mollis.',
        },
        {
          locationInDeck: 4,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '4',
          title: 'Market Validation',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834978155403280424/Market_Validation2.PNG',
          description: 'This is slide 3',
        },
        {
          locationInDeck: 5,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '5',
          title: 'Market Size',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834976963382345728/MarketSize2.PNG',
          description: 'This is slide 4',
        },
      ],
    },
    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'CEO',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
      ],
    },
  },
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '5',
    name: 'Clutch',
    slogan:
      'Clutch is a new gaming platfrom that takes Discord, Steam, Twitch, And OBS and brings them together in a way we have never seen before',
    likes: 156,
    nopes: 30,
    deck: {
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'Clutch',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944816034349086/Title1.PNG?width=470&height=937',
          description:
            'Clutch is a new gaming platfrom that takes Discord, Steam, Twitch, And OBS and brings them together in a way we have never seen before',
        },
        {
          locationInDeck: 2,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '2',
          title: 'Problem',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944893096689674/Problem1.PNG?width=468&height=935',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima id praesentium beatae earum sunt unde, quae, modi illo neque commodi eius doloribus? Laboriosam soluta ipsum iusto perferendis quam est reiciendis.',
        },
        {
          locationInDeck: 3,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '3',
          title: 'Solution',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834944963400958002/Solution1.PNG?width=469&height=936',
          description:
            'Minima id praesentium beatae earum sunt unde, quae, modi illo neque commodi eius doloribus? Laboriosam soluta ipsum iusto perferendis quam est reiciendis.',
        },

        {
          locationInDeck: 4,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '4',
          title: 'Market Size',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945021404643338/MarketSize1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quibusdam repellat repellendus, dolorem, beatae sint, cupiditate ut quo aliquid consectetur doloribus quos exercitationem quam perferendis alias vel debitis aliquam necessitatibus?',
        },

        {
          locationInDeck: 5,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '5',
          title: 'Market Validation',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945032279818250/Market_Validation1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vero voluptates, porro doloribus labore dolores officia saepe, illo deleniti, maxime necessitatibus provident nihil dicta. Atque, mollitia nobis. Officia, quam explicabo?',
        },

        {
          locationInDeck: 6,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '6',
          title: 'Overall Market',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834945079051026453/Overall_Market1.PNG?width=467&height=935',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id qui numquam ex inventore, illo consectetur, fugit iste nobis labore expedita maiores quibusdam nesciunt voluptatum! At eos dignissimos suscipit pariatur ut?',
        },

        {
          locationInDeck: 7,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '7',
          title: 'Product',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963505077682206/Product1.PNG?width=468&height=935',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit est rerum suscipit corrupti deserunt culpa ut deleniti explicabo doloribus. Totam porro laboriosam consequatur similique reiciendis rem, quo nostrum numquam.',
        },

        {
          locationInDeck: 8,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '8',
          title: 'Business Model',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963534130970684/Business_Model1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corporis nihil repellat repudiandae. Cumque cum iusto voluptates, libero, corporis, modi expedita cupiditate sint culpa inventore ducimus iste voluptas quia velit!',
        },

        {
          locationInDeck: 9,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '9',
          title: 'Competitive Edges',
          imageUri:
            'https://media.discordapp.net/attachments/834935956967653476/834963557560877096/Competitive_Edges1.PNG?width=468&height=936',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum amet et eum. Dolores incidunt cumque beatae illo placeat qui pariatur quod nisi deserunt velit totam, est praesentium officiis doloremque et?',
        },
      ],
      nextToken: '',
    },
    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'CEO',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
      ],
    },
  },
  {
    owner: undefined,
    createdAt: '',
    updatedAt: '',
    ownerID: '1',
    id: '6',
    name: 'Uber',
    slogan: 'Next Gen Car Service',
    likes: 9027,
    nopes: 30,
    deck: {
      items: [
        {
          locationInDeck: 1,
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          title: 'main slide',
          imageUri: 'https://media.discordapp.net/attachments/834935956967653476/834983797929017364/Title3.PNG',
          description: 'This is the main slide',
        },
      ],
      nextToken: '',
    },
    team: {
      nextToken: '',
      items: [
        {
          createdAt: '',
          updatedAt: '',
          cardID: '',
          id: '1',
          name: 'Brandon Fry-Bailey',
          position: 'CEO',
          linkedIn: 'https://www.linkedin.com/',
          imageUri:
            'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/83779201_2933658556712445_1956823298041970688_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=-pP75wti2mgAX_0o75g&_nc_ht=scontent-sea1-1.xx&oh=e8a4986768ae159ad0e014889a6e7261&oe=60954F79',
        },
      ],
    },
  },
]
