<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <performance-filter-component @start_date="getStartDate" @end_date="geEndDate"></performance-filter-component>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :startDateToPass="startDateFilter" :endDateToPass="endDateFilter" :performanceDataToChild="performanceDataFromApi" v-if="performanceDataFromApi" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import PerformanceFilterComponent from "../components/vue-components/performance-filter.vue";
import { mapState } from "vuex";
import store from "../../store";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    PerformanceFilterComponent,
  },
  data() {
    return {
      performanceDataFromApi: store.state.performanceData,

      startDateFilter: null,
      endDateFilter: null,
    };
  },
  async created() {
    await store.dispatch("getPerformanceData");
  },
  computed: {
    ...mapState(["performanceData"]),
  },

  methods: {
    getStartDate(startDateValue) {
        this.startDateFilter = startDateValue;
        console.log(this.startDateFilter);
    },
    geEndDate(endDateValue) {
        this.endDateFilter = endDateValue;
        console.log(this.endDateFilter);
    },
  },
};
</script>
