<template>
<div>
  <div class="wrapper">
    <h1>Welcome to the Notable Books Repository</h1>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <Books :books="books" />
</div>
</template>

<script>
import Books from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    Books
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  books() {
    return this.$root.$data.books.filter(book => book.title.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
  }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>