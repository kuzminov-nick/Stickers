<template>
  <div class="sticker">
    <textarea
      :value="text"
      placeholder="Введите текст стикера"
      :readonly="isReadonly"
      @input="handleInput"
      class="sticker-field"
      :class="{'sticker-field_readonly': isReadonly, 'sticker-field_new': isNew}"
    />
    <button v-if="isEdited && !isNew" @click="handleSave" class="sticker-btn">Сохранить</button>
    <button v-if="!isReadonly && !isNew" @click="$emit('handleRemove')" class="sticker-btn sticker-btn_delete">Удалить</button>
    <button v-if="isNew" @click="handleAdd" class="sticker-btn">Добавить</button>
  </div>
</template>

<script>
export default {
  name: 'Sticker',
  props: {
    text: {
      type: String,
      required: true,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isEdited: false
    }
  },
  methods: {
    handleInput(event) {
      this.isEdited = true
      this.$emit('handleInput', event.target.value)
    },
    handleAdd() {
      if(this.text) {
        this.$emit('handleAdd')
      }
    },
    handleSave() {
      if(this.text) {
        this.isEdited = false
        this.$emit('handleSave')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sticker {
  width: 150px;
  height: 150px;
  position: relative;
  font-size: 16px;
  text-align: center;
  &-field {
    width: 100%;
    height: 100%;
    padding: 20px;
    resize: none;
    background-color: lightgoldenrodyellow;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    border: 2px solid #ccc;
    border-radius: 10px;
    &:hover {
      background-color: lightcyan;
    }
    &_readonly {
      outline: none;
    }
    &_new {
      background-color: lightgreen;
    }
  }
  &-btn {
    position: absolute;
    bottom: 1px;
    right: 1px;
    &_delete {
      top: 0px;
      bottom: auto;
    }
  }
}
</style>