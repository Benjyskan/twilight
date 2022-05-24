<nav>
  <slot />
  <a href="/">link 3</a>
</nav>

<style lang="scss">
  nav {
    background-color: #eee;
    border-bottom: 1px solid black;
    display: flex;

    & :global(a) {
      border-right: 1px solid black;
      text-decoration: none;
      /* margin: 0.2rem; */
      padding: 0.4rem;
    }
  }
</style>
