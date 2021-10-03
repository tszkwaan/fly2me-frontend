<template>
  <div class="collab-user" :style="{ color: user.color }">
    <v-avatar size="20px">
      <v-gravatar :email="user.name" default-img="identicon" />
    </v-avatar>
    <div>
      <div class="info-text info-text-name">
        {{ user.name }}
      </div>
      <div class="info-text info-text-leave" v-show="showLeaveInfo">
        Leave remain: {{ user.numOfRemainLeave }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "collab-user",
  props: {
    user: {
      type: Object,
      required: true,
    },
    showLeaveInfo: {
      type: Boolean,
      required: false,
      default: true,
    },
    size: {
      type: String,
      required: false,
      default: "middle",
    },
    namePosition: {
      type: String,
      default: "right",
    },
  },
  data() {
    return {};
  },
  computed: {
    avatarSize: function () {
      if (this.size === "small") {
        return "2rem";
      } else {
        return "3rem";
      }
    },
  },
  watch: {
    user: {
      deep: true,
      handler: function (value) {},
    },
  },
};
</script>

<style scoped>
/* Collab user */
.collab-user {
  display: flex;
  align-items: center;
  justify-content: center;
}
.collab-user:hover {
  cursor: pointer;
}
/* Avatar */
.avatar {
  border-radius: 50%;
  float: right;
  margin: 0 1px;
}
.unselected {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
.unselected:hover {
  -webkit-filter: grayscale(50%); /* Safari 6.0 - 9.0 */
  filter: grayscale(50%);
}
/* Info */
.info {
  /*
    margin-left: 2px;
    */
}
.info-text {
  font-size: 0.8rem;
}
.info-text-name {
  text-align: left;
  margin-left: 5px;
  font-size: 12px;
}
.info-text-leave {
}
</style>
