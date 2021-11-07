<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.title+book.author">
      <a :href="book.link">
        <div class="image">
            <img :src="book.imageLink">
        </div>
      </a>
      <div class="info">
          <h1>{{book.title}}</h1>
          <p>{{book.author}}</p>
      </div>
      <div class="year">
          <h2>{{book.year}}</h2>
          <button class="auto" v-on:click="addBook(book)">Add to<br>Reading List</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  },
  methods: {
    addBook(key) {
      this.$root.$data.booksToRead.push(key);
  }
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.book a img {
  height: 300px;
  width: 200px;
  object-fit: cover;
}

.book a .image {
  display: flex;
  justify-content: center;
}

.info {
  background: #00a388;
  color: #000;
  padding: 4px 16px;
  height: 80px;
}

.info h1 {
  font-size: 18px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}


.year {
  display: flex;
  background: #00a388;
  padding: 0 0.5rem;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
  border-radius: 5px;
}

.auto {
  margin-left: auto;
}
</style>