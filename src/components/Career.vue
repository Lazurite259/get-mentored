<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="row mb-3">
        <div class="col-auto">
          <label class="col-form-label">Career Search</label>
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="searchKey" placeholder="Keyword" />
        </div>

      </div>
    </div>
    <div class="col-md-8">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Occupation Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="career in displayList" :key="career.onet_code">
            <td>
              <router-link :to="{ name: 'career-detail', params: { id: career.onet_code } }">
                {{ career.occupation_title }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button type="button" class="page-link" v-if="page > 0" @click="page--">Previous</button>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" v-for="pageNumber in setPages()" :key="pageNumber"
              :class="{ active: pageNumber - 1 === page }" @click="page = pageNumber - 1">
              {{ pageNumber }}</button>
          </li>
          <li class="page-item">
            <button type="button" class="page-link" @click="page++" v-if="page < pageCount - 1">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchKey: '',
      careers: [],
      page: 0,
      perPage: 20
    }
  },
  async created () {
    try {
      const response = await this.$http.get('/career')
      this.careers = response.data
    } catch (error) {
      console.log(error.response)
    }
  },
  computed: {
    filteredList () {
      this.initiatePage()
      return this.careers.filter(career => {
        return career.occupation_title.toLowerCase().includes(this.searchKey.toLowerCase())
      })
    },
    displayList () {
      return this.paginate(this.filteredList)
    },
    pageCount () {
      return Math.ceil(this.filteredList.length / this.perPage)
    }
  },
  methods: {
    initiatePage () {
      this.page = 0
    },
    paginate (careers) {
      const start = this.page * this.perPage
      const end = start + this.perPage
      return careers.slice(start, end)
    },
    setPages () {
      const pages = []
      if (this.page < 2) {
        for (let i = 1; i < 6; i++) {
          const page = 0 + i
          if (page <= this.pageCount) {
            pages.push(page)
          }
        }
      } else if (this.page > this.pageCount - 3) {
        for (let i = -1; i < 4; i++) {
          const page = this.pageCount - 3 + i
          if (page <= this.pageCount && page > 0) {
            pages.push(page)
          }
        }
      } else {
        for (let i = -1; i < 4; i++) {
          const page = this.page + i
          if (page <= this.pageCount) {
            pages.push(page)
          }
        }
      }
      return pages
    }
  }
}
</script>
<style>
button.page-link {
  display: inline-block;
  color: #000;
}
</style>
