import { createStore } from "vuex";
 export default createStore ({
    state : {
        user: ""


    },
    actions : {
        
    },
    mutations: {
    
        loginpage (state,user){
            state.user=user  
            localStorage.setItem("user", JSON.stringify(user));

        }
        
    }
 })