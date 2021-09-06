<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Forms from './components/Forms.svelte';
	import Template from './components/template.svelte';
	import CV from './Stores/CVStore';
	$: CVData = $CV;
</script>

<Header></Header>

<div class="uk-container">
	<div class="uk-padding-small" uk-grid>
		<div class="uk-width-1-4@m" >
			<Forms></Forms>	
		</div>
		<div class="uk-width-3-4@m" >
			<Template CV={CVData} ></Template>
		</div>
	</div>
</div>

<Footer></Footer>

<style>
	.uk-container{
		padding: 20px 0;
	}
</style>