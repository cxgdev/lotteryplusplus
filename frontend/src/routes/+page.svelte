<script>
	import GridBox from '$lib/components/GridBox.svelte';
	import ParticipatingPlayer from '$lib/components/ParticipatingPlayer.svelte';

	const tickets = [
		{
			player: 'CXG_',
			prefix: '<span style="color: #f47fff;">[Discord Booster]</span>',
			suffix: '<span style="color: #d9a562;">[DUNE]</span>',
			tickets: 75
		},
		{
			player: 'LovelyBoy',
			prefix: '<span style="color: #BB0000;">[Photographer]</span>',
			suffix: '<span style="color: #BB3482;">[Carrot]</span>',
			tickets: 62
		},
		{
			player: 'ShadowWolf',
			prefix: '<span style="color: #1E90FF;">[Admin]</span>',
			suffix: '<span style="color: #FFD700;">[Golden]</span>',
			tickets: 54
		},
		{
			player: 'PixelPirate',
			prefix: '<span style="color: #FF8C00;">[Captain]</span>',
			suffix: '<span style="color: #008000;">[Emerald]</span>',
			tickets: 29
		},
		{
			player: 'NightOwl',
			prefix: '<span style="color: #800080;">[Moderator]</span>',
			suffix: '<span style="color: #4B0082;">[Amethyst]</span>',
			tickets: 13
		},
		{
			player: 'BlazingSun',
			prefix: '<span style="color: #FF4500;">[VIP]</span>',
			suffix: '<span style="color: #FFFF00;">[Solar]</span>',
			tickets: 5
		},
		{
			player: 'CXG_',
			prefix: '<span style="color: #f47fff;">[Discord Booster]</span>',
			suffix: '<span style="color: #d9a562;">[DUNE]</span>',
			tickets: 75
		},
		{
			player: 'LovelyBoy',
			prefix: '<span style="color: #BB0000;">[Photographer]</span>',
			suffix: '<span style="color: #BB3482;">[Carrot]</span>',
			tickets: 62
		},
		{
			player: 'ShadowWolf',
			prefix: '<span style="color: #1E90FF;">[Admin]</span>',
			suffix: '<span style="color: #FFD700;">[Golden]</span>',
			tickets: 54
		},
		{
			player: 'PixelPirate',
			prefix: '<span style="color: #FF8C00;">[Captain]</span>',
			suffix: '<span style="color: #008000;">[Emerald]</span>',
			tickets: 29
		},
		{
			player: 'NightOwl',
			prefix: '<span style="color: #800080;">[Moderator]</span>',
			suffix: '<span style="color: #4B0082;">[Amethyst]</span>',
			tickets: 13
		},
		{
			player: 'BlazingSun',
			prefix: '<span style="color: #FF4500;">[VIP]</span>',
			suffix: '<span style="color: #FFFF00;">[Solar]</span>',
			tickets: 5
		},
		{
			player: 'CXG_',
			prefix: '<span style="color: #f47fff;">[Discord Booster]</span>',
			suffix: '<span style="color: #d9a562;">[DUNE]</span>',
			tickets: 75
		},
		{
			player: 'LovelyBoy',
			prefix: '<span style="color: #BB0000;">[Photographer]</span>',
			suffix: '<span style="color: #BB3482;">[Carrot]</span>',
			tickets: 62
		},
		{
			player: 'ShadowWolf',
			prefix: '<span style="color: #1E90FF;">[Admin]</span>',
			suffix: '<span style="color: #FFD700;">[Golden]</span>',
			tickets: 54
		},
		{
			player: 'PixelPirate',
			prefix: '<span style="color: #FF8C00;">[Captain]</span>',
			suffix: '<span style="color: #008000;">[Emerald]</span>',
			tickets: 29
		},
		{
			player: 'NightOwl',
			prefix: '<span style="color: #800080;">[Moderator]</span>',
			suffix: '<span style="color: #4B0082;">[Amethyst]</span>',
			tickets: 13
		},
		{
			player: 'BlazingSun',
			prefix: '<span style="color: #FF4500;">[VIP]</span>',
			suffix: '<span style="color: #FFFF00;">[Solar]</span>',
			tickets: 5
		},
		{
			player: 'CXG_',
			prefix: '<span style="color: #f47fff;">[Discord Booster]</span>',
			suffix: '<span style="color: #d9a562;">[DUNE]</span>',
			tickets: 75
		},
		{
			player: 'LovelyBoy',
			prefix: '<span style="color: #BB0000;">[Photographer]</span>',
			suffix: '<span style="color: #BB3482;">[Carrot]</span>',
			tickets: 62
		},
		{
			player: 'ShadowWolf',
			prefix: '<span style="color: #1E90FF;">[Admin]</span>',
			suffix: '<span style="color: #FFD700;">[Golden]</span>',
			tickets: 54
		},
		{
			player: 'PixelPirate',
			prefix: '<span style="color: #FF8C00;">[Captain]</span>',
			suffix: '<span style="color: #008000;">[Emerald]</span>',
			tickets: 29
		},
		{
			player: 'NightOwl',
			prefix: '<span style="color: #800080;">[Moderator]</span>',
			suffix: '<span style="color: #4B0082;">[Amethyst]</span>',
			tickets: 13
		},
		{
			player: 'BlazingSun',
			prefix: '<span style="color: #FF4500;">[VIP]</span>',
			suffix: '<span style="color: #FFFF00;">[Solar]</span>',
			tickets: 5
		},
		{
			player: 'CXG_',
			prefix: '<span style="color: #f47fff;">[Discord Booster]</span>',
			suffix: '<span style="color: #d9a562;">[DUNE]</span>',
			tickets: 75
		},
		{
			player: 'LovelyBoy',
			prefix: '<span style="color: #BB0000;">[Photographer]</span>',
			suffix: '<span style="color: #BB3482;">[Carrot]</span>',
			tickets: 62
		},
		{
			player: 'ShadowWolf',
			prefix: '<span style="color: #1E90FF;">[Admin]</span>',
			suffix: '<span style="color: #FFD700;">[Golden]</span>',
			tickets: 54
		},
		{
			player: 'PixelPirate',
			prefix: '<span style="color: #FF8C00;">[Captain]</span>',
			suffix: '<span style="color: #008000;">[Emerald]</span>',
			tickets: 29
		},
		{
			player: 'NightOwl',
			prefix: '<span style="color: #800080;">[Moderator]</span>',
			suffix: '<span style="color: #4B0082;">[Amethyst]</span>',
			tickets: 13
		},
		{
			player: 'BlazingSun',
			prefix: '<span style="color: #FF4500;">[VIP]</span>',
			suffix: '<span style="color: #FFFF00;">[Solar]</span>',
			tickets: 5
		}
	];
