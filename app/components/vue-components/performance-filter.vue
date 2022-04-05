<template>
  <div class="c-performance__filters">
    <div class="c-filters-start__date">
      <span>Start date:</span>
      <input v-model="startDate" @input="show" type="date" name="" />
    </div>
    <div class="c-filters-start__date">
      <span>End date:</span>
      <input v-model="endDate" @input="show" type="date" name="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PerformanceFilterComponent",
  data() {
    return {
        startDate: null,
        endDate: null,
    };
  },
  methods: {
    show() {

        this.$emit('start_date', this.startDate);
        this.$emit('end_date', this.endDate);
    },
  },
  created() {

  }
};
</script>
