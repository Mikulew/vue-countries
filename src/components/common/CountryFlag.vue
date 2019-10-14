<template>
  <img class="country-flag" :src="country.flag" :alt="`${country.name.toLowerCase()} flag'`" />
</template>

<script>
export default {
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>