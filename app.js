const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
           title : 'The Final Empire',
           author : 'George R. R. Martin',
           age : 45,
        }
    },
    methods: {
        changeTitle(title) {
           // this.title = 'A Game of Thrones';
           this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
    }
}
})

app.mount('#app')