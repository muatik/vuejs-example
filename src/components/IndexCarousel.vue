<template>
  <div class="bd-example">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/carousel/slide-01.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption d-md-block">
            <h5>First slide label</h5>
            <p class="d-none d-md-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel/slide-02.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption d-md-block">
            <h5>Second slide label</h5>
            <p class="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/carousel/slide-03.jpg" class="d-block w-100" alt="a">
          <div class="carousel-caption">
            <h5>Third slide label</h5>
            <p class="d-none d-md-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCarousel',
}
</script>

<style scoped>
.carousel-item {
  max-height: 350px;
}

.item img {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 350px;
}

</style>

