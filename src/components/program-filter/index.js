import React from 'react';
import {getProgramFilterTitle, getProgramList} from '../../api/api';
import {Link} from 'react-router-dom';
import {Button} from '../button';
import Select from 'react-select';
import {getSelectOption} from '../../api/functions';

const initialShowQuantity = 9,
  addShowQuantity = 9;

class ProgramFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      programs: getProgramList(),
      showQuantity: initialShowQuantity,
      places: [],
      forWhom: [],
      spheres: [],
      current: {
        place: 'Тюмень',
        forWhom: 'Студентам',
        sphere: 'Сфера услуг'
      },
      sortBy: {
        value: 'date',
        label: 'По новизне'
      }
    };
  }
  
  componentDidMount() {
    const {programs} = this.state;
    
    this.setState({
      places: [...new Set(programs.map(item => item.place))],
      forWhom: [...new Set(programs.map(item => item.forWhom))],
      spheres: [...new Set(programs.map(item => item.sphere))]
    });
  }
  
  handleFilter = e => {
    e.persist();
    this.setState(prevState => {
      prevState.current[e.target.name] = e.target.value;
      return prevState;
    });
  };
  
  handleShowMoreClick = () => {
    this.setState(prevState => ({
      showQuantity: prevState.showQuantity + addShowQuantity
    }));
  };
  
  filterItems = item => {
    const {current} = this.state;
    
    return item.place === current.place && item.forWhom === current.forWhom && item.sphere === current.sphere;
  };
  
  sortItems = (a, b) => {
    const {sortBy} = this.state;
    
    if (sortBy.value === 'date') {
      return Date.parse(b.date) - Date.parse(a.date);
    }
    
    if (sortBy.value === 'name') {
      return a.name.localeCompare(b.name);
    }
  };
  
  handleSphereSelect = sphere => {
    this.setState(prevState => {
      prevState.current.sphere = sphere.value;
      return prevState;
    });
  };
  
  handleSortSelect = sortBy => {
    this.setState({sortBy});
  };
  
  render() {
    const {places, forWhom, spheres, current, programs, showQuantity} = this.state;
    
    const selectSpheres = [];
    
    spheres.forEach(item => {
      selectSpheres.push(getSelectOption(item));
    });
    
    const selectSortBy = [];
    
    selectSortBy.push({
      value: 'name',
      label: 'По названию'
    });
    selectSortBy.push({
      value: 'date',
      label: 'По новизне'
    });
    
    const items = programs
      .filter(this.filterItems)
      .sort(this.sortItems)
      .slice(0, showQuantity);
    
    return (
      
      <div className="container">
        <div className="program-filter">
          <h1 className="program-filter__title">Программы</h1>
          <div className="program-filter__subtitle">
            В ЦОПП вы можете пройти обучение по 79 программам по разным направлениям. <br/>
            Для более удобного поиска воспользуйтесь фильтром.
          </div>
          
          <form className="program-filter-form" onChange={this.handleFilter}>
            <div className="program-filter-form__block-title">Город</div>
            <div className="radio-row">
              {places.map((item, index) => (
                <div className="button-radio" key={index}>
                  <input type="radio" name="place" value={item} defaultChecked={!index}/>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="program-filter-form__block-title">Для кого</div>
            <div className="radio-row">
              {forWhom.map((item, index) => (
                <div className="button-radio" key={index}>
                  <input type="radio" name="forWhom" value={item} defaultChecked={!index}/>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <div className="program-filter-form__block-title">Направление</div>
            <div className="program-filter-form__select">
              <Select value={getSelectOption(current.sphere)}
                      onChange={this.handleSphereSelect}
                      isSearchable={false}
                      className="crs"
                      classNamePrefix="crs"
                      options={selectSpheres}/>
            </div>
          </form>
          
          <div className="program-filter-list">
            <div
              className="program-filter-list__title">{getProgramFilterTitle(current.place, current.forWhom, current.sphere)}</div>
            
            <div className="program-filter-list__sort">
              Сортировка:
              
              <Select value={this.state.sortBy}
                      options={selectSortBy}
                      isSearchable={false}
                      className="crs-sort"
                      classNamePrefix="crs-sort"
                      onChange={this.handleSortSelect}/>
            </div>
            
            <div className="program-filter-list__grid">
              {items.length ? items.map((item, index) => (
                <Link to={item.link} className="program-list-item" key={index}>
                  <div className="program-list-item__for">{item.forWhom}</div>
                  
                  {item.tag && <div className="program-list-item__tag">{item.tag}</div>}
                  
                  <div className="program-list-item__img">
                    <img src={item.img} alt=""/>
                    
                    <div className="program-list-item__arrow">
                    
                    </div>
                  </div>
                  
                  <div className="program-list-item-info">
                    <div className="program-list-item__name">{item.name}</div>
                    
                    <div className="program-list-item-info__bottom">
                      <div className="program-list-item__data-item">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.95622 1.22628C7.1679 0.437956 6.1168 0 5.00001 0C3.88323 0 2.83213 0.437956 2.02191 1.22628C0.554758 2.69343 0.379576 5.45255 1.62775 7.13869L5.00001 12L8.35038 7.13869C9.62045 5.45255 9.42337 2.69343 7.95622 1.22628ZM5.04381 5.69343C4.18979 5.69343 3.51096 5.0146 3.51096 4.16058C3.51096 3.30657 4.18979 2.62774 5.04381 2.62774C5.89782 2.62774 6.57666 3.30657 6.57666 4.16058C6.57666 5.0146 5.87593 5.69343 5.04381 5.69343Z"
                            fill="#D0101B"/>
                        </svg>
                        
                        <span>{item.place}</span>
                      </div>
                      
                      <div className="program-list-item__data-item">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 0C2.69136 0 0 2.69136 0 6C0 9.30864 2.69136 12 6 12C9.30864 12 12 9.30864 12 6C12 2.69136 9.30864 0 6 0ZM6 10.716C3.39506 10.716 1.28395 8.59259 1.28395 6C1.28395 3.40741 3.40741 1.28395 6 1.28395C8.59259 1.28395 10.716 3.40741 10.716 6C10.716 8.59259 8.60494 10.716 6 10.716Z"
                            fill="#D0101B"/>
                          <path
                            d="M9.12347 5.81484H6.43211V2.56792C6.43211 2.29632 6.20989 2.0741 5.93829 2.0741C5.66668 2.0741 5.44446 2.29632 5.44446 2.56792V6.30866C5.44446 6.58027 5.66668 6.80249 5.93829 6.80249H9.12347C9.39507 6.80249 9.6173 6.58027 9.6173 6.30866C9.6173 6.03706 9.39507 5.81484 9.12347 5.81484Z"
                            fill="#D0101B"/>
                        </svg>
                        
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )) : <span className="program-filter-list__no-results">По заданным параметрам ничего не найдено</span>}
            </div>
            
            <div className="program-filter-btn__container">
              {items.length >= showQuantity &&
              <Button className="btn--primary btn--arrow program-filter__btn" onClick={this.handleShowMoreClick}>
                Показать еще
                
                <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.01702 16.336V16.994H4.98502V16.28L-0.000976562 11.881L1.14602 10.631L4.98502 14.019V0H7.01702V14.024L10.856 10.56L12.003 11.837L7.01702 16.336Z"
                        fill="#778899"/>
                </svg>
              </Button>}
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export {ProgramFilter};