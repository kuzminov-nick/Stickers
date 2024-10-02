<template>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
  <div class="home">
    <h1>Доска стикеров</h1>
    <router-link :to="{name: 'settings'}">Настройки</router-link>
    <template v-if="stickers.length">
      <Stickers>
        <div class="col" v-for="(sticker, index) in stickers">
          <Sticker
            :key="index"
            :text="sticker.text"
            isReadonly
          />
        </div>
      </Stickers>
    </template>
    <div v-else :style="{marginTop: '16px'}">
      Перейдите в <router-link :to="{name: 'settings'}">Настройки</router-link>, чтобы добавить стикер.
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stickers from "@/components/Stickers.vue"
import Sticker from '@/components/Sticker.vue'

export default {
  name: 'HomeView',
  components: { Stickers, Sticker },
  computed: {
    ...mapGetters(['stickers']),
  }
}
</script>