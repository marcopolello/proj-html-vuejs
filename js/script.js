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
    ]
  },
  methods:{
    home: function () {
      location.reload();
      return false;
    },
  }
});
