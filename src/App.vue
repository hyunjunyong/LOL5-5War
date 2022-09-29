<template>
  <v-app>
    <ul>
      <li
        class="horizontal"
        v-for="item in menu"
        :key="item.title"
        @click="goHref(item.href)"
      >
        {{ item.title }}
      </li>
      <li class="vertical">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </li>
    </ul>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pt-0" dense>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          @click="goHref(item.href)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: null,
      mini: false,
      menu: [
        {
          href: '/',
          title: '홈으로 이동하기',
        },
        {
          href: 'https://open.kakao.com/o/gWUT7Ble',
          title: '카톡방으로 이동하기',
        },
        {
          href: '/teambuild',
          title: '내전 팀짜기로 이동하기',
        },
        {
          href: '/dataTable',
          title: '팀원 확인하기',
        },
      ],
    };
  },
  created() {},
  methods: {
    goHref(href) {
      if (href === 'https://open.kakao.com/o/gWUT7Ble') {
        window.open(href, '_blank');
      } else {
        this.$router.push(href).catch(() => {});
      }
    },
  },
};
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 20px;
  overflow: hidden;
  background-color: #f3f3f3;
}
ul li {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}
.vertical {
  display: none;
}
@media (max-width: 600px) {
  .horizontal {
    display: none;
  }
  .vertical {
    display: block;
  }
  ul {
    justify-content: flex-start;
  }
}
</style>