</script>

<div class="grid">
	<div class="tickets">
		<GridBox title="Active Lottery">
			{#each tickets as ticket, index}
				<ParticipatingPlayer
					position={index + 1}
					player={ticket.player}
					tickets={ticket.tickets}
					prefix={ticket.prefix}
					suffix={ticket.suffix}
				/>
			{/each}
		</GridBox>
	</div>
	<div class="me">
		<GridBox title="You"></GridBox>
	</div>
	<div class="recent">
		<GridBox title="Recent"></GridBox>
	</div>
	<div class="top">
		<GridBox title="Top 10 Gamblas">
			{#each tickets as ticket, index}
				{#if index < 10}
					<ParticipatingPlayer
						position={index + 1}
						player={ticket.player}
						tickets={ticket.tickets}
						prefix={ticket.prefix}
						suffix={ticket.suffix}
					/>
				{/if}
			{/each}
		</GridBox>
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-template-rows: 15fr 95fr;
		grid-template-columns: 25fr 25fr 25fr;
		grid-gap: 18px;
		width: 100%;
		height: 100%;
		padding: 16px;
		grid-template-areas:
			'tickets me recent'
			'tickets top recent';
	}

	@media (max-width: 1100px) {
		.grid {
			grid-template-rows: 50fr 50fr;
			grid-template-columns: 100fr;
			grid-template-areas:
				'tickets me'
				'tickets recent'
				'tickets top';
		}
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-rows: 100%;
			grid-template-columns: 80vh;
			grid-template-areas:
				'me'
				'tickets'
				'tickets'
				'recent'
				'top';
		}
	}

	.grid > div {
		border-radius: 12px;
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		transition: all ease 250ms;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.grid > div:hover {
		transform: scale(1.01);
		backdrop-filter: blur(45px);
	}

	.tickets {
		grid-area: tickets;
		background: gray;
	}

	.me {
		grid-area: me;
		background: gray;
	}

	.recent {
		grid-area: recent;
		background: gray;
		max-height: 500px;
	}

	.top {
		grid-area: top;
		background: gray;
        height: fit-content;
	}
</style>
