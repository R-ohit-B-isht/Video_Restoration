<script>

	import {fade,fly,scale,slide} from"svelte/transition";
	import Dashboard from "./Dashboard.svelte";
	import VideoPlayer from 'svelte-video-player';
	import DropFile from '@svelte-parts/drop-file'
	// import f51 from '/images/Frame51.png.'
	let version;
	let realesr;
	let fileInput="C:/Users/rbtun/Videos/V/realesrgan-ncnn-vulkan-20220424-windows/input.jpg";
	let fileOutput="C:/Users/rbtun/Videos/V/realesrgan-ncnn-vulkan-20220424-windows/output.png";
	let mode=1;
	const get_version=async()=>{
		version=await api.GetVersion()
	}
	const apply_realesr=async()=>{
		let esrw=fileInput.split('\\').join('/')
		let out=esrw.substring(0,esrw.lastIndexOf("/")+1)+"output.png"
		console.log(out)
		realesr=await api.Realesrgan(esrw,out)
	}

  const onDrop = files => {
	fileInput=files[0].path;
	alert(fileInput)
} 

	let user={
		name:"Rohit",
		username:"rb",
		loggedin:true,
	}
function modeChande2(){
	if(mode==1){
		mode=2
	}
}
function modeChange(){
	if(mode!=1)
	mode=1
}


</script>

<main>
	<button class="ui button" on:click={apply_realesr}>get version</button>
	<h1>version is {realesr}<h1>
		<!-- <div class="ui placeholder segment">
			<div class="ui icon header">
			  <i class="video file outline icon" type="file" bind:this={fileInput}></i>
			</div>
			<div class="ui primary button">Add Video</div>
		  </div> -->
		  <DropFile onDrop={onDrop} bind:this={fileInput} />
		  <!-- <VideoPlayer 		  poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
		  src={fileInput} />	 -->
		  <!-- {#if fileInput} -->
		  <!-- <video

	src={fileInput}
	on:mousemove={handleMove}
	on:touchmove|preventDefault={handleMove}
	on:mousedown={handleMousedown}
	on:mouseup={handleMouseup}
>
	<track kind="captions">
</video> -->
<!-- {/if}		   -->
<!-- <div class="grid u-gap-2 u-text-center">
    <div class="grid-c-12 grid-r-1 u-text-right u-gap-1" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
		<div class="row level">
    <div class="col-xs-3 level-item">
    </div>
    <div class="col-m-9 level-item u-gap-2"><input type="name" value="find"><b>
		{#if user.loggedin}
		<div class="col-m-9 level-item u-gap-2 " in:fade>
		<Dashboard  on:logout={()=>user.loggedin=false} {...user}/>
		</div>
		{:else}
		<button class="btn--xs"in:fly={{x:200}} on:click={() => user.loggedin=true}>Login</button>
	{/if}</b>
</div>
</div>
		</div>

    
    <div class="grid-c-4 grid-r-6 row level " style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <b>
			<div class="col">
			<button>Dashboard</button></div>
			<div class="col">
				<button on:click={modeChange}>Themes</button></div>
			<button on:click={modeChande2}>Wallpaper</button>
		</b>
		
    </div>
	{#if mode==1}	
    <div class="grid-c-8 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Themes</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Theme1</b>
		<button class="btn--xs" on:click={applying}>Apply</button>
		</p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Theme2</b>
		<button class="btn--xs" on:click={applying}>Apply</button>
		</p>
    </div>
	{:else}
	<div class="grid-c-8 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Wallpapers</b></p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Wallpaper 1</b>
		<button class="btn--xs" on:click={a1}>Apply</button>
		</p>
    </div>
    <div class="grid-c-4 grid-r-3" style="background: linear-gradient(to right, #8e2de2, #4a00e0); color: #fff; border-radius: .25rem;">
        <p><b>Wallpaper 2</b>
		<button class="btn--xs" on:click={a2}>Apply</button>
		</p>
    </div>
	{/if}
    
</div>	 -->

	

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