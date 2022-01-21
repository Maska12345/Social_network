const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initinalState = {
     users: [
    //     {id: 1,photoUrl:'https://rusradio.lt/wp-content/uploads/2021/12/maxkorzh-logo.jpg',followed:false, fullName: 'Max', status: 'I am react developer',location:{country:'Ukraine',city:'Vinnytsia'}},
    //     {id: 2,photoUrl:'https://upload.wikimedia.org/wikipedia/commons/c/cf/%D0%94%D0%B5%D0%BD%D0%B8%D1%81_%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8%D1%85%D0%B8%D0%BD_%28cropped%29.png',followed:true, fullName: 'Denis', status: 'I like big dogs',location:{country:'Belarus',city:'Minsk'}},
    //     {id: 3,photoUrl:'https://odnaminyta.com/wp-content/uploads/2020/12/05b6de907f0014d85d1af221ec0c3078.jpg',followed:true, fullName: 'Stepan', status: 'Open to work',location:{country:'Ukraine',city:'Kyiv'}},
    //     {id: 4,photoUrl:'https://hostelcity.su/wp-content/uploads/po-vostochnomu-kalendaryu-aleksandr-medvedev-vladimirovich-krolik.jpg',followed:false, fullName: 'Shura', status: 'I find new friends',location:{country:'Poland',city:'Krakow'}},
    //     {id: 5,photoUrl:'https://sobesednik.ru/sites/default/files/complex_images/images/gena_bukin.jpg',followed:true, fullName: 'Gena', status: 'I can help with Android App',location:{country:'USA',city:'Los-Angeles'}},
    //
     ]
}

const usersReducer = (state = initinalState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return{...u,followed:true}
                    }
                    return u;
                })
        }
        case UNFOLLOW:
            return {
                ...state,
                users:state.users.map(u=>{
                    if(u.id === action.userId){
                        return{...u,followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:[...state.users,...action.users]
            }
        default:
            return state;
    }
}


export const followAC = (userId) => {
    return {
        type: FOLLOW,userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,users
    }
}
export default usersReducer;