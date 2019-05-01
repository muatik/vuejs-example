<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-light sticky-top  bg-white border-bottom shadow-sm p-md-3 px-md-4 mb-1">
      <a href="#" class="navbar-brand d-flex align-items-center my-0 mr-md-auto font-weight-normal">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2"
          viewBox="0 0 24 24" focusable="false">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" /></svg>
        <strong>Album</strong>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse mx-5 " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="sale" class="nav-link">Sales</router-link>
          </li>
          <li class="nav-item">
            <router-link to="bags" class="nav-link">Bags</router-link>
          </li>
          <li class="nav-item">
            <router-link to="lethers" class="nav-link">Lethers</router-link>
          </li>
        </ul>
        <form class="form-inline my-2">
          <a class="btn btn-outline-primary mr-sm-2" href="#">Sign up</a>
          <cart-button></cart-button>
        </form>
      </div>
    </nav>

    <router-view class="page-content" />

    <div class="container-fluid footer">
      <footer class="pt-3 my-md-4 pt-md-4">
        <div class="row">
          <!-- <div class="col-12 col-md">
            <img class="mb-2" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24">
            <small class="d-block mb-3 text-muted">© 2017-2019</small>
          </div> -->
          <div class="col-12 col-md-3">
            <h5>GET IN TOUCH</h5>
            <small class="text-muted text-small">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</small>
            <div class="py-4">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>

          <div class="col-12 col-md-2">
            <h5>FEATURES</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>

          <div class="col-12 col-md-2">
            <h5>RESOURCES</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-2">
            <h5>ABOUT</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-3">
            <form class="col-10">
              <h5>NEWSLETTER</h5>
              <div class="form-group">
                <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <button type="submit" class="btn btn-dark">Subscribe</button>
            </form>
          </div>

        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import CartButton from './components/CartButton'

export default {
  name: 'App',
  components: {
    CartButton
  }
}
</script>

<style scoped>
nav {
  margin-bottom: 0 !important;
}
.page-content {
  /* background-color: #f8f9fa!important */
}
.footer {
  background-color: #641971;
  color: #c9aece;
  padding: 3% 10%;
  margin: 100px 0 0 0;
}
.footer h5 {
  color: #e2cbe6!important;
}
.footer .text-muted{
  color: #c9aece!important
}
.footer a {
  color: #c9aece!important;
  display: inline-block;
  padding: 3px 0;
}
</style>
