<template>
  <v-container>
    <h2>나밟꿈의 내전 전적 확인하기</h2>
    <template>
      <v-expansion-panels class="mt-10">
        <v-expansion-panel v-for="(item, i) in $common.warResult.data" :key="i">
          <v-expansion-panel-header>
            {{ item.date }} 결과 : {{ item.result }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>1팀</th>
                    <th>2팀</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in $common.warResult.data" :key="item.name">
                    <td>
                      <v-card>
                        <v-card-title>내전 1팀 결과</v-card-title>
                        <v-card-subtitle
                          >닉네임, 챔피언, kda 순서</v-card-subtitle
                        >
                        <v-card-text
                          ><p>
                            1경기 : <br />{{ item.teamA.first.join('\r\n') }}
                          </p>
                          <p>
                            2경기 : <br />{{ item.teamA.second.join('\r\n') }}
                          </p>
                          <p>3경기 : <br />{{ item.teamA.third.join('\n') }}</p>
                        </v-card-text>
                      </v-card>
                    </td>
                    <td>
                      <v-card>
                        <v-card-title>내전 2팀 결과</v-card-title>
                        <v-card-subtitle
                          >닉네임, 챔피언, kda 순서</v-card-subtitle
                        >
                        <v-card-text
                          ><p>
                            1경기 : <br />{{ item.teamA.first.join('\n') }}
                          </p>
                          <p>
                            2경기 : <br />{{ item.teamA.second.join('\n') }}
                          </p>
                          <p>3경기 : <br />{{ item.teamA.third.join('\n') }}</p>
                        </v-card-text>
                      </v-card>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
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
.v-application p {
  white-space: break-spaces;
}
</style>
