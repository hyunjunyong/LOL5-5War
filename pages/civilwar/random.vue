<template>
  <div class="relative m-10">
    <p>랜덤 사다리 팀 짜기</p>
    <nuxt-img src="/img/versus.jpg" />
    <div class="team_building">
      <div class="team_section">
        <h2>Team 1</h2>
        <ul>
          <li v-for="(player, index) in team1" :key="index">
            {{ player.nickname }} - {{ player.position }}
          </li>
        </ul>
      </div>
      <div class="team_section">
        <h2>Team 2</h2>
        <ul>
          <li v-for="(player, index) in team2" :key="index">
            {{ player.nickname }} - {{ player.position }}
          </li>
        </ul>
      </div>
    </div>
    <el-button @click="goRandom()">랜덤 돌리기</el-button>
  </div>
</template>

<script setup lang="ts">
interface participants {
  nickname: string;
  position: string;
}
const participants = ref<participants[]>([
  { nickname: "꽃니코", position: "" },
  { nickname: "까까", position: "" },
  { nickname: "안약", position: "" },
  { nickname: "챙느", position: "" },
  { nickname: "머스탱", position: "" },
  { nickname: "나밟꿈", position: "" },
  { nickname: "이자경", position: "" },
  { nickname: "더정기", position: "" },
  { nickname: "솜포도", position: "" },
  { nickname: "피야", position: "" },
]);
const team1 = ref<participants[]>([] as participants[]);
const team2 = ref<participants[]>([] as participants[]);
const positions = ["top", "jg", "mid", "adc", "sup"];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const buildingTeam = () => {
  team1.value = [];
  team2.value = [];

  const shuffledParticipants = [...participants.value];
  shuffleArray(shuffledParticipants);
  for (let i = 0; i < shuffledParticipants.length / 2; i++) {
    team1.value.push(shuffledParticipants[i]);
  }
  for (let i = shuffledParticipants.length / 2; i < shuffledParticipants.length; i++) {
    team2.value.push(shuffledParticipants[i]);
  }

  assignPositions();
};
const assignPositions = () => {
  let positionsCopy = [...positions];
  for (let i = 0; i < team1.value.length; i++) {
    const randomIndex = Math.floor(Math.random() * positionsCopy.length);
    team1.value[i].position = positionsCopy[randomIndex];
    positionsCopy.splice(randomIndex, 1);
  }
  positionsCopy = [...positions];
  for (let i = 0; i < team2.value.length; i++) {
    const randomIndex = Math.floor(Math.random() * positionsCopy.length);
    team2.value[i].position = positionsCopy[randomIndex];
    positionsCopy.splice(randomIndex, 1);
  }
};

const goRandom = () => {
  buildingTeam();
};
buildingTeam();
</script>

<style scoped>
.team_building {
  @apply relative flex justify-around items-center gap-10 mt-[6.5rem] w-[640px];
}
img {
  @apply absolute top-10;
}
h2,
li {
  @apply text-white;
}
</style>
