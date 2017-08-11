<template>
  <div>
    <header class="header-container">
      <div class="header-wrapper">
        <h1 class="header-title"><span class="header-span">Countries</span> Information</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #cccccc;
  width: 100%;
  min-height: 100px;
}
.header-wrapper {
  display: flex;
  justify-content: center;
  width: 80%;
}
.header-title {
  letter-spacing: 1px;
  color: #313491;
  font-weight: 700;
}
.header-span {
  color: #0986b6;
}
</style>
