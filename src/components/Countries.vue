<template>
  <div>
    <div class="settings">
      <div class="settings-checkbox">
        <label for="Asia">Asia</label>
        <input v-on:click="checkContinent('Asia')" v-model="isCheckedAsia" id="Asia" type="checkbox" name="" value="" checked>
        <label for="Europe">Europe</label>
        <input v-on:click="checkContinent('Europe')" v-model="isCheckedEurope" id="Europe" type="checkbox" name="" value="" checked>
        <label for="Oceania">Oceania</label>
        <input v-on:click="checkContinent('Oceania')" v-model="isCheckedOceania" id="Oceania" type="checkbox" name="" value="" checked>
        <label for="Americas">Americas</label>
        <input v-on:click="checkContinent('Americas')" v-model="isCheckedAmericas" id="Americas" type="checkbox" name="" value="" checked>
        <label for="Africas">Africas</label>
        <input v-on:click="checkContinent('Africa')" v-model="isCheckedAfrica" id="Africas" type="checkbox" name="" value="" checked>
        <label for="Polar">Polar</label>
        <input v-on:click="checkContinent('Polar')" v-model="isCheckedPolar" id="Polar" type="checkbox" name="" value="" checked>
      </div>
    </div>
    <table class="table table-striped settings-table">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Name</th>
          <th class="text-center">Kod</th>
          <th class="text-center">Capital</th>
          <th class="text-center">Region</th>
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
              <router-link v-bind:to="'country/' + country.name">
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
  data () {
    return {
        countries: [],
        countriesCopy: [],
        isCheckedAsia: true,
        isCheckedEurope: true,
        isCheckedOceania: true,
        isCheckedAmericas: true,
        isCheckedAfrica: true,
        isCheckedPolar: true
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
          console.log("uncheckedAsia");
        }
        if (this.isCheckedEurope == false) {
          console.log("uncheckedEurope");
        }
        if (this.isCheckedOceania == false) {
          console.log("uncheckedOceania");
        }
        if (this.isCheckedAmericas == false) {
          console.log("uncheckedAmericas");
        }
        if (this.isCheckedAfrica == false) {
          console.log("uncheckedAfricas");
        }
        if (this.isCheckedPolar == false) {
          console.log("uncheckedPolar");
        }
        let mergedArr = Array.prototype.concat.apply([], countriesActually);
        console.log(countriesActually);
        return this.countries = mergedArr;
      }
  },
  created: function() {
      this.fetchCountries();
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
</style>
