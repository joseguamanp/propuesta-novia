var app = new Vue({
    el: "#app",
    data() {
        return {
            titulo:"¿Quieres ser mi novia?",
            nombre:"Leidy",
            estilos:{
                top:'auto',
                left:'auto'
            },
            imagen:{
                novio:'img/novio.png',
                modal:'img/amor.jpg'
            }
        }
    },
    methods: {
        abrirmodal(){
            $("#exampleModal").modal("show");
        },
        moverboton(){
            this.estilos.top = `${Math.random() * 500}px`;
            this.estilos.left = `${Math.random() * 300}px`;
        }
    },
})