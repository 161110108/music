import React from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
//this config is same as idangrous swiper
const config = {
  loop : true,
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletElement : 'li',
    hideOnClick :true,
    clickable :true,
  },
  on: {
    slideChange: function () {
    //   console.log(this.activeIndex);
    },
  },
};
class Example extends React.Component {

  swiperRef = null
  goNext = () => {//use `this.swiperRef.swiper` to get the instance of Swiper
    this.swiperRef.swiper.slideNext();
  }
  render() {
 
    return (
      <AwesomeSwiper ref={ref => (this.swiperRef = ref)} config={config} className="swiper">
        <div className="swiper-wrapper">
          {/* <div className="swiper-slide">slider1</div> */}
            {this.props.arr.map((item,index)=>{
                return <div key={index} className="swiper-slide"><img src={item} alt="加载中"/></div>
            })}
        </div>
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div> */}
      </AwesomeSwiper>
    )
  }
}
 
export default Example;