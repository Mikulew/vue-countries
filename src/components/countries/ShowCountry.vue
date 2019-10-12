<template>
  <div>
    <div class="country-container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{country.name}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <table class="table table-striped">
            <thead>
              <tr>
                <th class="text-center" style="min-width: 200px;">#</th>
                <th class="text-center">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-center">Native name</th>
                <th class="text-center">{{country.nativeName}}</th>
              </tr>
              <tr>
                <th class="text-center">Capital city</th>
                <th class="text-center">{{country.capital}}</th>
              </tr>
              <tr>
                <th class="text-center">Region</th>
                <th class="text-center">{{country.region}}</th>
              </tr>
              <tr>
                <th class="text-center">Subregion</th>
                <th class="text-center">{{country.subregion}}</th>
              </tr>
              <tr>
                <th class="text-center">Population</th>
                <th class="text-center">{{country.population}}</th>
              </tr>
              <tr>
                <th class="text-center">Area</th>
                <th class="text-center">
                  {{country.area}} km
                  <sup>2</sup>
                </th>
              </tr>
              <tr>
                <th class="text-center">Language</th>
                <th class="text-center">{{country.languages[0].name}}</th>
              </tr>
              <tr>
                <th class="text-center">Native language</th>
                <th class="text-center">{{country.languages[0].nativeName}}</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-4">
          <h3>Flag</h3>
          <img
            class="country-flag"
            v-bind:src="country.flag"
            v-bind:alt="country.name.toLowerCase() + ' flag'"
          />
          <table class="table table-condensed">
            <thead>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="text-center">ISO Code 2:</th>
                <th class="text-center">{{country.alpha2Code}}</th>
              </tr>
              <tr>
                <th class="text-center">ISO Code 3:</th>
                <th class="text-center">{{country.alpha3Code}}</th>
              </tr>
              <tr>
                <th class="text-center">Internet TLD:</th>
                <th class="text-center">{{country.topLevelDomain[0]}}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <router-link to="/">
            <button class="btn btn-default btn-country" type="button" name="button">Back</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      country: {},
    };
  },
  methods: {
    fetchCountry(name) {
      this.$http
        .get('https://restcountries.eu/rest/v2/name/' + name)
        .then(response => response.json())
        .then(result => (this.country = result[0]));
    },
  },
  created() {
    this.fetchCountry(this.$route.params.name);
  },
};
</script>

<style scoped>
.country-container {
  margin: 100px 0;
}

.country-flag {
  width: 100%;
  height: auto;
}

.btn-country {
  margin-top: 20px;
  transition: all 0.2s ease-in-out;
}

.btn-country:hover {
  background-color: #cccccc;
}
</style>
