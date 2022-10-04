<template>
  <v-container>
    <h2>현재 팀원</h2>
    <v-text-field v-model="search" single-line></v-text-field>
    <v-data-table
      :headers="$common.headers"
      :items="itemArray"
      :items-per-page="15"
      class="elevation-1 desktop"
      :search="search"
      v-if="tableWidth"
    ></v-data-table>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="(item, index) in title" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in simpleItemArray" :key="item.name">
            <td>{{ item.nick }}</td>
            <td>{{ item.tier }}</td>
            <td>
              {{ emptyPosi(item.position) }}
            </td>
            <td>{{ item.score }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      title: ['nick', 'tier', 'position', 'score'],
      member: [],
      search: '',
      tableWidth: false,
      windowWidth: window.innerWidth,
    };
  },
  created() {},
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
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
    simpleItemArray() {
      return this.$common.member.map((e) => {
        return {
          nick: e.nick,
          tier: e.tier,
          position: [
            e.top ? 'TOP' : '',
            e.jg ? 'JG' : '',
            e.mid ? 'MID' : '',
            e.ad ? 'AD' : '',
            e.sup ? 'SUP' : '',
          ],
          score: e.score,
        };
      });
    },
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth > 800) {
        this.tableWidth = true;
      } else this.tableWidth = false;
    },
    emptyPosi(array) {
      let a = array.filter((item) => {
        return item !== null && item !== undefined && item !== '';
      });
      return a.join(',');
    },
  },
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
