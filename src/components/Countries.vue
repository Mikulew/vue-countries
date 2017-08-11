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
    <table id="countriesTable" class="table table-striped settings-table">
      <thead>
        <tr>
          <th v-on:click="sortTable" class="theadTable text-center" style="min-width: 100px;">ID</th>
          <th v-on:click="sortTable" class="theadTable text-center">Name</th>
          <th v-on:click="sortTable" class="theadTable text-center" style="min-width: 100px;">Kod</th>
          <th v-on:click="sortTable" class="theadTable text-center">Capital</th>
          <th v-on:click="sortTable" class="theadTable text-center" style="min-width: 120px;">Region</th>
          <th class="theadTableNot text-center">Info</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tbodyTable" v-for="(country, index) in countries">
            <td class="text-center" v-index>{{index + 1}}</td>
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
    sortTable: function(ev) {
      let table = document.getElementById("countriesTable"),
          ths = table.querySelectorAll("th.theadTable"),
          thsArr = Array.prototype.slice.call(ths),
          trs = table.querySelectorAll("tr.tbodyTable"),
          trsArr = Array.prototype.slice.call(trs),
          target = ev.target,
          index = thsArr.indexOf(target),
          df = document.createDocumentFragment(),
          order = (target.classList.contains("theadTable") && target.classList.contains("text-center") && target.classList.contains("desc"))  ? "asc" : "desc";


          clearClassName(ths);

      trsArr.sort(function(a, b) {
        let tdA = a.children[index].textContent,
            tdB = b.children[index].textContent;

        if(tdA > tdB) {
          return order === "asc" ? -1 : 1;
        } else if (tdA < tdB) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });

      function clearClassName(nodeList) {
        for(let i = 0; i < nodeList.length; i++) {
          nodeList[i].className = "theadTable text-center";
        }
      }

      trsArr.forEach(function(tr) {
        df.appendChild(tr);
      });

      target.className = "theadTable text-center " + order;
      table.querySelector("tbody").appendChild(df);
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
  .theadTable, .theadTableNot {
      padding: 20px;
      border-right: 1px #595959 solid;
      background-color: #2C2C2C;

      position: relative;

      cursor: pointer;

      color: #E2E2E2;
  }

  .theadTable:after {
      content: "";
      display: none;
      width: 0;
      height: 0;
      margin-top: -5px;

      position: absolute;
      top: 50%;
      right: 20px;
  }
  .theadTable.asc:after {
      display: block;
      border-style: solid;
      border-width: 0 5px 10px 5px;
      border-color: transparent transparent #E2E2E2 transparent;
  }

  .theadTable.desc:after {
      display: block;
      border-style: solid;
      border-width: 10px 5px 0 5px;
      border-color: #E2E2E2 transparent transparent transparent;
  }
</style>
