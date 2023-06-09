<template>
  <v-container fluid class="d-flex justify-center align-center">
    <div :style="{minWidth: '100%'}">
      <v-sheet :elevation="20" min-width="100%" class="pa-6 rounded-xl">
        <v-row class="d-flex justify-space-between">
          <v-col cols="12" sm="4" md="3" class="my-auto text-center">
            <span class="subtitle-1 font-weight-medium my-auto"> 
              Logged In: 
              <v-chip
                class="ma-2 rounded-xl font-weight-bold title elevation-5"
                label
                color="#4158D0"
                :style="{color: 'white'}"
                @click="userInfoDialog=true"
              >
                <v-icon left>
                  mdi-account-circle-outline
                </v-icon>
                <span > {{ getUserName }} </span>
              </v-chip>
              <UserInfoDialog :dialog="userInfoDialog" @close="close()" />
            </span>
          </v-col>
          <v-col v-if="getUserAdmin===true" cols="12" sm="6">
            <v-autocomplete
              v-model="selectedUser"
              :items="getAllUsers"
              dense
              :item-text="item => `${item.name} (${item.email})`"
              label="Users"
              return-object
            ></v-autocomplete>
            <div class="text-center">
            <v-btn 
              rounded 
              color="#C850C0" 
              @click="openUploadDialog()" 
              :style="{color: '#fff'}"
              :loading="loading || loadingUpload"
            >
                Upload data
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="2" class="my-auto text-center">
            <v-btn class="my-auto" rounded color="#4158D0" @click="logout" :style="{color: '#fff'}">Logout</v-btn>
          </v-col>
          </v-row>
      </v-sheet>

      <v-data-table
        :headers="headers"
        :items="userItems"
        :items-per-page="5"
        :loading="loading"
        class="elevation-20 pa-4 rounded-xl mt-6"
      >
        <template slot="no-data">
          <p class="title">Sorry Nothing to display here, contact your admin :(</p>
        </template>
      </v-data-table>
    </div>
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <v-card
      >
      <v-card-title>Upload Data for selected user</v-card-title>
      <v-divider class="mx-4"></v-divider>
        <v-card-text class="pa-6">
          <v-file-input
            v-model="csv"
            show-size
            prepend-icon="mdi-paperclip"
            placeholder="Select csv file only" 
          ></v-file-input>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="#4158D0"
            outlined
            @click="upload()"
          >
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { getFirestore, FieldValue, doc, onSnapshot, query, collection, getDoc } from 'firebase/firestore'
import { mapGetters } from 'vuex'
import papa from 'papaparse'
import UserInfoDialog from '../components/UserInfoDialog'

  let unsubscribeItems;
  let unsubscribeUser;
  let unsubscribeAllUsers;

  export default {
    name: 'Home',

    data: () => ({
      loading: false,
      csv: null,
      dialog: false,
      userInfoDialog: false,
      selectedUser: {},
      headers: [],
      userItems: [],
      loadingUpload: false
    }),

    components: {
      UserInfoDialog
    },
    
    created() {
      getAuth().onAuthStateChanged(async (user) => {
        if(user) {
          this.$store.commit("mutateLoading", true)
          const dataBase = await doc(getFirestore(), `users/${getAuth().currentUser.uid}`)


          unsubscribeUser = onSnapshot(dataBase, (doc) => {
            if(doc.exists()) {
              this.$store.commit("setProfileInfo", doc)
            }
          })
          this.getMyItems()
          this.getAllUsersForAdmin()
        }
      })
    },

    computed: {
      ...mapGetters([
        'getUserName',
        'getUserEmail',
        'getUserAdmin',
        'getAllUsers',
        'getUploadMessage',
        'getUserItems',
        'getUserItemsHeader',
        'getSelectedUserItems',
        'getSelectedUserItemsHeaders',
        'getLoading',
        'getUnsubscribeItemsListener',
        'getLoadingUpload'
      ]),
    },

    watch: {
      getUploadMessage(newValue) {
        alert(newValue)
      },
      getUserItemsHeader(newValue) {
        this.headers=[]
        newValue.forEach((header) => {
          this.headers.push({
            text: header,
            value: header
          })
        })
      },
      getUserItems(newValue) {
        this.userItems = newValue
      },
      selectedUser(newValue) {
        if(newValue.id === getAuth().currentUser.uid) {
          this.headers=[]
          this.userItems = this.getUserItems
          this.getUserItemsHeader.forEach((header) => {
            this.headers.push({
              text: header,
              value: header
            })
          })
          return
        }
        this.headers=[]
        this.userItems=[]
        this.$store.dispatch("getUserItems", newValue.email)
      },
      getSelectedUserItemsHeaders(newValue) {
        newValue.forEach((header) => {
          this.headers.push({
            text: header,
            value: header
          })
        })
      },
      getSelectedUserItems(newValue) {
        this.userItems = newValue
      },
      getLoading(newValue) {
        this.loading=newValue
      },
      getLoadingUpload(newValue) {
        this.loadingUpload=newValue
      },
      getUnsubscribeItemsListener(newValue) {
        this.unsubscribeItems=newValue
      }
    },

    beforeDestroy() {
      unsubscribeUser()
      unsubscribeItems()
      if(this.getUserAdmin===true) {
        unsubscribeAllUsers()
      }
    },

    methods: {
      logout() {
        signOut(getAuth()).then(() => {
          this.$router.push('/login')
        }).catch((error) => {
          alert(error.message)
        })
      },

      async getMyItems() {
        const dataBase = await doc(getFirestore(), `customerData/${getAuth().currentUser.email}`)

        unsubscribeItems = onSnapshot(dataBase, (doc) => {
          if(doc.exists()) {
            this.$store.commit("mutateUserItems", doc.data().items)
            this.$store.commit("mutateUserItemsHeaders", Object.keys(doc.data().items[0]))
          }
        })

        this.$store.commit("mutateLoading", false)
      },

      async getAllUsersForAdmin() {
        const dataBase = await doc(getFirestore(), `users/${getAuth().currentUser.uid}`)
        const dbresults = await getDoc(dataBase)
        
        if (dbresults.data().admin===true) {
          const customUsersQuery = query(
            collection(getFirestore(), 'users')
          )

          unsubscribeAllUsers = onSnapshot(customUsersQuery, (docs) => {
            this.$store.commit("mutateAllUsers", docs)
          })
        }
      },

      openUploadDialog() {
        if(!this.selectedUser.id) {
          alert("Select a user first")
          return
        }
        this.dialog = true
      },

      close() {
        this.userInfoDialog = false
      },

      async upload() {
        var that = this
        if (this.csv == undefined) {
          alert("Please select a csv file")
          return
        }
        papa.parse(this.csv, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete(result){
            that.loading = false
            let data = {
              id: that.selectedUser.id,
              name: that.selectedUser.name,
              email: that.selectedUser.email,
              items: result.data
            }
            that.$store.dispatch("uploadAllDocsUser", data)
            that.dialog = false
            that.csv = null
          }
        })
      },
    }
  }
</script>
