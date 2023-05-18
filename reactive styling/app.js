const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisibible: true,
      inputBackgroundColor: '',
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisibible,
        hidden: !this.paragraphIsVisibible,
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisibible = !this.paragraphIsVisibible;
    },
  },
});

app.mount('#assignment');
