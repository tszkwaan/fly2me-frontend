<template>
  <v-layout row wrap class="schedule">
    <v-flex xs5>
      <calendar-view
        :show-date="thisShowDate"
        @show-date-change="setThisShowDate"
        class="
          theme-default
          holiday-us-traditional holiday-us-official
          calendar
        "
      />
    </v-flex>
    <v-flex xs5>
      <calendar-view
        :show-date="nextShowDate"
        @show-date-change="setNextShowDate"
        class="
          theme-default
          holiday-us-traditional holiday-us-official
          calendar
        "
      />
    </v-flex>
  </v-layout>
</template>

<script>
import CalendarView from "vue-simple-calendar";
// require('vue-simple-calendar/dist/static/css/default.css')

export default {
  name: "schedule",
  components: {
    CalendarView,
  },
  data: function () {
    return {
      thisShowDate: new Date(),
      nextShowDate: undefined,
    };
  },
  methods: {
    setThisShowDate(date) {
      this.thisShowDate = date;
    },
    setNextShowDate(date) {
      this.nextShowDate = date;
    },
  },
  mounted() {
    let today = new Date();
    this.nextShowDate =
      today.getMonth() === 11
        ? new Date(today.getFullYear() + 1, 0, 1)
        : new Date(today.getFullYear(), today.getMonth() + 1, 1);
  },
};
</script>

<style>
.schedule {
  justify-content: center;
}
.calendar {
  margin: 0 1.5rem;
}
.cv-week {
  min-height: 5rem;
  max-height: 5rem;
}
.cv-header,
.cv-header-day {
  background-color: white !important;
}
.cv-day.past,
.outsideOfMonth {
  background-color: #f0f0f0 !important;
}
</style>
