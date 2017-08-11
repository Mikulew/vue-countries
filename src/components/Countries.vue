<template>
  <div>
    <div class="settings">
      <div class="settings-checkbox">
        <label for="Asia">Asia</label>
        <input id="Asia" type="checkbox" name="" value="">
        <label for="Europe">Europe</label>
        <input id="Europe" type="checkbox" name="" value="">
        <label for="Oceania">Oceania</label>
        <input id="Oceania" type="checkbox" name="" value="">
        <label for="Americas">Americas</label>
        <input id="Americas" type="checkbox" name="" value="">
        <label for="Africas">Africas</label>
        <input id="Africas" type="checkbox" name="" value="">
        <label for="Polar">Polar</label>
        <input id="Polar" type="checkbox" name="" value="">
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
              <router-link v-bind:to="'country/' + index">
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
  props: ['countries'],
  data () {
    return {

    }
  },
  methods: {
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
