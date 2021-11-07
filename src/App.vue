<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/book-logo.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/bookshelf.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/reading-list">
        <div class="menu-item">
          <img src="/images/list-icon.png">
          <p>{{readingListLength}} books</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <footer><a href="https://github.com/halecroft/creative-project-3">Github Repository</a></footer>
</div>
</template>

<script>
export default {
  computed: {
    readingListLength() {
      return this.$root.$data.booksToRead.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px 0px 100px;
  min-height: 100vh;
  position: relative;
  padding-bottom: 2rem;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

footer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 2rem;
}

footer a {
  text-decoration: none;
  color: #B84901;
}

footer a:visited {
  text-decoration: none;
  color: #B84901;
}
</style>
