import { createStore } from 'vuex';
import { getAll } from '@/api/peopleApi';
import VuexPersistence from 'vuex-persist';

export default createStore({
  state: () => ({
    inptName:  '',
    winners:   [
      [],
    ],
    foundName: false,
    showMsg:   false,
    validEmail: false,
    error:      '',
    duplicate:  false,
    day:        0,
  }),
  getters: {},
  actions: {
    checkName({ commit }, evt ) {

      commit( 'closeErr' );

      if ( evt !== undefined && evt.type === 'keydown' && evt.key !== 'Enter' )
        return;

      getAll( true )
        .then( ( names ) => {
          commit( 'checkName', names );
        })
        .catch( ( err ) => {
          commit( 'showError', err );
        });
    },
  },
  mutations: {
    updateInpt( state, val ) {
      state.inptName = val;
      state.error = '';
    },
    checkName( state, names ) {

      let found = false;

      if ( state.day - 1 >= 0 && state.winners[state.day - 1].indexOf( state.inptName ) !== -1 ) {
        state.foundName = found;
        state.showMsg = true;
        state.duplicate = true;
        return;
      }

      if ( state.winners[state.day].indexOf( state.inptName ) !== -1 ) {
        state.foundName = found;
        state.showMsg = true;
        state.duplicate = true;
        return;
      }

      if ( state.winners[state.day].length === 10 ) {
        state.foundName = found;
        state.showMsg = true;
        state.duplicate = true;
        return;
      }

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
      state.duplicate = false;
    },

    addWinner( state ) {
      state.winners[state.day].push( state.inptName );
      state.inptName = '';
      state.showMsg = false;
    },


    updateValid( state, value ) {
      state.validEmail = value;
    },

    showError( state, err ) {
      state.error = err;
    },

    closeErr( state ) {
      state.error = '';
    },


    changeDay( state ) {

      state.day++;
      state.winners.push([]);

    },
  },
  modules: {},
  plugins: [
    new VuexPersistence().plugin,
  ],
});