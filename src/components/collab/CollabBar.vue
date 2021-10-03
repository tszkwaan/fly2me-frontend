<template>
  <div class="collab-bar">
    <collab-user
      v-for="user in users"
      :user="user"
      :key="user.id"
      @click.native="toggleUser(user)"
      :class="{ unselected: !isSelected(user), selected: isSelected(user) }"
      :showLeaveInfo="showLeaveInfo"
    ></collab-user>
  </div>
</template>

<script>
import CollabUser from "@/components/collab/CollabUser.vue";
import Color from "@/components/common/color.js";

export default {
  name: "collab-bar",
  components: {
    CollabUser,
    Color,
  },
  data: function () {
    return {
      users: [
        {
          id: 0,
          name: "Jeremy",
          numOfRemainLeave: 5,
          color: "red",
        },
        {
          id: 1,
          name: "Koey",
          numOfRemainLeave: 12,
          color: "red",
        },
      ],
      selected: [],
    };
  },
  watch: {
    selected: function () {
      this.$emit("updateSelectedUser", this.selected);
    },
  },
  methods: {
    toggleUser: function (user) {
      if (this.isSelected(user)) {
        this.selected.splice(this.selected.indexOf(user), 1);
      } else {
        this.selected.push(user);
      }
    },
    isSelected: function (user) {
      return this.selected.find((selected) => selected === user);
    },
  },
  mounted() {
    this.users.map((user, index) => {
      user.color = Color.getColor(index);
      this.selected.push(user);
      return user;
    });
  },
  props: {
    showLeaveInfo: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style scoped>
.collab-bar {
  height: 4rem;
  margin-top: 1rem;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  padding: 0 12rem;
}
</style>
