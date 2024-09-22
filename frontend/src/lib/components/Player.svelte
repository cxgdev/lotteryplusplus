<script lang="ts">
	import convertPrefixSuffix from '$lib/functions/convertPrefixSuffix';
	import fetchPlayerPlan from '$lib/functions/fetchPlayerPlan';
	import type { PlanResponses } from '$lib/types/PlanResponses';
	import { onMount } from 'svelte';

	export let name = '';
	let data: PlanResponses.PlayerResponse;
    let prefix = "";
    let suffix = "";

	onMount(async () => {
		data = await fetchPlayerPlan(name)
        let prefixSuffix = await convertPrefixSuffix(data);
        prefix = prefixSuffix.prefix;
        suffix = prefixSuffix.suffix;
	});

	// Function to insert the player's name into the last empty span with a color style
	function insertNameInPrefix(prefix: string, playerName: string): string {
		const emptySpanRegex =
			/(<span[^>]*style="[^"]*">)(<\/span>)(?!.*(<span[^>]*style="[^"]*">)(<\/span>))/;
		return prefix.replace(emptySpanRegex, ` $1${playerName}$2`);
	}
</script>

<div class="player">
	<img src={`https://mc-heads.net/avatar/${name}/100`} height="100%" alt={name} />
	<div class="name">
		{#if data}
                {#if data.info.operator}
				<span>{@html insertNameInPrefix(prefix, data.info.name)}</span>
			{:else}
				<span>{@html prefix}</span>
				<span>{data.info.name}</span>
			{/if}
			<span>{@html suffix}</span>
		{:else}
			<span>Loading...</span>
		{/if}
	</div>
</div>

<style>
	.player {
		background-color: rgba(255, 255, 255, 0.15);
		border-radius: 8px;
		height: 75px;
		padding: 12px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.player > img {
		border-radius: 6px;
	}

    .name > span {
        text-overflow: ellipsis;
    }
</style>
