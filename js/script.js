var app = new Vue({
  el: '#app',
  data: {
    orario:{
      stile: 'font-size:10px; display:inline-block;',
      worktime: 'Mon-Sat 9:00-18:00',
      iconaTimes: 'fas fa-clock'
    },
    contatti: [
      {
        icona: 'fas fa-phone',
        stile: 'font-size:10px; display:inline-block;',
        indirizzo: '+1(306)1234-5678',
        url: 'https://contacts.google.com/?hl=IT'
      },
      {
        icona: 'fas fa-envelope',
        stile: 'font-size:10px; display:inline-block;',
        indirizzo: 'hello@example.com',
        url: 'https://contacts.google.com/?hl=IT'
      },
    ],
    contattiSocial: [
      {
        icona: 'fab fa-facebook-f',
        stile: 'font-size:10px; margin: 0px 5px;',
        url: 'https://www.facebook.com/'
      },
      {
        icona: 'fab fa-twitter',
        stile: 'font-size:10px; margin: 0px 5px;',
        url: 'https://twitter.com/'
      },
      {
        icona: 'fab fa-linkedin-in',
        stile: 'font-size:10px; margin: 0px 5px;',
        url: 'https://www.linkedin.com/'
      },
    ],
    logo: {
      picture: 'img/logo.png',
      text: 'logo-nexgen'
    },
    linkList: [
      {
        text: 'home',
        dropmenu: {
          visible: false,
          links: ['link', 'link']
        }
      },
      {
        text: 'services',
        dropmenu: {
          visible: false,
          links: ['link', 'ciao', 'link', 'link']
        }
      },
      {
        text: 'about',
        dropmenu: {
          visible: false,
          links: ['faiquello', 'link']
        }
      },
      {
        text: 'projects',
        dropmenu: {
          visible: false,
          links: ['link', 'cosisifa', 'link']
        }
      },
      {
        text: 'results',
        dropmenu: {
          visible: false,
          links: ['link', 'link']
        }
      },
    ],
    bottoneHead: 'img/hover-button1.png',
    currentIndex: 0,
    activeClass: 'active',
    arrayblocchi: [
      {
        title: 'Ready Team',
        subtitle: 'no matter what your companies need, we will be ready to assistant you in the best way possible',
        buttons: ['img/hover-button1.png', 'img/hover-button2.png']
      },
      {
        title: 'Friendly Team',
        subtitle: 'no matter what your companies need, we will be ready to assistant you in the best way possible',
        buttons: ['img/hover-button1.png', 'img/hover-button2.png']
      },
      {
        title: 'International Team',
        subtitle: 'from all world',
        buttons: ['img/hover-button1.png', 'img/hover-button2.png']
      }
    ]
  },
  created: function() {
    this.startSlide();
  },
  methods:{
    // ricarica pagina
    home: function () {
      location.reload();
      return false;
    },
    // alza/abbassa dropmenu
    dropMenu: function (item, i, lista) {
      // for (var i = 0; i < lista.length; i++) {
      //   lista[i].dropmenu.visible = false;
      // }
      if (item.dropmenu.visible == true) {
        item.dropmenu.visible = false;
      } else if (item.dropmenu.visible == false) {
        item.dropmenu.visible = true;
      }
    },
    nextPic: function () {
      if (this.currentIndex >= (this.arrayblocchi.length - 1)) {
        this.currentIndex = 0;
      } else {
        this.currentIndex ++;
        // console.log(this.currentIndex);
      }
    },
    prevPic: function () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.arrayblocchi.length - 1;
      } else {
        this.currentIndex --;
        // console.log(this.counter);
      }
    },
    // funzione per far avanzare slide in automatico
    startSlide: function() {
      this.timer = setInterval(this.nextPic, 4000);
    },
  }
});
