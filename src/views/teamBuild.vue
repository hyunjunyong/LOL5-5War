<template>
  <v-container>
    <h2>내전 팀짜기</h2>
    <div>
      <label>
        <input
          v-model="teamMember"
          placeholder="톡방 닉네임을 입력하세요"
        /><v-btn
          height="32px"
          class="mx-2"
          dark
          small
          color="primary"
          @click="addTeamMember()"
          ><v-icon dark> mdi-plus </v-icon>추가하기</v-btn
        ></label
      >
      <v-textarea
        class="ma-3 pt-0"
        height="50px"
        no-resize
        label="내전 참여 인원"
        rows="1"
        v-model="allTeamMember"
      ></v-textarea>
      <v-simple-table dark class="justify-center" dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">1팀</th>
              <th class="text-left">2팀</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr> -->
            <tr>
              <td>혀나님</td>
              <td>수성못</td>
            </tr>
            <tr>
              <td>여채정</td>
              <td>음식</td>
            </tr>
            <tr>
              <td>대봉동</td>
              <td>나밟꿈</td>
            </tr>
            <tr>
              <td>한은총재</td>
              <td>머스탱</td>
            </tr>
            <tr>
              <td>탈출</td>
              <td>문고리</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      teamMember: '',
      // allTeamMember: [
      //   '수성못',
      //   '여채정',
      //   '혀나님',
      //   '나밟꿈',
      //   '한은총재',
      //   'EKAPE',
      //   '대봉동왕주먹',
      //   '문고리만우리집',
      //   '머스탱',
      //   '솜포도',
      // ],
      allTeamMember: [],
    };
  },
  created() {
    // this.$api
    //   .getTeam(this.allTeamMember)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  methods: {
    addTeamMember() {
      this.allTeamMember.push(this.teamMember);
      this.teamMember = '';
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
input {
  width: 100%;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin: 15px 0 15px;
}
label {
  position: relative;
}
label button {
  position: absolute;
  bottom: 0;
  right: 5px;
  transform: translate(13px, 7px);
}
textarea {
  margin: 20px 5px;
}
</style>
