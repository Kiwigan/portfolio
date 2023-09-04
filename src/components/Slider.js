import { useState } from 'react'
import quizlet1 from '../assets/images/quizlet1.jpg'
import quizlet2 from '../assets/images/quizlet2.jpg'
import quizlet3 from '../assets/images/quizlet3.jpg'
import quizlet4 from '../assets/images/quizlet4.jpg'

const Slider = () => {
    const slides = [
        {url: quizlet1, title: 'page1'},
        {url: quizlet2, title: 'page2'},
        {url: quizlet3, title: 'page3'},
        {url: quizlet4, title: 'page4'}
    ]

    const [currentIndex, setCurrentIndex] = useState(2);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        
      };
      const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

    return ( 
        <div className="slider">
            <div className="leftArrow" onClick={goToPrevious}>
                ❰
            </div>
            <div className="rightArrow" onClick={goToNext}>
                ❱
            </div>
            <div className="slides">
                <img src={slides[currentIndex].url} alt={currentIndex} />
            </div>
            <div className='dot-container'>
                {slides.map((slide, slideIndex) => (
                <div
                    className='dots'
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                >
                    ●
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default Slider;