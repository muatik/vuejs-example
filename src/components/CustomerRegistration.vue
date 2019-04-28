<template>
  <div>
    <div
      v-show="isSigninFormActive"
      class="signinForm">
      <form
        @submit.prevent="onSigninFormSubmit">
        <h4>Sign in</h4>
        <div class="form-group">
          <label for="signinEmailOrPhone">Email or phone number:</label>
          <input v-model="email" type="email" class="form-control" id="signinEmailOrPhone" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="signinPassword">Password</label>
          <a href="" class="float-right">Forgot your password?</a>
          <input v-model="password" type="password" class="form-control" id="signinPassword" placeholder="Password">
        </div>
        <div class="form-group form-check">
          <input v-model="keepSignin" type="checkbox" class="form-check-input" id="signinKeepMeSignedIn">
          <label class="form-check-label" for="signinKeepMeSignedIn">Keep me signed in</label>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Sign in</button>
      </form>
      <div class="text-divider my-4 text-muted">
        <small>Do not you have an account?</small>
      </div>
      <button
        @click.prevent="toggleNewAccountForm"
        type="submit" class="btn btn-outline-secondary btn-block">Create a new account</button>
    </div>

    <div
      v-show="!isSigninFormActive"
      class="signupForm">
      <form
        @submit.prevent="onSignupFormSubmit">
        <h4>Create a new account</h4>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid last name is required.
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="signupEmailOrPhone">Email or phone number:</label>
          <input v-model="email" type="text" class="form-control" id="signupEmailOrPhone" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="signupPassword">Password</label>
          <input v-model="password" type="password" class="form-control" id="signupPassword" placeholder="Password">
          <small class="form-text text-muted">Passwords must be at least 6 characters</small>
        </div>
        <div class="form-group">
          <label for="signupPasswordn2">Re-enter Password</label>
          <input v-model="password2nd" type="password" class="form-control" id="signupPasswordn2" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Create a new account</button>
        <small class="form-text text-muted my-3">By creating an account, you agree to the <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a></small>
      </form>
      <div class="text-divider my-4 text-muted">
        <small>Already have an account?</small>
      </div>
      <button
        @click.prevent="toggleNewAccountForm"
        type="submit" class="btn btn-outline-secondary btn-block">Sign in</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CustomerRegistration',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2nd: '',
      keepSignin: true,
      isSigninFormActive: true
    }
  },
  methods: {
    toggleNewAccountForm () {
      this.isSigninFormActive = !this.isSigninFormActive
    },
    onSigninFormSubmit () {
      const form = {'email': this.email, 'password': this.password}
      this.$store.dispatch('customerStore/signin', form)
        .then(() => {
          this.$emit('customerSignedIn')
        })
    },
    onSignupFormSubmit () {
      const form = {
        'email': this.email,
        'password': this.password,
        'firstName': this.firstName,
        'lastName': this.lastName}
      this.$store.dispatch('customerStore/signup', form)
        .then(() => {
          this.$emit('customerSignedUp')
          this.$emit('customerSignedIn')
        })
    }
  }
}
</script>

<style scoped>
.text-divider {
  width:100%;
  text-align:center;
  border-bottom: 1px solid #aaa;
  line-height:0.1em; margin:10px 0 20px;
}
.text-divider small {
  background:#fff;
  padding:0 10px;
}
</style>
