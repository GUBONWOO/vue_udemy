const app = Vue.createApp({
  data() {
    return {
      name: 'koo',
      age: 30,
      imageUrl:
        'https://i.namu.wiki/i/5alxB2XSPo0QDTnzhdlf-TTIk-ZK9kkCnhWoZbxEMzwdFWE_oJxllBmBi70WXHGZ5E4s-qLk6S8GbHoYgYIsg-zafTI2cfwlFoIMQir3CVhaRAMzNwMXPmV2Qsk3aveJAawiNwb58neKBt7E5aWT8cNBnyuTzf0rDrDY9QkShkI.webp',
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculatRandom() {
      return Math.random();
    },
  },
});

app.mount('#assignment');
