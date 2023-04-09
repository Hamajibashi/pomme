<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link bi bi-caret-left-fill" href="#" aria-label="Previous"
          @click.prevent="updatePage(pages.current_page - 1)">
        </a>
      </li>

      <li class="page-item" :class="{ active: page === pages.current_page }" v-for="page in pages.total_pages"
        :key="page + 'page'">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link bi bi-caret-right-fill" href="#" aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emitPages', page)
    }
  }
}
</script>
