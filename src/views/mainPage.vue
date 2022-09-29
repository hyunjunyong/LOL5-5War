<template>
  <v-container>
    <h2>🐰성인 LOL🐰: 2030 친목 롤방</h2>
    <v-row dense>
      <v-col v-for="card in menu" :key="card.title" :cols="card.flex">
        <v-card class="pa-0">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250px"
            @click="goHref(card.href)"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      menu: [
        {
          src: require('../assets/bee.jpeg'),
          href: 'https://open.kakao.com/o/gWUT7Ble',
          title: '카톡방으로 이동하기',
          flex: 12,
        },
        {
          src: require('../assets/ari.jpeg'),
          href: '/teambuild',
          title: '내전 팀짜기로 이동하기',
          flex: 6,
        },
        {
          src: require('../assets/lol.png'),
          href: '/dataTable',
          title: '팀원 확인하기',
          flex: 6,
        },
      ],
    };
  },
  methods: {
    goHref(href) {
      if (href === 'https://open.kakao.com/o/gWUT7Ble') {
        window.open(href, '_blank');
      } else {
        this.$router.push(href);
      }
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
v-btn {
}
.link {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  line-height: 1.4;

  padding-top: 10px;
}
.v-toolbar__items {
  gap: 15px;
}
ul {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
li {
  list-style: none;
}
</style>
