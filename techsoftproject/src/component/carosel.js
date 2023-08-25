import React from"react";
import img from "./images.png"
export default function Carosel(){
    return(
        <div>
            <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={img}  alt="Los Angeles" class="d-block w-10" height="20%" width="20%"/>
  </div>
  <div class="carousel-item">
  <img src={img}  alt="Los Angeles" class="d-block w-10" height="20%" width="20%"/>
  </div>
  <div class="carousel-item">
  <img src={img}  alt="Los Angeles" class="d-block w-10"height="20%" width="20%"/>
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
        </div>
    )
}