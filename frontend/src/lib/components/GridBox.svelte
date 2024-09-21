<script>
    export let title = "";
</script>

<div class="box">
    <h1>{title}</h1>
    <hr />
    <slot></slot>
</div>

<style>
    .box {
        padding: 24px;
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