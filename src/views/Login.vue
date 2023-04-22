<template>
  <v-container fluid class="d-flex justify-center align-center">
    <div :style="{ minWidth: '40%'}" class="elevation-20">
    <v-tabs v-model="tab" :style="{borderRadius: '5px'}">
      <v-tab v-on:click="delForm()">Login</v-tab>
      <v-tab v-on:click="delForm()">Register</v-tab>
    </v-tabs>
    <v-card>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit" class="text-right">
          <v-text-field v-if="tab === 1" v-model="name" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            name="password"
            label="Password"
            :type="show1 ? 'text' : 'password'"
            placeholder="password"
            @click:append="show1 = !show1"
            :rules="[passwordRules.required]"
            required
          ></v-text-field>
          <v-text-field v-if="tab === 1"
            v-model="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="confirm password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :rules="[passwordRules.required]"
            @click:append="show1 = !show1"
            required
          ></v-text-field>
          <div class="red--text text-center font-weight-medium subtitle-1"> {{errorMessage}}</div>
          <v-btn rounded v-if="tab===0" type="submit" color="#4158D0" :style="{color: '#fff'}">
            Login
          </v-btn>
          <v-btn rounded v-if="tab===1" type="submit" color="#C850C0" :style="{color: '#fff'}">
            Register
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    
    </div>
  </v-container>
</template>

<script>
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from '@firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      tab: 0,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      show1: false,
      errorMessage: '',
      auth: getAuth(),
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: {
        required: value => !!value || 'Password is required',
      },
      db: getFirestore()
    }
  },

  methods: {
    delForm() {
      this.$refs.form.reset();
      this.errorMessage = ""
    },

    submit() {
      if(this.tab === 1) {
        if(this.password !== this.confirmPassword) {
          this.errorMessage = "Password did not match"
          return
        } else if (
          this.email !== "" &&
          this.name !== "" &&
          this.password !== "" &&
          this.confirmPassword !== ""
        ) {
          createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user
            const docRef = doc(this.db, `users/${user.uid}`)
            setDoc(docRef, {
              name: this.name,
              email: this.email,
              admin: false
            })
            this.$router.replace('/')
          })
          .catch((error) => {
            this.errorMessage = error.code.replace("auth/", "")
          })
        } else {
          this.errorMessage = "Please fill all the fields"
        }
      } else {
        signInWithEmailAndPassword(this.auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          this.$router.replace('/')
        })
        .catch((error) => {
          this.errorMessage = error.code.replace("auth/", "")
        })
      }
    }
  }
}
</script>
