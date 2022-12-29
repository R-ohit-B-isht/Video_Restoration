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

{name}

<button class="btn--xs u-gap-2"on:click={logout}>Logout</button> 