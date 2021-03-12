export const initialState ={

   user:null,
   playlists:[],
   playing: false,
   item:null,
   /*token: 'BQBtu4EUAN0QnucFrO2OqhmGuSywGVloXa47DXMsctPWIyhfSwS6mifAdJSebK9SRRClw7st4DK0AV7dpptmWjduWew5CVW5qwDznaxQyK-BBTf1_YHOD5Cw81Rhbrqw5ipdDe74nxMnIzqbtk7__uuntfnuWN0N5N0u5xs8aMXnZpw6',*/
 };

const reducer =(state,action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':

      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
     return {
       ...state,
       token: action.token,
     };
     case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
      case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
      default:
      return state;
  }
}

export default reducer;
