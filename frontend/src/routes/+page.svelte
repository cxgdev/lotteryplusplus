<script>
	import GridBox from "$lib/components/GridBox.svelte";
	import ParticipatingPlayer from "$lib/components/ParticipatingPlayer.svelte";

    const tickets = [
        {
            player: "CXG_",
            prefix: "",
            suffix: ""
        }
    ]
</script>
<div class="grid">
    <div class="tickets">
        <GridBox title="Tickets">
            {#each tickets as ticket}
                <ParticipatingPlayer player={ticket.player} />
            {/each}
        </GridBox>
    </div>
    <div class="me">
        <GridBox title="You">
            
        </GridBox>
    </div>
    <div class="recent">
        <GridBox title="Recent">
            
        </GridBox>
    </div>
    <div class="top">
        <GridBox title="Top 10 Gamblas">
            
        </GridBox>
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-rows: 25% 25% 25fr;
        grid-template-columns: 50fr 25fr 25fr;
        grid-gap: 18px;
        width: 100%;
        height: 100%;
        padding: 16px;
        grid-auto-flow: column;
        grid-template-areas:
            "tickets me recent"
            "tickets top recent"
    }

    @media(max-width: 1100px) {
        .grid {
            grid-template-rows: 50fr 50fr;
            grid-template-columns: 100fr;
            grid-template-areas:
                "tickets me"
                "tickets recent"
                "tickets top";
        }
    }

    @media(max-width: 768px) {
        .grid {
            grid-template-rows: 100%;
            grid-template-columns: 80vh;
            grid-template-areas:
                "me"
                "tickets"
                "tickets"
                "recent"
                "top"
        }
    }

    .grid > div {
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: all ease 250ms;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .grid > div:hover {
        transform: scale(1.025)
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
    }

    .top {
        grid-area: top;
        background: gray;
    }
</style>