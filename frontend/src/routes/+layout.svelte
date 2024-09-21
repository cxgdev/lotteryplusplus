<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<body>
	<div class="wrapper">
		<Navbar />
		<div class="content">
			<slot></slot>
		</div>
		<div>
			<img src="/assets/images/screenshot.png" />
		</div>
	</div>
</body>

<style>
	/* Fuck you, this file exists */
	@import '/fonts/fonts.css';

	:root {
		--primary: rgb(35, 155, 215);
		background: black;
	}

	body {
		margin: 0;
		overflow: hidden;
		font-family: 'Satoshi';
		color: white;
		background: transparent;
		height: 100vh;
	}

	.wrapper {
		height: 100%;
	}

	.wrapper > div > img {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		height: 100vh;
		width: 100vw;
		object-fit: cover;
		object-position: 45%;
		filter: blur(8px) brightness(70%);
		transform: scale(1.1);
		transform-origin: center center;
	}

	.content {
		padding: 64px;
		box-sizing: border-box;
		width: 100%;
		overflow: auto;
        transform: padding 150ms ease;
	}

	@media (max-width: 1580px) {
		.content {
			padding: 32px;
			padding-bottom: 64px;
		}
	}
	@media (max-width: 1100px) {
		.content {
			padding: 32px;
			padding-bottom: 64px;
		}
	}
</style>
