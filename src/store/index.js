import Vue from 'vue'
import Vuex from 'vuex'
// import { initializeApp } from "firebase/app";
import { 
  getAuth
} from '@firebase/auth';
import { getFirestore, FieldValue, doc, getDoc, query, getDocs, collection, setDoc } from 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    userUID: null,
    userEmail: null,
    userName: null,
    userToken: null,
    userAdmin: false,
    userItems: [],
    userItemsHeader: [],
    allUsers: [],
    selectedUserItems: [],
    selectedUserItemsHeaders: [],
    uploadMessage: "",
    enableUpload: true,
    loading: false
  },
  getters: {
    getUserName: state => {
      return state.userName
    },
    getUserEmail: state => {
      return state.userEmail
    },
    getUserAdmin: state => {
      return state.userAdmin
    },
    getAllUsers: state => {
      return state.allUsers
    },
    getUploadMessage: state => {
      return state.uploadMessage
    },
    getEnableUpload: state => {
      return state.enableUpload
    },
    getUserItems: state => {
      return state.userItems
    },
    getUserItemsHeader: state => {
      return state.userItemsHeader
    },
    getSelectedUserItems: state => {
      return state.selectedUserItems
    },
    getSelectedUserItemsHeaders: state => {
      return state.selectedUserItemsHeaders
    },
    getLoading: state => {
      return state.loading
    }
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.userUID = doc.id
      state.userEmail = doc.data().email
      state.userName = doc.data().name
      state.userAdmin = doc.data().admin
    },
    mutateAllUsers(state, users) {
      state.allUsers = []
      users.forEach((user) => {
        state.allUsers.push({
          id: user.id,
          name: user.data().name,
          email: user.data().email
        })
      })
    },
    mutateUploadMessage(state, message) {
      state.uploadMessage = message
    },
    mutateEnableUpload(state, value) {
      state.uploadComplete = value
    },
    mutateUserItems(state, value) {
      state.userItems = value
    },
    mutateUserItemsHeaders(state, value) {
      state.userItemsHeader = value
    },
    mutateSelectedUserItems(state, value) {
      state.selectedUserItems = value
    },
    mutateSelectedUserItemsHeaders(state, value) {
      state.selectedUserItemsHeaders = value
    },
    mutateLoading(state, value) {
      state.loading = value
    }
  },

  actions: {
    async getCurrentUser({ commit }) {
      commit("mutateLoading", true)
      const dataBase = await doc(getFirestore(), `users/${getAuth().currentUser.uid}`)
      const dbResults = await getDoc(dataBase)
      const admin = dbResults.data().admin
      
      if (admin && admin===true) {
        this.dispatch("getAllUsers")
      }

      this.dispatch("getMyItems")
      commit("setProfileInfo", dbResults)
    },

    async getAllUsers({ commit }) {
      const customUsersQuery = query(
        collection(getFirestore(), 'users')
      )

      const userQuerySnapshot = await getDocs(customUsersQuery)
      commit("mutateAllUsers", userQuerySnapshot)
    },

    async getMyItems({ commit }) {
      // get table items to display on homepage
      const dataBase = await doc(getFirestore(), `customerData/${getAuth().currentUser.email}`)
      const dbResults = await getDoc(dataBase)

      if(dbResults.data()) {
        commit("mutateUserItems", dbResults.data().items)
        commit("mutateUserItemsHeaders", Object.keys(dbResults.data().items[0]))
      }
      commit("mutateLoading", false)
    },

    // Whenever admin selects the user, the table for that specific user loads
    async getUserItems({ commit }, user) {
      commit("mutateLoading", true)
      const dataBase = await doc(getFirestore(), `customerData/${user}`)
      const dbResults = await getDoc(dataBase)

      if (dbResults.data()) {
        commit("mutateSelectedUserItems", dbResults.data().items)
        commit("mutateSelectedUserItemsHeaders", Object.keys(dbResults.data().items[0]))
      }
      commit("mutateLoading", false)
    },

    async uploadAllDocsUser({ commit }, data) {
      commit("mutateEnableUpload", false)

      // Check if the current user is admin
      const userdb = await doc(getFirestore(), `users/${getAuth().currentUser.uid}`)
      const dbResults = await getDoc(userdb)
      const admin = dbResults.data().admin

      // if user is admin upload the data
      if (admin && admin===true) {
        const dataBase = await doc(getFirestore(), `customerData/${data.email}`)
        setDoc(dataBase, data)
          .then(() => {
            commit("mutateUploadMessage", 'Upload csv complete')
            commit("mutateEnableUpload", true)
          })
          .catch((error) => {
            commit("mutateUploadMessage", `Error! ${error}`)
            commit("mutateEnableUpload", true)
          })
      } else {
        commit("mutateUploadMessage", 'You are not admin!!')
        commit("mutateEnableUpload", true)
      }
    }
  },
  modules: {
  }
})
