<template>
  <v-menu
    class="manual-fill"
    :close-on-content-click="false"
    v-model="showMenu"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    max-width="290px"
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="dateFormatted"
      :label="label"
      append-icon="event"
      @blur="formatDate"
    />
    <v-date-picker v-model="dateValue" no-title @input="closeMenu" />
  </v-menu>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    parentDate: {
      type: String,
      default: "",
      required: true,
    },
    parentDateFormatted: {
      type: String,
      default: "",
      required: true,
    },
    parentShowMenu: {
      type: Boolean,
      default: false,
      required: true,
    },
    label: {
      type: String,
      default: "Date",
    },
  },
  computed: {
    dateValue: {
      get() {
        return this.parentDate;
      },
      set(value) {
        this.$emit("update", "dateValue", value);
      },
    },
    dateFormatted: {
      get() {
        return this.parentDateFormatted;
      },
      set(value) {
        this.$emit("update", "dateFormatted", value);
      },
    },
    showMenu: {
      get() {
        return this.parentShowMenu;
      },
      set(value) {
        this.$emit("update", "showMenu", value);
      },
    },
  },
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
    parseDate(date) {
      if (!date) return null;
      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    formatDate() {
      this.$emit("update", "dateValue", this.parseDate(this.dateFormatted));
    },
  },
  // mounted () {
  //     console.log(this.dateValue)
  //     console.log(this.dateFormatted)
  //     console.log(this.showMenu)
  // }
};
</script>

<style lang="scss" scoped></style>
