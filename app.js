const app = Vue.createApp({
    data() {
        return {
            url:"https://devnantes.fr",
            showBooks: true,
           title : 'The Final Empire',
           author : 'George R. R. Martin',
           age : 45,
           x : 0,
            y : 0,
            booksArray : [
                {
                    title : 'The Final Empire II',
                    author : 'George R. R. Martin',
                    img:'assets/1.jpg',
                    isFav:true
                },
                {
                    title : 'The Long Walk',
                    author : 'George R. R. Martin',
                    img:'assets/2.jpg',
                    isFav:false
                },
                {
                    title : 'The Long Walk II',
                    author : 'George R. R. Martin',
                    img:'assets/2.jpg',
                    isFav:true
                },

            ],
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
    },
    // filteredBooks(){
    //     return this.booksArray.filter((book) => book.isFav);
    // },

}
}
);

app.mount('#app')