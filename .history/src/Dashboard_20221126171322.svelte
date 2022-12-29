<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    export let username;
    // import Login from "./login.svelte";
    const logout = ()=>{
        dispatch("logout",{
            timestamp:Date.now(),
        });
    }
</script>
<!-- <Login/> -->
<h1>Welcome Back! {name} </h1>
<!-- <h2>username: {username}</h2>
<br>
<button on:click={logout}>Logout</button>  -->