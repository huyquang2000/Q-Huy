import { LOG_IN, LOG_OUT, SWITCH_THEME,CHANGE_LANG,GET_USER, GET_USER_NAME,SWITCH_TAB, NAME_TAB } from '../Action/actionTypes'
const initialSate = {
    Login: {
        isLogin: false,
        usernumber:'',
        username:'',
        table_tab: 'Hose',
        TabName_: 'HOSE'
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang:{
        langis:'vi'
    },
    ShowHide: {
        isShow: false
    },
}

const Reducer = (state = initialSate, action) => {
    
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
            case SWITCH_TAB:
                return {
                    ...state,
                    Login: {
                        ...state.Login,
                        table_tab: action.payload
                    }
                }
    
            case NAME_TAB:
                return {
                    ...state,
                    Login: {
                        ...state.Login,
                        TabName_: action.payload
                    }
                }
    
        case GET_USER:{
            return{
                ...state,   
                Login: {
                    ...state.Login,
                    usernumber:action.payload
                }
            }
        }

        case GET_USER_NAME:{
            return{
                ...state,
                Login:{
                    ...state.Login,
                    username:action.payload
                }
            }
        }

        case LOG_OUT:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        case SWITCH_THEME:
            return {
                ...state,
                Theme: {
                    ...state.Theme,
                    themeMode: action.payload
                }
            }
        case CHANGE_LANG:
            return{
                ...state,
                Lang: {
                    ...state.Lang,
                    langis: action.payload
                }
            }
        default:
            return state;
    }
}

export default Reducer;