import React from 'react'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'

function Carousel() {
  return (
    <div>
          <div id="carouselExample" class="carousel slide" >
              <div class="carousel-inner" style={{ height: "500px" }}>
                  <div class="carousel-item active" >
                      <img src={one} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" >
                      <img src={two} class="d-block w-100" alt="..."/>
                  </div>
                  <div class="carousel-item" >
                      <img src={three} class="d-block w-100" alt="..."/>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
    </div>
  )
}

export default Carousel