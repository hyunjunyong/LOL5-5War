<template>
  <v-container>
    <h2>현재 팀원</h2>
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

<style lang="css" scoped>
h2 {
  position: relative;
  margin: 1rem -10px;
  padding: 0.7rem 0.7rem 0.7rem 2rem;
  background: #ffeb3b;
}
h2::before,
h2::after {
  position: absolute;
  content: '';
}
h2::before {
  bottom: -10px;
  left: 0px;
  width: 0px;
  height: 0px;
  border-top: 10px solid #e9c70a;
  border-left: 10px solid transparent;
}
h2::after {
  right: 0px;
  bottom: -10px;
  width: 0px;
  height: 0px;
  border-top: 10px solid #e9c70a;
  border-right: 10px solid transparent;
}
/* .v-data-table >>> tr {
  background-color: red;
} */
</style>
