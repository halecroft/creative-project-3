<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('English')" href="#" class="pure-menu-link">English</a></li>
      <li class="pure-menu-item"><a @click="select('Akkadian')" href="#" class="pure-menu-link">Akkadian</a></li>
      <li class="pure-menu-item"><a @click="select('Arabic')" href="#" class="pure-menu-link">Arabic</a></li>
      <li class="pure-menu-item"><a @click="select('Chinese')" href="#" class="pure-menu-link">Chinese</a></li>
      <li class="pure-menu-item"><a @click="select('Classical Latin')" href="#" class="pure-menu-link">Classical Latin</a></li>
      <li class="pure-menu-item"><a @click="select('Danish')" href="#" class="pure-menu-link">Danish</a></li>
      <li class="pure-menu-item"><a @click="select('French')" href="#" class="pure-menu-link">French</a></li>
      <li class="pure-menu-item"><a @click="select('German')" href="#" class="pure-menu-link">German</a></li>
      <li class="pure-menu-item"><a @click="select('Greek')" href="#" class="pure-menu-link">Greek</a></li>
      <li class="pure-menu-item"><a @click="select('Hebrew')" href="#" class="pure-menu-link">Hebrew</a></li>
      <li class="pure-menu-item"><a @click="select('Icelandic')" href="#" class="pure-menu-link">Icelandic</a></li>
      <li class="pure-menu-item"><a @click="select('Italian')" href="#" class="pure-menu-link">Italian</a></li>
      <li class="pure-menu-item"><a @click="select('Japanese')" href="#" class="pure-menu-link">Japanese</a></li>
      <li class="pure-menu-item"><a @click="select('Norwegian')" href="#" class="pure-menu-link">Norwegian</a></li>
      <li class="pure-menu-item"><a @click="select('Old Norse')" href="#" class="pure-menu-link">Old Norse</a></li>
      <li class="pure-menu-item"><a @click="select('Persian')" href="#" class="pure-menu-link">Persian</a></li>
      <li class="pure-menu-item"><a @click="select('Portuguese')" href="#" class="pure-menu-link">Portuguese</a></li>
      <li class="pure-menu-item"><a @click="select('Russian')" href="#" class="pure-menu-link">Russian</a></li>
      <li class="pure-menu-item"><a @click="select('Sanskrit')" href="#" class="pure-menu-link">Sanskrit</a></li>
      <li class="pure-menu-item"><a @click="select('Spanish')" href="#" class="pure-menu-link">Spanish</a></li>
      <li class="pure-menu-item"><a @click="select('Swedish')" href="#" class="pure-menu-link">Swedish</a></li>
    </ul>
  </div>
  <Books :books="books" />
</div>
</template>

<script>
import Books from "../components/BookList.vue"
export default {
  name: 'Browse',
  components: {
    Books
  },
  data() {
    return {
      language: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.books.filter(book => book.language === this.language);
    }
  },
  methods: {
    select(language) {
      this.language = language;
    }
  }
}
</script>