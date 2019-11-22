const getMenuItems = () => {
  return [
    {
      anchor: 'О Центре',
      link: '/about'
    },
    {
      anchor: 'Программы',
      link: '/programs'
    },
    {
      anchor: 'Отзывы',
      link: '/feedback'
    },
    {
      anchor: 'Новости',
      link: '/news'
    },
    {
      anchor: 'Контакты',
      link: '/contacts'
    },
  ]
};

const getSearchResults = query => (
  [
    {
      anchor: 'Lorem',
      link: '#'
    },
    {
      anchor: 'Lorem Ipsum',
      link: '#'
    },
    {
      anchor: 'Lorem',
      link: '#'
    },
    {
      anchor: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum exercitationem labore sit',
      link: '#'
    },
    {
      anchor: 'Lorem',
      link: '#'
    },
    {
      anchor: 'Lorem',
      link: '#'
    }
  ]
);

const getPhones = () => (
  [
    '+7 950 480-02-52',
    '+7 952 687-57-52'
  ]
);

const getWelcomeScreenSlides = () => (
  [
    {
      name: 'Школьники',
      text: 'Начни строить будущее сегодня',
      img: '/images/welcome-screen-girl.jpg'
    },
    {
      name: 'Студенты',
      text: 'Начни строить будущее сегодня',
      img: '/images/welcome-screen-girl.jpg'
    },
    {
      name: 'Предпенсионеры',
      text: 'Сделай шаг к профессиональному долголетию',
      img: '/images/welcome-screen-girl.jpg'
    },
    {
      name: 'Организации',
      text: 'Прокачай свою команду',
      img: '/images/welcome-screen-girl.jpg'
    }
  ]
);

const getProgramList = () => ([
  {
    for: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Школьникам',
    img: '/images/nail-designer.jpg',
    name: 'Оператор коммерческой съемки',
    place: 'Тюмень',
    duration: '48 ч',
    tag: 'СКОРО',
    link: '/nail-designer'
  },
  {
    for: 'Предпенсионерам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Ялуторовск',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Организациям',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
  {
    for: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    tag: false,
    link: '/nail-designer'
  },
]);

const getCarouselSlides = () => ([
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg',
  '/images/carousel-1.jpg',
  '/images/carousel-2.jpg'
]);

const getFeedbackSlides = () => ([
  {
    type: 'photo',
    img: '/images/girl.png',
    thumb: '/images/girl-thumb.png',
    text: 'Получила отличную практику на занятиях по «Маникюру и педикюру», преподаватель четко руководила моими действиями, вовремя поправляла. Отработка была на моделях и их было достаточно. Теоретические объяснения – более, чем понятны. Планирую трудиться в этой области. Спасибо всему коллективу центра.',
    name: 'Ольга Модестова',
    program: {
      name: 'Нейл-дизайн',
      link: '/nail-design'
    }
  },
  {
    type: 'video',
    src: '/video/copp-ed.mp4',
    thumb: '/images/girl-thumb.png',
    name: 'Ольга Модестова',
    program: {
      name: 'Нейл-дизайн',
      link: '/nail-design'
    }
  },
  {
    type: 'photo',
    img: '/images/girl.png',
    thumb: '/images/girl-thumb.png',
    text: 'Получила отличную практику на занятиях по «Маникюру и педикюру», преподаватель четко руководила моими действиями, вовремя поправляла.',
    name: 'Ольга Модестова',
    program: {
      name: 'Нейл-дизайн',
      link: '/nail-design'
    }
  },
  {
    type: 'photo',
    img: '/images/girl.png',
    thumb: '/images/girl-thumb.png',
    text: 'Получила отличную практику на занятиях по «Маникюру и педикюру», преподаватель четко руководила моими действиями, вовремя поправляла. Отработка была на моделях и их было достаточно. Теоретические объяснения – более, чем понятны. Планирую трудиться в этой области. Спасибо всему коллективу центра.Получила отличную практику на занятиях по «Маникюру и педикюру», преподаватель четко руководила моими действиями, вовремя поправляла. Отработка была на моделях и их было достаточно. Теоретические объяснения – более, чем понятны. Планирую трудиться в этой области. Спасибо всему коллективу центра.',
    name: 'Ольга Модестова',
    program: {
      name: 'Нейл-дизайн',
      link: '/nail-design'
    }
  },
]);

const getNews = () => ([
  {
    date: '3 октября 2019',
    title: 'Лицей и Вышка: что общего и чем отличаются',
    text: 'На XIV Международный фестиваль школу современного искусства "Территория" Государственный молодежный театр Литвы привез lorem ipsum dolor sit amet',
    img: '/images/news-item.png',
    link: 'news/lorem'
  },
  {
    date: '3 октября 2019',
    title: 'Лицей и Вышка: что общего и чем отличаются',
    text: 'На XIV Международный фестиваль школу современного искусства "Территория" Государственный молодежный театр Литвы привез lorem ipsum dolor sit amet',
    img: '/images/news-item.png',
    link: 'news/lorem'
  },
  {
    date: '3 октября 2019',
    title: 'В Москве наградили лауреатов конкурса “Семья и будущее России”',
    text: 'Это проект Фонда Андрея Первозванного, который организован при поддержке Федерального фонда поддержки молодежи Тюменской области',
    img: '/images/news-item.png',
    link: 'news/lorem'
  }
]);

export {
  getMenuItems,
  getSearchResults,
  getPhones,
  getWelcomeScreenSlides,
  getProgramList,
  getCarouselSlides,
  getFeedbackSlides,
  getNews
};