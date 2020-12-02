<template>
  <div>
    <p>quick-vue-template</p>
    <transition name="fade-transform" mode="out-in">
      <keep-alive include="">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  watch: {},

  beforeMount() {},

  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
p {
  font-size: 36px;
}
</style>
