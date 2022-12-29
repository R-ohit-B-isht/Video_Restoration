import firebase from 'firebase/app'
import 'firebase/auth'
import {firebaseConfig} from './config'
import {readable} from 'svelte/store'
firebase.initializeApp(firebaseConfig)


const userMapper=(claims)=>({
id:claims.user_id,
email:claims.email,
name:claims.name,
picture:claims.picture
})
export const initAuth = (useRedirect=false) => {
    const auth = firebase.auth()
    const loginWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        if(useRedirect){
            auth.signInWithRedirect(provider)
        }else{
            auth.signInWithPopup(provider)
        }
    }
    const user= readable(null, set=>{
        const unsub=auth.onAuthStateChanged(async fireuser=>{
            if(fireuser){
                const token=await fireuser.getIdTokenResult();
                const user=userMapper(token.claims) 
                set(user)
            }
            else
            set(null)
        })
        return unsub
    })
return {loginWithGoogle,user}
}