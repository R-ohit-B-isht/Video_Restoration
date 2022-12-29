<script>
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
    export let name;
    export let username;

    const logout = ()=>{
        dispatch("logout",{
            timestamp:Date.now(),
        });
    }
</script>

<h1> {name} </h1>
<br>
<button on:click={logout}>Logout</button> 