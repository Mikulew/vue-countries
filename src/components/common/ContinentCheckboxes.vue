<template>
  <div class="settings">
    <div class="settings-checkbox">
      <input
        @click="checkContinent('Asia')"
        v-model="isCheckedAsia"
        id="Asia"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Asia">Asia</label>
      <input
        @click="checkContinent('Europe')"
        v-model="isCheckedEurope"
        id="Europe"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Europe">Europe</label>
      <input
        @click="checkContinent('Oceania')"
        v-model="isCheckedOceania"
        id="Oceania"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Oceania">Oceania</label>
      <input
        @click="checkContinent('Americas')"
        v-model="isCheckedAmericas"
        id="Americas"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Americas">Americas</label>
      <input
        @click="checkContinent('Africa')"
        v-model="isCheckedAfrica"
        id="Africas"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Africas">Africas</label>
      <input
        @click="checkContinent('Polar')"
        v-model="isCheckedPolar"
        id="Polar"
        type="checkbox"
        name
        value
        checked
      />
      <label for="Polar">Polar</label>
      <input type="checkbox" name v-model="isCheckedAll" id="all" disabled />
      <label for="all">All countries</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheckedAsia: true,
      isCheckedEurope: true,
      isCheckedOceania: true,
      isCheckedAmericas: true,
      isCheckedAfrica: true,
      isCheckedPolar: true,
      isCheckedAll: true,
    };
  },
  methods: {
    checkContinent(continent) {
      let countriesActually = [];
      if (this.isCheckedAsia == true) {
        // console.log("checkedAsia");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Asia';
          }),
        );
      }
      if (this.isCheckedEurope == true) {
        // console.log("checkedEurope");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Europe';
          }),
        );
      }
      if (this.isCheckedOceania == true) {
        // console.log("checkedOceania");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Oceania';
          }),
        );
      }
      if (this.isCheckedAmericas == true) {
        // console.log("checkedAmericas");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Americas';
          }),
        );
      }
      if (this.isCheckedAfrica == true) {
        // console.log("checkedAfricas");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Africa';
          }),
        );
      }
      if (this.isCheckedPolar == true) {
        // console.log("checkedPolar");
        countriesActually.push(
          this.countriesCopy.filter(item => {
            return item.region == 'Polar';
          }),
        );
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
      if (
        this.isCheckedAsia == true &&
        this.isCheckedEurope == true &&
        this.isCheckedOceania == true &&
        this.isCheckedAmericas == true &&
        this.isCheckedAfrica == true &&
        this.isCheckedPolar == true
      ) {
        this.isCheckedAll = true;
      } else {
        this.isCheckedAll = false;
      }
      let mergedArr = Array.prototype.concat.apply([], countriesActually);
      // console.log(countriesActually);
      return (this.countries = mergedArr);
    },
  },
};
</script>

<style scoped>
.settings {
  margin-top: 50px;
}

.settings-table {
  margin-top: 50px;
}
</style>