<script>
	import {fade,fly,scale,slide} from"svelte/transition";
	import Dashboard from "./Dashboard.svelte";
	// import f51 from 'src/Frame 51.png.'
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
    <div class="grid-c-12 grid-r-1 u-text-right u-gap-1" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
		<div class="row level">
    <div class="col-xs-3 level-item">
    </div>
    <div class="col-xs-9 level-item u-gap-2"><input type="name" value="find"><b>	{#if user.loggedin}
		<div class="col-xs-9 level-item u-gap-2 center" in:fade>
		<Dashboard  on:logout={()=>user.loggedin=false} {...user}/>
		</div>
		{:else}
		<button class="btn--xs"in:fly={{x:200}} on:click={() => user.loggedin=true}>Login</button>
	{/if}</b>
</div>
</div>
		
		
    </div>
    <div class="grid-c-4 grid-r-12 row level col-xs-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <b><button>Dashboard</button>
			<button>Wallpaper</button>
		</b>
		
    </div>
    <div class="grid-c-8 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b><img src="./Frame 51.png" alt="" srcset=""></b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Theme1</b>
		<button class="btn--xs">Apply</button>
		</p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Theme2</b>
		<button class="btn--xs">Apply</button>
		</p>
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