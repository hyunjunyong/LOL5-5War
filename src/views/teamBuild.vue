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
        class="pt-0"
        height="50px"
        no-resize
        label="내전 참여 인원"
        rows="1"
        v-model="allTeamMember"
      ></v-textarea>
      <v-row no-gutters justify="center" class="mb-5">
        <v-col cols="auto"
          ><v-btn
            height="32px"
            small
            color="secondary"
            @click="getBuildMember()"
            ><v-icon dark> mdi-plus </v-icon>내전 팀 짜기 버튼</v-btn
          ></v-col
        >
      </v-row>

      <v-simple-table
        dark
        class="justify-center"
        dense
        v-if="teamA.length && teamB.length"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">포지션</th>
              <th class="text-left">1팀</th>
              <th class="text-left">2팀</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 120px">TOP</td>
              <td>{{ teamA.top }}</td>
              <td>{{ teamB.top }}</td>
            </tr>
            <tr>
              <td>JUG</td>
              <td>{{ teamA.jug }}</td>
              <td>{{ teamB.jug }}</td>
            </tr>
            <tr>
              <td>MID</td>
              <td>{{ teamA.mid }}</td>
              <td>{{ teamB.mid }}</td>
            </tr>
            <tr>
              <td>ADC</td>
              <td>{{ teamA.adc }}</td>
              <td>{{ teamB.adc }}</td>
            </tr>
            <tr>
              <td>SUP</td>
              <td>{{ teamA.sup }}</td>
              <td>{{ teamB.sup }}</td>
            </tr>
            <tr>
              <td>SCORE 총 합</td>
              <td>{{ teamA.score }}</td>
              <td>{{ teamB.score }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-card v-else
        ><v-card-text> 내전 팀원을 먼저 입력해주세요!</v-card-text></v-card
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      teamMember: '',
      allTeamMember: [],

      teamA: [],
      teamB: [],
    };
  },
  created() {},
  methods: {
    getBuildMember() {
      this.$api
        .getTeam(this.allTeamMember)
        .then((res) => {
          console.log(res);
          this.teamA = res.data.teamA[0];
          this.teamB = res.data.teamB[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
