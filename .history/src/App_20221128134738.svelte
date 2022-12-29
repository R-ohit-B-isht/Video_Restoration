<script>
	import {fade,fly,scale,slide} from"svelte/transition";
	import Dashboard from "./Dashboard.svelte";
	
	let version;
	const get_version=async()=>{
		version=await api.GetVersion()
	}
	let user={
		name:"Rohit",
		username:"rb",
		loggedin:true,
	}
</script>

<main>
	

	
	{#if user.loggedin}
		<div in:fade>
		<Dashboard  on:logout={()=>user.loggedin=false} {...user}/>
		</div>
		{:else}
		<button in:fly={{x:200}} on:click={() => user.loggedin=true}>Login</button>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>