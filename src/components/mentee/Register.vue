<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Mentee Register</h3>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label>First Name</Label>
                    <input type="text" class="form-control"
                           id = "firstName" v-model="mentee.first_name" placeholder="First Name" required
                    />
<!--                  <div class="invalid-feedback" id="feedback-1" v-if="mentee.errors[0]">{{ mentee.errors[0].message }}-->
<!--                  </div>-->
                </div>


                <div class="form-group">
                    <label>Last Name</Label>
                    <input type="text" class="form-control"
                           id = "lastName" v-model="mentee.last_name" placeholder="Last Name" required
                    />
<!--                  <div class="invalid-feedback" id="feedback-2" v-if="mentee.errors[1]">{{ mentee.errors[1].message }}-->
<!--                  </div>-->
                </div>


                <div class="form-group">
                    <label>Email</Label>
                    <input type="email" class="form-control" v-model="mentee.email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label>Password</Label>
                    <input type="password" class="form-control" v-bind:class="{'is-invalid': mentee.passwordError}"
                           id = "password" v-model="mentee.password.password" placeholder="Password"
                        required />
                   <div class="invalid-feedback" id="feedback-3" v-if="mentee.errors[0]">{{ mentee.errors[0].message }}
                   </div>
                </div>
                <div class="form-group">
                    <label>Confirm Password</Label>
                    <input type="password" class="form-control" v-bind:class="{'is-invalid': mentee.confirmError}"
                           id = "confirm" v-model="mentee.password.confirm"
                        placeholder="Confirm Password" required />
                   <div class="invalid-feedback" id="feedback-4" v-if="mentee.errors[1]">{{ mentee.errors[1].message }}
                   </div>
                </div>
                <!-- <div class="form-group">
                    <label>Birth Date</Label>
                    <input type="date" class="form-control" v-model="mentee.birth_date" placeholder="Birth Date"
                        required />
                </div>
                <div class="form-group">
                    <label>Education Level</Label>
                    <input type="text" class="form-control" v-model="mentee.education_level"
                        placeholder="Occupation Title" required />
                </div>
                <div class="form-group">
                    <label>Work Experience</Label>
                    <input type="text" class="form-control" v-model="mentee.work_experience" placeholder="Work Experience"
                        required />
                </div>
                <div class="form-group">
                    <label>Year of Experience</Label>
                    <input type="text" class="form-control" v-model="mentee.year_of_experience"
                        placeholder="Year of Experience" required />
                </div>
                <div class="form-group">
                    <label>Skills</Label>
                    <input type="text" class="form-control" v-model="mentee.skills" placeholder="Skills" required />
                </div>
                <div class="form-group">
                    <label>Interested Industry</Label>
                    <input type="text" class="form-control" v-model="mentee.interested_industry"
                        placeholder="Interested Industry" required />
                </div>
                <div class="form-group">
                    <label>LinkedIn</Label>
                    <input type="text" class="form-control" v-model="mentee.linkedin" placeholder="LinkedIn" />
                </div> -->

                <div class="form-group">
                    <button type="submit" class="btn btn-danger btn-block">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import EventBus from '@/eventbus';
import swal from 'sweetalert'
// import {useVuelidate} from '@vuelidate/core';
// import {email, minLength, required} from '@vuelidate/validators';

