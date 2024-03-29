const app = new Vue (
    {
        el: '#root',
        data: {
        

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                    ],
                }
            ],
           

            activeIndex:0,
            index:0,
            newMessage: "",
            filterMsg : "",


        },

        methods: {

            setActiveIndex(newIndex){
                this.activeIndex = newIndex;
                return this.activeIndex;
            },

            getFullPathImage: function(){                
                return'img/avatar' + this.contacts[this.activeIndex].avatar + '.jpg';         

            },

            //! this function tranform times in format HH:MM
            getHourFromArray(dateToSlice){
                let date = dateToSlice.split(" ");
                let dateNoSec = date[1].split(":");
                return dateNoSec[0] + ':' + dateNoSec[1];
            },

             //! this function return you the position of the last date 
            lastDate(activeIndex){
                let lengthArray = (this.contacts[activeIndex].messages.length) - 1
                return this.contacts[activeIndex].messages[lengthArray].date
            },

            scrollToEnd(){
                var container = document.querySelector(".rightside-mainblock");
                var scrollHeight = container.scrollHeight;
				container.scrollTop = scrollHeight;

            },
        

            //Funzione input per stampare il messaggio
            addMessage: function() {
                if (this.newMessage != "") {
                   
                    let msgElement = {
                        date: moment().format('DD/MM/YYYY HH:mm'),
                        message: this.newMessage,
                        status: 'sent',
                    }
                    this.contacts[this.activeIndex].messages.push(msgElement)
                    // richiama la funzione di risposta automatica
                    this.autoreply(this.newMessage);

                    this.newMessage = "";

                    this.scrollToEnd();

                }
            },


            // Funzione di risposta automatica 
            autoreply: function(messaggio) {
                console.log(messaggio);
                let reply = messaggio;
                setTimeout(() => {
                    console.log(reply);
                   
                    let msgElement = {  
                        date: moment().format('DD/MM/YYYY HH:mm'),                    
                        message: "OK",
                        status: 'received',
                    }
                    this.contacts[this.activeIndex].messages.push(msgElement)
                    console.log(reply);

    
                }, 1000);

            },

            // Funzione per ricercare l'utente
            searchUser(){

                let inputs = this.filterMessages.toLowerCase();
    
                console.log(inputs);
                this.contacts.forEach((contact) => {
    
                    // Controllo se contact.name include i caratteri degli input che digito sulla tastiera
                    if (contact.name.toLowerCase().includes(inputs)) {
                        contact.visible = true;
                    } else {
                        contact.visible = false;
                    }
                });
    
            },

        },

        mounted(){
            this.scrollToEnd();
        },


        updated(){
            this.scrollToEnd();
        },

    
 

})
