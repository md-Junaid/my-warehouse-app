<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="500"
  >
    <v-card
    >
    <v-form ref="updateForm" @submit.prevent="submit" class="text-right">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                :label="getUserName"
                v-model="currentName"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email"
                :value="getUserEmail"
                filled
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Current Password"
                v-model="currentPassword"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="New Password"
                v-model="newPassword"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          text
          @click="closeDialog()"
        >
          Close
        </v-btn>
        <v-btn
          color="#4158D0"
          outlined
          type="submit"
          :loading="loading"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth"
import { getFirestore, doc, updateDoc } from 'firebase/firestore'

  export default {
    name: 'UserInfoDialog',

    props:['dialog'],

    data() {
      return {
        currentName: '',
        loading: false,
        currentPassword: '',
        newPassword: '',
        show: false,
      }
    },

    computed: {
      ...mapGetters([
        'getUserName',
        'getUserEmail'
      ]),
    },

    methods: {
      closeDialog() {
        this.$emit("close")
      },

      async submit() {
        this.loading=true
        if (this.currentName) {
          const dataBase = doc(getFirestore(), `users/${getAuth().currentUser.uid}`)
          updateDoc(dataBase, { name: this.currentName })
          .catch((error) => {
            this.loading=false
            alert(`${error.message}`)
          })
        }

        if (this.newPassword) {
          //authenticate before changing password
          const credential = await EmailAuthProvider.credential(this.getUserEmail, this.currentPassword)

          await reauthenticateWithCredential(getAuth().currentUser, credential)
          .catch((error) => {
            alert(`${error.message}`)
          })

          //change password
          await updatePassword(getAuth().currentUser, this.newPassword)
            .catch((error) => {
              alert(`${error.message}`)
            })
        }

        this.loading = false
        this.$emit("close")
      },
    }
  }
</script>