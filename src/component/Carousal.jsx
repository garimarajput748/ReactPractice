import { useState } from "react";

const Carousal = () => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }
    const images = [
                    "https://images.pexels.com/photos/18032307/pexels-photo-18032307/free-photo-of-clouds-over-green-hills.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    "https://images.pexels.com/photos/14521146/pexels-photo-14521146.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                    "https://images.pexels.com/photos/18128034/pexels-photo-18128034/free-photo-of-detalle-del-ave-rojiazul.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
                ];
    return(
        <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider" style = {{ position:'relative' }}>
        <div className="left-arrow" onClick={prevSlide} style = {{ position:'absolute', top: 200, left: 120, color: 'white', cursor:'pointer', fontWeight:900, fontSize:40 }}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide} style = {{ position:'absolute', top: 200, right: 120, color: 'white', cursor:'pointer', fontWeight:800, fontSize:40}}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" width = { 1000} height={400} />
              </div>
            )
        )}
      </div>
    </div>
    );
}

export default Carousal;