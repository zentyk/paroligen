<template>
  <input type="text" disabled v-model="generated">
  <br>
  <button @click="generatePassword">Generate Password</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PasswordGenerator from "./PasswordGenerator";
export default defineComponent ({
    name: 'ParolisGen',
    data () {
        return {
            generated: ''
        };
    },
    methods: {
      generatePassword() {
        let gen = new PasswordGenerator(16);
        this.generated = gen.generate();
      }
    }
});
</script>

<style scoped>
input {
  width: 50%;
  height: 3em;
  background-image: linear-gradient(90deg, #5D34BB, #E4007C);
  color: white;
  border : none;
  border-radius: 0.25em;
  text-align: center;
  font-size: 24px;
  font-weight: thin;
}

button {
  width: 50%;
  height: 2.5em;
  border-width: 5px;
  border-image-slice: 1;
  border-radius: 10%;
  background-color: white;
  border-image-source: linear-gradient(to left, #5D34BB, #E4007C);
}
</style>