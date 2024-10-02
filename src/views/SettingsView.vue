<template>
  <div class="settings">
    <h1>Настройки стикеров</h1>
    <router-link :to="{name: 'home'}">Главная</router-link>
    <Stickers>
      <div class="col" v-for="(sticker, index) in stickers">
        <Sticker
          :key="index"
          :text="sticker.text"
          @handleInput="handleInput($event, index)"
          @handleRemove="removeSticker(index)"
          @handleSave="handleSave()"
        />
      </div>
      <div class="col">
        <Sticker
          :text="newStickerText"
          isNew
          @handleInput="handleAddInput($event)"
          @handleAdd="addSticker()"
        />
      </div>
    </Stickers>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sticker from "@/components/Sticker.vue"
import Stickers from "@/components/Stickers.vue";

export default {
  name: 'SettingsView',
  components: {Stickers, Sticker},
  data() {
    return {
      newStickerText: ''
    }
  },
  computed: {
    ...mapGetters(['stickers']),
  },
  methods: {
    ...mapActions(['add', 'remove', 'saveAll']),
    handleInput(value, index) {
      value = value.trim()
      this.stickers[index].text = value
    },
    handleAddInput(value) {
      value = value.trim()
      this.newStickerText = value
    },
    addSticker() {
      this.add({ text: this.newStickerText })
      this.newStickerText = ''
    },
    removeSticker(index) {
      this.remove(index)
    },
    handleSave() {
      this.saveAll()
    }
  },
}
</script>