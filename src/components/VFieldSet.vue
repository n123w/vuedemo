<template>
  <div class="fcontainer">
    <div class="fstyle" @click="toggleShow">
      <i :class="{'el-icon-plus':!show,'el-icon-minus':show}"></i>
      <span>{{title}}</span>
    </div>
    <div class="fcontent" v-show="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "vfieldset",
  props: {
    title: String
  },
  data() {
    return { show: true };
  },
  methods: {
    toggleShow: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.fcontainer {
  padding: 0 20px;
}
.fcontainer .fcontent {
  min-width: 900px;
  max-width:1200px;
}
.fstyle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  border-bottom: 1px solid rgb(228, 231, 237);
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.fstyle i {
  cursor: pointer;
  margin-right: 5px;
}
</style>
