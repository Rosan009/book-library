class Library {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    add() {
        return `${this.title} written by ${this.author}`;
    }
}

const form = document.querySelector(".input-type");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    const lib = new Library(title, author);
    const content = document.getElementById("content")
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<span>${lib.add()}</span>
        <button class="mark-read" style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer;">mark read</button>
        <button class="remove" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer;">remove</button>`;
    content.appendChild(newDiv);

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        }); 
    });

    const markButtons = document.querySelectorAll('.mark-read');
    markButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const book = e.target.previousElementSibling;
            book.innerHTML = `<del>${lib.add()}</del>`;
        });
    });
    document.getElementById("title").value='';
    document.getElementById("author").value='';
});
