<script lang="ts">
  import { theme } from '🍎/stores/theme.store';
  import TwitterIcon from '~icons/mdi/twitter';
  import BlogIcon from '~icons/mdi/grease-pencil';
  import WorksIcon from '~icons/ic/round-workspaces';
  import GithubIcon from '~icons/mdi/github';
  import DevToIcon from '~icons/mdi/dev-to';

  function external(node: HTMLAnchorElement) {
    node.rel = 'noopener noreferrer';
    node.target = '_blank';
  }
</script>

<section class="container">
  <header class="titlebar app-window-drag-handle">
    <span>关于开发者</span>
  </header>

  <aside class:light={$theme.scheme === 'light'}>
    <nav>
      <a href="https://www.oldsai.cn" use:external> <BlogIcon /> 博客 </a>
      <a href="https://www.oldsai.cn/map.html" use:external> <WorksIcon /> 成就 </a>

      <hr />
      <a href="https://github.com/PangXitong" use:external> <GithubIcon /> Github </a>
    </nav>
  </aside>

  <section class="content">
    <img height="200" width="200" src="/purus-profile/IMG_6744.JPG" alt="Puru Vijay Profile pic" />

    <br />

    <h1>你好，我是庞玺桐！</h1>

    <h2>
      我是macOS Web的创建者，您现在正在使用它
      <img src="/emojis/wink.png" alt="Wink emoji" class="emoji" />
    </h2>

    <br /><br />

    <p>
      大家好，我是庞玺桐，一名来自中国吉林省的青年学生，理想是成为一名飞行员。
      <img src="/emojis/star-struck.png" alt="Star Struck face emoji" class="emoji" />
    </p>

    <br /><br />

    <p>
      这个项目来自<a href="https://github.com/puruvj/macos-web"style="color:#75BEFF"> puruvj的macos-web</a>
      <br>
      庞玺桐进行了项目汉化（目前部分功能只有显示，没有实际功能）
      <br>
      您可以在左侧查看我的链接
    </p>
  </section>
</section>

<style lang="scss">
  .container {
    --color: var(--system-color-light-hsl);

    display: grid;
    grid-template-columns: 12rem 1fr;
    grid-template-rows: 3rem 1fr;

    border-radius: inherit;

    background-image: linear-gradient(
      to right,
      hsla(var(--color), 0.7) 12rem,
      hsla(var(--color), 1) 12rem 100%
    );

    transition: --color 200ms ease-in;

    color: var(--system-color-dark);
  }

  .titlebar {
    grid-area: 1 / 1 / span 1 / span 2;

    display: flex;
    justify-content: center;

    z-index: 1;

    padding: 0.9rem 1rem;

    width: 100%;

    border-top-left-radius: inherit;
    border-top-right-radius: inherit;

    user-select: none;

    span {
      color: hsla(var(--system-color-dark-hsl), 0.8);
      font-weight: 500;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
  }

  aside {
    grid-area: 1 / 1 / span 2 / span 1;

    transform: translateZ(0);

    height: calc(100% - 2.7px);
    width: calc(12rem - 2.27px);

    margin: 1.8px 0 0px 1.8px;

    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: inherit;

    &::before {
      content: '';

      width: inherit;
      height: inherit;

      border-radius: inherit;

      position: fixed;
      left: 0;
      top: 0;

      z-index: -1;
      backdrop-filter: blur(12px);
    }

    &.light {
      height: calc(100% - 3px);
      width: calc(12rem - 2.5px);

      margin: 1.7px 0 0px 1.7px;

      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      margin: 4rem 0.6rem;

      hr {
        display: block;

        width: 100%;
        height: 1px;

        background-color: hsla(var(--system-color-dark-hsl), 0.2);

        border: none;
      }

      a {
        display: flex;
        gap: 0.4rem;
        align-items: center;

        color: hsla(var(--system-color-dark-hsl), 0.9);
        text-decoration: none;
        font-weight: 400;

        padding: 0.5rem 0.5rem;

        border-radius: 0.4rem;

        transition: background-color 100ms ease;

        &:hover {
          background-color: hsla(var(--system-color-dark-hsl), 0.2);
        }
      }
    }
  }

  .content {
    grid-area: 2 / 2 / span 1 / span 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;

    img {
      border-radius: 50%;
    }
  }

  .emoji {
    height: 1em;
    width: 1em;

    vertical-align: middle;
  }

  h1 {
    font-size: 2.618rem;
    line-height: 1.618;
  }

  h2 {
    font-size: 1.618rem;
    line-height: 1.2;
  }

  p {
    line-height: 1.618rem;
  }
</style>
