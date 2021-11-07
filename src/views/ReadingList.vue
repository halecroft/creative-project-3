<template>
<div>
  <h1>Reading List</h1>
  <h3 id="emptyMessage">Reading List is empty</h3>
  <ToRead :booksToRead="booksToRead" />
</div>
</template>

<script>
import ToRead from "../components/ToRead.vue"
export default {
  name: 'ReadingList',
  components: {
    ToRead
  },
  computed: {
    booksToRead() {
      return this.$root.$data.booksToRead;
    }
  },
  mounted() {
    if (this.$root.$data.booksToRead.length === 0) {
    document.getElementById("emptyMessage").hidden = false;
    } else {
    document.getElementById("emptyMessage").hidden = true;
    }
  }
}

</script>

<style scoped>
h1, h3 {
    align-self: center;
}
</style>