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
<div class="grid u-gap-2 u-text-center">
    <div class="grid-c-12 grid-r-1 u-text-right" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
		<div class="row level">
    <div class="col-xs-3 level-item">
    </div>
    <div class="col-xs-9 level-item"><input type="name" value="find"></div>
</div>
		
		<p><b>	{#if user.loggedin}
		<div in:fade>
		<Dashboard  on:logout={()=>user.loggedin=false} {...user}/>
		</div>
		{:else}
		<button in:fly={{x:200}} on:click={() => user.loggedin=true}>Login</button>
	{/if}</b></p>
    </div>
    <div class="grid-c-4 grid-r-12" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <b><p>Dashboard</p></b>
		
    </div>
    <div class="grid-c-8 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Main Content</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Sub Content</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Sub Content</b></p>
    </div>
    
</div>	

	

</main>

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	} */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>