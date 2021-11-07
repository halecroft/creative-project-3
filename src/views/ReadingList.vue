<template>
<div>
  <h1>Reading List</h1>
  <h3 id="emptyMessage">Reading List is empty</h3>
  <ReadingList :booksToRead="booksToRead" />
</div>
</template>

<script>
import ReadingList from "../components/ReadingList.vue"
export default {
  name: 'ReadingList',
  components: {
    ReadingList
  },
  computed: {
    cart() {
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