<template>
  <div class="m-40">
    <el-container>
      <el-header>
        <p class="font-bold text-xl">해피니스 롤 전용 사이트</p>
      </el-header>
      <el-main class="main_section">
        <el-card style="max-width: 480px" @click="router.push('/civilwar/random/')">
          <nuxt-img src="/img/ari.jpeg" />
          <p>랜덤 내전하러 가기</p>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
</script>

<style scoped>
.main_section {
  @apply flex justify-center items-center !important;
}
p {
  @apply flex items-center justify-center;
}
</style>
