<template>
  <div>
    <div class="settings">
      <div class="settings-checkbox">
        <input v-on:click="checkContinent('Asia')" v-model="isCheckedAsia" id="Asia" type="checkbox" name="" value=""
               checked>
        <label for="Asia">Asia</label>
        <input v-on:click="checkContinent('Europe')" v-model="isCheckedEurope" id="Europe" type="checkbox" name=""
               value="" checked>
        <label for="Europe">Europe</label>
        <input v-on:click="checkContinent('Oceania')" v-model="isCheckedOceania" id="Oceania" type="checkbox" name=""
               value="" checked>
        <label for="Oceania">Oceania</label>
        <input v-on:click="checkContinent('Americas')" v-model="isCheckedAmericas" id="Americas" type="checkbox" name=""
               value="" checked>
        <label for="Americas">Americas</label>
        <input v-on:click="checkContinent('Africa')" v-model="isCheckedAfrica" id="Africas" type="checkbox" name=""
               value="" checked>
        <label for="Africas">Africas</label>
        <input v-on:click="checkContinent('Polar')" v-model="isCheckedPolar" id="Polar" type="checkbox" name="" value=""
               checked>
        <label for="Polar">Polar</label>
        <input type="checkbox" name="" v-model="isCheckedAll" id="all" disabled>
        <label for="all">All countries</label>
      </div>
    </div>
    <table class="table table-striped settings-table">
      <thead>
      <tr>
        <th class="text-center">Index</th>
        <th class="text-center" v-for="column in columns">
          <a href="#" v-on:click="sortBy(column)">{{column | capitalize}}</a>
        </th>
        <th class="text-center">Info</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(country, index) in countries">
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

    export default {
        data() {
            return {
                countries: {},
                countriesCopy: {},
                isCheckedAsia: true,
                isCheckedEurope: true,
                isCheckedOceania: true,
                isCheckedAmericas: true,
                isCheckedAfrica: true,
                isCheckedPolar: true,
                isCheckedAll: true,
                sortKey: 'index',
                reverse: false,
                columns: ['name', 'alpha2Code', 'capital', 'region']
            }
        },
        methods: {
            fetchCountries() {
                this.$http.get('https://restcountries.eu/rest/v2/all')
                    .then(response => response.json())
                    .then(result => {
                        this.countries = result;
                        this.countriesCopy = result;
                    })
            },
            sortBy(sortKey) {
                this.sortKey = sortKey;
                this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;
                let n = this.countries.length;
                let a = [];

                function sortedByProperty(prop) {
                    return function (a, b) {
                        if (a[prop] > b[prop]) {
                            return 1;
                        } else if (a[prop] < b[prop]) {
                            return -1;
                        }
                        return 0;
                    }
                }

                let sorted = this.countries.sort(sortedByProperty(sortKey));
                if (this.reverse == false) {

                    return a = this.countries = sorted;
                } else if (this.reverse == true) {
                    return a = this.countries = sorted.reverse();
                } else {
                    return false;
                }
            },
            checkContinent(continent) {
                let countriesActually = [];
                if (this.isCheckedAsia == true) {
                    // console.log("checkedAsia");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Asia";
                    }));
                }
                if (this.isCheckedEurope == true) {
                    // console.log("checkedEurope");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Europe";
                    }));
                }
                if (this.isCheckedOceania == true) {
                    // console.log("checkedOceania");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Oceania";
                    }));
                }
                if (this.isCheckedAmericas == true) {
                    // console.log("checkedAmericas");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Americas";
                    }));
                }
                if (this.isCheckedAfrica == true) {
                    // console.log("checkedAfricas");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Africa";
                    }));
                }
                if (this.isCheckedPolar == true) {
                    // console.log("checkedPolar");
                    countriesActually.push(this.countriesCopy.filter((item) => {
                        return item.region == "Polar";
                    }));
                }
                if (this.isCheckedAsia == false) {
                    // console.log("uncheckedAsia");
                }
                if (this.isCheckedEurope == false) {
                    // console.log("uncheckedEurope");
                }
                if (this.isCheckedOceania == false) {
                    // console.log("uncheckedOceania");
                }
                if (this.isCheckedAmericas == false) {
                    // console.log("uncheckedAmericas");
                }
                if (this.isCheckedAfrica == false) {
                    // console.log("uncheckedAfricas");
                }
                if (this.isCheckedPolar == false) {
                    // console.log("uncheckedPolar");
                }
                if (this.isCheckedAsia == true && this.isCheckedEurope == true && this.isCheckedOceania == true && this.isCheckedAmericas == true && this.isCheckedAfrica == true && this.isCheckedPolar == true) {
                    this.isCheckedAll = true;
                } else {
                    this.isCheckedAll = false;
                }
                let mergedArr = Array.prototype.concat.apply([], countriesActually);
                // console.log(countriesActually);
                return this.countries = mergedArr;
            }

        },
        created: function () {
            this.fetchCountries();
        },
        computed: {
            //
        },
        filters: {
            capitalize(value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            }
        }
    }
</script>

<style scoped>
  .settings {
    margin-top: 50px;
  }

  .settings-table {
    margin-top: 50px;
  }

  a {
    color: #E2E2E2;
  }

  table th, table td {
    padding: 10px 20px;
    text-align: left;
  }

  table th {
    padding: 20px;
    border-right: 1px #595959 solid;
    background-color: #2C2C2C;
    position: relative;
    cursor: pointer;
    color: #E2E2E2;
  }

  table th:after {
    content: "";
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
    border-color: transparent transparent #E2E2E2 transparent;
  }

  table th.desc:after {
    display: block;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: #E2E2E2 transparent transparent transparent;
  }
</style>
