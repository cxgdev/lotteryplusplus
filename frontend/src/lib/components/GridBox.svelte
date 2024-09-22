<script>
    export let title = "";
    export let area = "";
</script>

<div style={`grid-area: ${area}; padding: 12px; height: 100%; box-sizing: border-box;`}>
    <div class="box">
        <h1>{title}</h1>
        <hr />
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>

<style>
    .box {
        padding: 24px;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: all ease 250ms;
        height: 100%;
        box-sizing: border-box;
    }

    .box:hover {
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(10px);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        transform: scale(1.025);
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    h1 {
        color: var(--primary);
        font-size: 32px;
        font-weight: 800;
        text-transform: uppercase;
        font-style: italic;
        margin: 0;
    }

    hr {
        color: rgba(255, 255, 255, 0.15);
    }
</style>