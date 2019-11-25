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
      text: 'Начни <br/>строить <br/>будущее <br/>сегодня',
      img: '/images/welcome-screen-girl.jpg'
    },
    {
      name: 'Студенты',
      text: 'Начни <br/>строить <br/>будущее <br/>сегодня',
      img: '/images/welcome-screen-girl-1.png'
    },
    {
      name: 'Предпенсионеры',
      text: 'Сделай шаг к <br/>профессиональному <br/>долголетию',
      img: '/images/welcome-screen-girl.jpg'
    },
    {
      name: 'Организации',
      text: 'Прокачай <br/>свою <br/>команду',
      img: '/images/welcome-screen-girl-1.png'
    }
  ]
);

const getProgramList = () => ([
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Дизайнер хлебобулочных изделий',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '1.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Школьникам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Предпенсионерам',
    img: '/images/nail-designer.jpg',
    name: 'Юный повар',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.11.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Организациям',
    img: '/images/nail-designer.jpg',
    name: 'Пиццмейкер',
    place: 'Ялуторовск',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2018',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Школьникам',
    img: '/images/nail-designer.jpg',
    name: 'Дизайнер хлебобулочных изделий',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2017',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Оператор коммерческой съемки',
    place: 'Тобольск',
    duration: '56 ч',
    link: '/nail-designer',
    date: '3.9.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Дизайнер эко-пространства',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Пиццмейкер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Дизайнер хлебобулочных изделий',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Юный повар',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Пиццмейкер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2012',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Оператор коммерческой съемки',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2011',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2012',
    sphere: 'Сфера услуг'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Пиццмейкер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Транспорт и логистика'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.10.2019',
    sphere: 'Производство и инженерные технологии'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Нейл-дизайнер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '3.12.2019',
    sphere: 'Творчество и дизайн'
  },
  {
    forWhom: 'Студентам',
    img: '/images/nail-designer.jpg',
    name: 'Пиццмейкер',
    place: 'Тюмень',
    duration: '48 ч',
    link: '/nail-designer',
    date: '1.12.2019',
    sphere: 'Информационные и коммуникационные технологии'
  }
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

const getProgramFilterTitle = (place, forWhom, sphere)=> {
  const getPlaceForm = place => {
    switch(place) {
      case 'Тюмень': return 'Тюмени';
      default: return 'выбранном месте'
    }
  };
  
  const getForWhomForm = forWhom => {
    switch(forWhom) {
      case 'Студентам': return 'студентов';
      default: return 'выбранного типа'
    }
  };
  
  const getSphereForm = sphere => {
    switch(sphere) {
      case 'Сфера услуг': return 'сфере услуг';
      default: return 'выбранной сфере'
    }
  };
  
  return `Программы обучения для ${getForWhomForm(forWhom)} в ${getPlaceForm(place)} в ${getSphereForm(sphere)}`;
};

const getDetailPageInitialState = () => ({
  title: 'Оператор коммерческой съемки',
  competence: 'Фотограф',
  img: '/images/detail-img.png',
  duration: '68',
  subtitle: 'в Тюмени для школьников',
  shortDescription: `
  Свой взгляд на мир через объектив фотокамеры
  <ul>
    <li>фотосъемка панорам </li>
    <li>фотосъемка архитектуры</li>
    <li>фотосъемка предметов</li>
    <li>интерьерная фотосъемка</li>
    <li>интерьерная фотосъемка</li>
  </ul>`,
  price: '12 500 ₽',
  description: `
  <p>
    <b>Для кого</b> <br/>
    Обучающиеся общеобразовательных учреждений 6-11 классов
  </p>
  
  <p>
    <b>Продолжительность обучения</b> <br/>
    68 академических часов
  </p>
  
  <p>
    <b>Форма обучения</b> <br/>
    очная, с использованием дистанционных образовательных технологий
  </p>
  
  <p>
    <b>Присваиваемый квалификационный разряд</b> <br/>
    Фотограф 3 разряда
  </p>
  
  <p>
    <b>Чему вы научитесь</b> <br/>
    Данный курс позволит вам освоить востребованную и высокооплачиваемую профессию фотографа. И получить все знания и навыки, необходимые для успешной карьеры:
  </p>
    
  <ul>
      <li>правовые основы деятельности фотографа;</li>
      <li>фиксация фотоизображения с использованием специальных технических средств;</li>
      <li>организация схемы освещения для создания фотоизображения;</li>
      <li>композиционное построение кадра;</li>
      <li>выполнение цветокоррекции и сложной ретуши фотоизображения;</li>
      <li>специальная обработка фотоизображения и специальные эффекты и т.д.</li>
  </ul>`,
  programFile: '/files/program.pdf',
  docFile: '/files/doc.pdf'
});

export {
  getMenuItems,
  getSearchResults,
  getPhones,
  getWelcomeScreenSlides,
  getProgramList,
  getCarouselSlides,
  getFeedbackSlides,
  getNews,
  getProgramFilterTitle,
  getDetailPageInitialState
};