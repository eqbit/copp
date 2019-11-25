import React from 'react';
import {Button} from '../button';
import {getWelcomeScreenSlides} from '../../api/api';
import {Link} from 'react-router-dom';

const sliderInterval = 4000;

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slides: getWelcomeScreenSlides(),
      currentSlide: 1,
      fade: false,
      animationInterval: null,
      fadeTimeout: null
    };
  }
  
  componentDidMount() {
    this.setSlideshow();
  }
  
  componentWillUnmount() {
    this.clearSlideshow();
  }
  
  setSlideshow = () => {
    this.setState({
      animationInterval: setInterval(() => {
        this.setState(prevState => ({
          currentSlide: prevState.currentSlide + 1 === prevState.slides.length
            ? 0
            : prevState.currentSlide + 1,
          fade: true,
          fadeTimeout: setTimeout(() => {
            this.setState({
              fade: false
            })
          }, 100)
        }));
      }, sliderInterval)
    });
  };
  
  clearSlideshow = () => {
    clearInterval(this.state.animationInterval);
    clearTimeout(this.state.fadeTimeout)
  };
  
  handleSliderClick = currentSlide => {
    this.setState({
      currentSlide,
      fade: true,
      fadeTimeout: setTimeout(() => {
        this.setState({
          fade: false
        });
      }, 100)
    });
    
    this.clearSlideshow();
    this.setSlideshow();
  };
  
  render() {
    const {slides, currentSlide, fade} = this.state;
    
    return (
      <div className={`welcome-screen__wrapper ${fade ? 'fade' : ''}`}>
        
        <div className="welcome-screen__bg">
          <img ref={img => this.imgRef = img} src={slides[currentSlide].img} alt=""/>
        </div>
        
        <div className="container">
          <div className="welcome-screen">
            <div className="welcome-screen__logo">
              <img src="/images/large-logo.png" alt=""/>
            </div>
          
            <div className="welcome-screen-title__wrapper">
              <div className="welcome-screen-title" dangerouslySetInnerHTML={{__html: slides[currentSlide].text}}/>
            </div>
          
            <Link to="/programs" className="welcome-screen__btn-container">
              <Button className="btn--secondary welcome-screen__btn">
                <>
                  Выбрать программу
                  <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M41.005 8.38197L33.795 16.001L32.009 14.472L37.191 8.99597H-0.000976562V7.00497H37.176L31.985 1.52497L33.773 -0.00402832L40.991 7.61497L40.55 7.99197L41.005 8.38197Z" fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="41" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </>
              </Button>
            </Link>
            
            <div className="welcome-screen-slider">
              {slides.map((item, index) => (
                <div className={currentSlide === index ? 'welcome-screen-slider__item welcome-screen-slider__item--active' : 'welcome-screen-slider__item'}
                     key={index}
                     onClick={() => {this.handleSliderClick(index)}}>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {WelcomeScreen};