export default {
  // setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            mentee: {
                first_name: '',
                last_name: '',
                email: '',
                password: {
                  password: '',
                  confirm: '',
                },
                firstnameError: false,
                lastnameError: false,
                emailError: false,
                passwordError: false,
                confirmError: false,
                errors: []
                // birth_date: Date,
                // education_level: '',
                // work_experience: '',
                // skills: [],
                // interested_industry: [],
                // linkedin: ''
            }
        }
    },
  //
  // validations() {
  //   return {
  //     mentee: {
  //       first_name: {minLength:minLength(this.requiredNameLength),required},
  //       last_name: {required},
  //       email: {required, email},
  //       password: {
  //         password: {required},
  //         confirm: {required},
  //       }
  //     }
  //   }
  // },
  //   computed: {
  //     validPassword(psw) {
  //       // var pswRegx = /^[A-Za-z]\w{7,14}$/;
  //       const pswRegx = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
  //       if (psw.value.match(pswRegx)) {
  //         alert("valid password")
  //         return true;
  //       } else {
  //         alert("invalid password")
  //         return false
  //       }
  //     }
  //   },


    methods: {
        async submit() {
          this.errors = [];
          // First name validation
          // const firstnameLen = this.mentee.first_name.length;
          // if (firstnameLen < 2 || firstnameLen > 30) {
          //   this.mentee.firstnameError = true;
          //   this.mentee.errors.push({
          //     'message': 'First Name must be between 2 to 30 characters long.'
          //   });
          //   console.log("first name length error");
          // } else {
          //   document.getElementById('firstName').className =  "form-control is-valid";
          //   this.mentee.errors.push({
          //     'message': 'Validated.'
          //   });
          //   document.getElementById('feedback-1').className = "valid-feedback";
          //   // alert("submitting");
          //   console.log("first name length correct");
          // }
          // v-bind:class="{'is-invalid': mentee.lastnameError}"

          // Last name validation
          // const lastnameLen = this.mentee.last_name.length;
          // if (lastnameLen < 2 || lastnameLen > 30) {
          //   this.mentee.lastnameError = true;
          //   this.mentee.errors.push({
          //     'message': 'Last Name must be between 2 to 30 characters long.'
          //   });
          //   console.log("last name length error");
          // } else {
          //   document.getElementById('lastName').className =  "form-control is-valid";
          //   this.mentee.errors.push({
          //     'message': 'Validated.'
          //   });
          //   document.getElementById('feedback-2').className = "valid-feedback";
          //   // alert("submitting");
          //   console.log("last name length correct");
          // }
          // Email validate
          // email validate
          // if(this.mentee.email.length < 10 || this.mentee.email.search('@') == -1) {
          //   this.emailError = true;
          //   this.mentee.errors.push({
          //     'message': 'Please provide a valid email address.'
          //   });
          // } else {
          //   document.getElementById('email').className = "form-control is-valid";
          //   this.mentee.errors.push({
          //     'message': 'Validated.'
          //   });
          //   document.getElementById('feedback-2').className = "valid-feedback";
          // }
          // // Password validation
          const psw1 = this.mentee.password.password;
          const psw2 = this.mentee.password.confirm;
          const pswRegx = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
          if (!pswRegx.test(psw1)) {
            this.mentee.passwordError = true;
            this.mentee.errors.push({
              'message': 'Password must be Minimum eight characters, at least one letter, one number and one special character.'
            });
            console.log("password error");
          } else {
            document.getElementById('password').className =  'form-control is-valid';
            this.mentee.errors.push({
              'message': 'Validated.'
            });
            document.getElementById('feedback-3').className = 'valid-feedback';
          }
          console.log(this.mentee.errors);

          // Same password validate
          if (psw1 !== psw2) {
            this.mentee.confirmError = true;
            this.mentee.errors.push({
              'message': 'Password does not match.'
            });
            console.log("password does not match");
          } else {
            document.getElementById('confirm').className =  'form-control is-valid';
            this.mentee.errors.push({
              'message': 'Validated.'
            });
            document.getElementById('feedback-4').className = 'valid-feedback';
          }
          console.log(this.mentee.errors[2].message);

            try {
              let response = await this.$http.post("/mentee/mentee-register", this.mentee);
              console.log(response);
              let token = response.data.token;
              if (token) {
                localStorage.setItem("jwt", token);
                EventBus.$emit('mentee-login', true);
                this.$router.push("/mentee-profile");
                swal("Success", "Registration Was successful", "success");
              } else {
                swal("Error", "Something Went Wrong", "error");
              }
            } catch (err) {
              let error = err.response;
              if (error.status == 409) {
                swal("Error", error.data.message, "error");
              } else {
                swal("Error", err.message, "error");
              }
            }
        },
    }
}
</script>