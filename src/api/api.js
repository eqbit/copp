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

export {getMenuItems, getSearchResults, getPhones, getWelcomeScreenSlides};