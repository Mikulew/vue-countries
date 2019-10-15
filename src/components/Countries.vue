<template>
  <div>
    <table class="table table-striped settings-table">
      <thead>
        <tr>
          <th class="text-center">Index</th>
          <th class="text-center" v-for="(column, index) in columns" :key="index">
            <a href="#" @click="sortBy(column)">{{column | capitalize}}</a>
          </th>
          <th class="text-center">Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(country, index) in countries" :key="index">
          <td class="text-center">{{index + 1}}</td>
          <td class="text-center">{{country.name}}</td>
          <td class="text-center">{{country.alpha2Code}}</td>
          <td class="text-center">{{country.capital}}</td>
          <td class="text-center">{{country.region}}</td>
          <td class="text-center">
            <router-link v-bind:to="'country/' + country.name.toLowerCase()">
              <button class="btn btn-info" type="button" name="button">More</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ContinentCheckboxes from '@/components/common/ContinentCheckboxes.vue';

export default {
  data() {
    return {
      countries: {},
      countriesCopy: {},
      sortKey: 'index',
      reverse: false,
      columns: ['name', 'alpha2Code', 'capital', 'region'],
    };
  },
  methods: {
    fetchCountries() {
      this.$http
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(result => {
          this.countries = result;
          this.countriesCopy = result;
        });
    },
    sortBy(sortKey) {
      this.sortKey = sortKey;
      this.reverse = this.sortKey == sortKey ? !this.reverse : false;
      let n = this.countries.length;
      let a = [];

      function sortedByProperty(prop) {
        return function(a, b) {
          if (a[prop] > b[prop]) {
            return 1;
          } else if (a[prop] < b[prop]) {
            return -1;
          }
          return 0;
        };
      }

      let sorted = this.countries.sort(sortedByProperty(sortKey));
      if (this.reverse == false) {
        return (a = this.countries = sorted);
      } else if (this.reverse == true) {
        return (a = this.countries = sorted.reverse());
      } else {
        return false;
      }
    },
  },
  created() {
    this.fetchCountries();
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
a {
  color: #e2e2e2;
}

table th,
table td {
  padding: 10px 20px;
  text-align: left;
}

table th {
  padding: 20px;
  border-right: 1px #595959 solid;
  background-color: #2c2c2c;
  position: relative;
  cursor: pointer;
  color: #e2e2e2;
}

table th:after {
  content: '';
  display: none;
  width: 0;
  height: 0;
  margin-top: -5px;
  position: absolute;
  top: 50%;
  right: 20px;
}

table th.asc:after {
  display: block;
  border-style: solid;
  border-width: 0 5px 10px 5px;
  border-color: transparent transparent #e2e2e2 transparent;
}

table th.desc:after {
  display: block;
  border-style: solid;
  border-width: 10px 5px 0 5px;
  border-color: #e2e2e2 transparent transparent transparent;
}
</style>
