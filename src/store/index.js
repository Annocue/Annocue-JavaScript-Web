import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from 'firebase'
require('firebase/firestore')

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    email: null,
    db: null,
    docId: null
  },
  getters: {
    getUser: state => state.user,
    getEmail: state => state.email,
    getDb: state => state.db,
    getDocId: state => state.docId
  },
  mutations: {
    setUser: (state) => {
      state.user = Firebase.auth().currentUser
      if (state.user !== null) {
        state.email = state.user.email
      }
    },
    setDb: (state) => {
      state.db = Firebase.firestore()
    },
    setDocId: (state) => {
      state.db.collection('users')
        .where('email', '==', state.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            state.docId = doc.id
            console.log(doc.id)
          })
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
        })
    }
  },
  actions: {
    setUser: context => context.commit('setUser'),
    setDb: context => context.commit('setDb'),
    setDocId: context => context.commit('setDocId')
  }
})
