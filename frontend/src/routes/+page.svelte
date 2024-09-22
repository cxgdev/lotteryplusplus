<script>
	import GridBox from "$lib/components/GridBox.svelte";
	import Player from "$lib/components/Player.svelte";

</script>
<div class="grid">
	<GridBox title="Active Lottery" area="current">

	</GridBox>
	<GridBox title="You" area="me">
		<Player name="bananababoo" />
	</GridBox>
	<GridBox title="Top 10 Gamblas" area="top">

	</GridBox>
	<GridBox title="Recent" area="recent">

	</GridBox>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 33.33% 33.33% 33.33%;
		height: 100%;
		grid-template-areas:
			"current me recent"
			"current top recent";
	}
</style>