<template>
  <date-picker
    :parent-date="parentDate"
    :parent-date-formatted="parentDateFormatted"
    :parent-show-menu="parentShowMenu"
    label="Departure date"
    @update="update"
  />
</template>

<script>
import DatePicker from "@/components/common/form/DatePicker.vue";

export default {
  name: "DatePickerDeparture",
  components: {
    DatePicker,
  },
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
  },
  methods: {
    update(field, value) {
      this.$emit("update", this.getFieldName(field), value);
    },
    getFieldName(field) {
      if (field === "dateValue") {
        return "fromDate";
      } else if (field === "dateFormatted") {
        return "fromDateFormatted";
      } else {
        return "";
      }
    },
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss" scoped></style>
