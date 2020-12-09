var app = new Vue ({
  el: '#app',
  data: {
    pictures: ["img/bg-parallax1.png", "img/bg-parallax2.png", "img/bg-parallax3.png"],
    currentIndex: 0,
    activeClass: "active",
    timer: null,
  },
  created: function() {
    this.startSlide();
  },
  mounted() {
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 37) {app.prevPic()};
      if (e.keyCode === 39) {app.nextPic()};
    });
  },
  methods: {
    // funzione per far avanzare slide in automatico
    startSlide: function() {
      this.timer = setInterval(this.nextPic, 4000);
    },
    nextPic: function () {
      if (this.currentIndex >= (this.pictures.length - 1)) {
        this.currentIndex = 0;
      } else {
        this.currentIndex ++;
        // console.log(this.currentIndex);
      }
    },
    prevPic: function () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.pictures.length - 1;
      } else {
        this.currentIndex --;
        // console.log(this.counter);
      }
    }
  }
})
