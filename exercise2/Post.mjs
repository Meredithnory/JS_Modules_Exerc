export default class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;

        this.publish = function () {
            console.log(this.title, this.content);
        };
    }
}

