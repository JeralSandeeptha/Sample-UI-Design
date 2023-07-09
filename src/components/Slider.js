import React from 'react'
import '../styles/Slider/slider.css';
import user from '../images/pexels-photo-3880976.jpeg?version=';

function Slider() {
  return (
    <div class="slider">
  <input class="slider__dot" type="radio" name="slider" title="slide1" checked="checked"/>
  <input class="slider__dot" type="radio" name="slider" title="slide2"/>
  <input class="slider__dot" type="radio" name="slider" title="slide3"/>
  <input class="slider__dot" type="radio" name="slider" title="slide4"/>
  <div class="slider__inner">
    <div class="slider__body">
        <h5>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</h5>
		<img src={user} alt="image" className='roundImage'/>
        <h2>MANAGER</h2>
        <h1>Jeral Sandeeptha</h1>
    </div>
    <div class="slider__body">
        <h5>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</h5>
		<img src={user} alt="image" className='roundImage'/>
        <h2>MANAGER</h2>
        <h1>Jeral Sandeptha</h1>
    </div>
    <div class="slider__body">
        <h5>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</h5>
		<img src={user} alt="image" className='roundImage'/>
        <h2>MANAGER</h2>
        <h1>Jeral Sandeptha</h1>
    </div>
    <div class="slider__body">
        <h5>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</h5>
		<img src={user} alt="image" className='roundImage'/>
        <h2>MANAGER</h2>
        <h1>Jeral Sandeptha</h1>
    </div>
  </div>
</div>

    )
}

export default Slider
