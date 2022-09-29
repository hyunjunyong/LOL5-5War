<template>
  <v-container>
    <v-text-field v-model="search" single-line></v-text-field>
    <v-data-table
      :headers="$common.headers"
      :items="itemArray"
      :items-per-page="15"
      class="elevation-1"
      :search="search"
    ></v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      search: '',
    };
  },
  created() {},
  computed: {
    itemArray() {
      return this.$common.member.map((e) => {
        return {
          nick: e.nick,
          top: e.top === true ? 'o' : 'x',
          jg: e.jg === true ? 'o' : 'x',
          mid: e.mid === true ? 'o' : 'x',
          ad: e.ad === true ? 'o' : 'x',
          sup: e.sup === true ? 'o' : 'x',
          tier: e.tier,
          score: e.score,
          remark: e.remark,
        };
      });
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
