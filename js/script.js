var app = new Vue({
  el: '#app',
  data: {
    orario:{
      stile: 'font-size:10px; display:inline-block;',
      worktime: 'Mon-Sat 9:00-18:00',
      icona: 'fas fa-clock'
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
    attivo: 0
  },
  methods:{
    // ricarica pagina
    home: function () {
      location.reload();
      return false;
    },
    // alza/abbassa dropmenu
    dropMenu: function (i) {
      this.attivo = i;
      //console.log(this.attivo);
      if (this.linkList[i].dropmenu.visible == false) {
        this.linkList[i].dropmenu.visible = true;
      } else if (this.linkList[i].dropmenu.visible == true) {
        this.linkList[i].dropmenu.visible = false;
      }
    }
  }
});
