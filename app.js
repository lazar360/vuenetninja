const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
           title : 'The Final Empire',
           author : 'George R. R. Martin',
           age : 45,
           x : 0,
            y : 0,
        }
    },
    methods: {
        changeTitle(title) {
           // this.title = 'A Game of Thrones';
           this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
        alert(e);
    },
    handleMousemove(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
    }

}
}
);

app.mount('#app')