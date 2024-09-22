<nav>
    <div class="logo-wrapper">
        <img src="/assets/images/pepper.png" alt="DougDoug Pepper" />
        <div class="divider" />
        <div>
            <span>LOTTERY++</span>
            <span>by CXG_ and xmfm</span>
        </div>
    </div>
</nav>

<style>
    nav {
        width: 100vw;
        height: 90px;
        background: rgba(15, 15, 15, 0.9);
        backdrop-filter: blur(20px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        padding: 12px;
        box-sizing: border-box;
        position: fixed;
        z-index: 2;
    }

    .logo-wrapper {
        display: flex;
        flex-direction: row;
        height: 100%;
        gap: 12px;
    }

    .logo-wrapper > img {
        height: 100%;
    }

    .logo-wrapper > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .logo-wrapper > div > span:first-child {
        font-family: "Retro Computer";
        font-size: 22px;
        text-rendering: optimizeLegibility;
        color: var(--primary);
    }
</style>
