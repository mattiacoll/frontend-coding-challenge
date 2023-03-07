import { createStore } from 'vuex'
import { getAll } from '@/api/peopleApi';

export default createStore({
  state: () => ({
    inptName:  '',
    winners:   [],
    foundName: false,
    showMsg:   false,
    validEmail: false,
  }),
  getters: {},
  actions: {
    checkName({ commit }) {

      getAll()
        .then( ( names ) => {
          commit( 'checkName', names );
        });
    },
  },
  mutations: {
    updateInpt( state, val ) {
      state.inptName = val;
    },
    checkName( state, names ) {

      let found = false;

      for ( let i = 0; i < names.length; i++ ) {
        if ( state.inptName === names[i].name ) {
          found = true;
          break;
        }
      }

      state.foundName = found;
      state.showMsg = true;

    },

    dismiss( state ) {
      state.showMsg = false;
    },

    addWinner( state ) {
      state.winners.push( state.inptName );
      state.inptName = '';
      state.showMsg = false;
    },


    updateValid( state, value ) {
      state.validEmail = value;
    }
  },
  modules: {}
})
