var actions = new Vue({
  el: '#actions',
  data: { //dati actions & projects
    attivo: 0,
    progetti: [
      { //ogni obj un progetto
        title: 'All',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: "President's speech at the annual meeting",
            img: 'img/project-2.jpg'
          },
          {
            p: 'International business trip in Shangai',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Technology workshop with education theme',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Donation of clothes and food the partner NGO',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Confraternization of the procurement team',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Instituctional',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Social',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Events',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Innovation',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Enviroment',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
      { //ogni obj un progetto
        title: 'Technology',
        subprogetti: [
          { //ogni obj un progetto
            p: 'Academic professional program in social media',
            img: 'img/project-1.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-2.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-3.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-4.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-5.jpg'
          },
          {
            p: 'Academic professional program in social media',
            img: 'img/project-6.jpg'
          },
        ]
      },
    ],
  },
  methods: {
    selezioneItem(i){
      alert("akjnasj");
      // rendo item preso al click attivo
      this.attivo = i;
    },
    checkIfActive: function (indice) {
      if (indice == this.attivo){
        return "selected"
      }
    },
  }
});
