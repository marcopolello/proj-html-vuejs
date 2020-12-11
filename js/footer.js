var root = new Vue({
  el: '#root',
  data: { // dati del footer
    logoFoot: {
      picture: 'img/logo.png',
      text: 'logo-nexgen',
    }, //logo footer
    footContact: {
      style: 'text-align: left; font-size: 10px; color: white; padding: 0 30px; margin: 5px 0;',
      text: 'a Functional HTML template for Corporate & Business',
      contact_tel: {
        icona: 'fas fa-phone',
        stile: 'font-size:10px; display:inline-block;',
        indirizzo: '+1(306)1234-5678',
        url: 'https://contacts.google.com/?hl=IT'
      },
      contact_mail: {
        icona: 'fas fa-envelope',
        stile: 'font-size:10px; display:inline-block;',
        indirizzo: 'hello@example.com',
        url: 'https://contacts.google.com/?hl=IT'
      },
      position: {
        icona: 'fas fa-map-marker-alt',
        stile: 'font-size:10px; display:inline-block;',
        indirizzo: 'Main Avenue, 857',
        url: 'https://contacts.google.com/?hl=IT'
      },
    }, //contatti/posizione footer
    bottoneFoot: {
      picture: 'img/hover-button1.png',
      stile: 'max-width:100px; height:auto; margin:10px 50px 10px 0;'
    },
    listeFoot: [
      {
        title: 'About',
        links: ['thecompany','institutional','social & events','innovation','enviroment','tenchnology',]
      },
      {
        title: 'Service',
        links: ['Audit','institutional','social & events','regulatory','Financial','Legal',]
      },
      {
        title: 'Support',
        links: ['Privacy','TermOfUse','about','information','Cookies','Accessibility',]
      }
    ], //vari link del footer
    foot_bot: [
      {
        text: 'Enjoy the low price. We are tracking any intention of piracy',
        style: 'font-size: 12px; padding: 10px 0; color: white;',
      },
      {
        text: '© 2020 NEXGEN is proudly Powered by',
        style: 'font-size: 12px; padding: 10px 0; color: white;',
        link: {text: 'Codings', href: 'https://stackoverflow.com/'}
      }
    ] //footer(copyright)
  },
});
