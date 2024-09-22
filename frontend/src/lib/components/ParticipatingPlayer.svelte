<script>
    export let position = 1;
	export let player = '';
	export let prefix = '<span style="color: #f47fff;">[Discord Booster]</span>';
	export let suffix = '<span style="color: #d9a562;">[DUNE]</span>';
	export let tickets = 0;
</script>

<div class="player">
	<div>
        <span class="position">#{position}</span>
        <div class="divider" />
		<img src={`https://minotar.net/helm/${player}/32.png`} />
		{@html prefix}
		<span>{player} </span>
		{@html suffix}
	</div>
    <div>
        <span>{tickets} tickets</span>
    </div>
</div>

<style>
	.player {
		width: 100%;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		flex-direction: row;
		align-items: center;
        justify-content: space-between;
		padding: 6px;
		box-sizing: border-box;
		gap: 8px;
	}

    .player > div {
        display: flex;
		flex-direction: row;
		align-items: center;
		gap: 6px;
    }

	.player > div > img {
		height: 24px;
		border-radius: 4px;
	}

    .position {
        color: gray;
        margin-right: 8px;
        width: 20px;
    }
</style>
