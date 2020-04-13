class App {
  constructor() {
    this.notes = [];

    console.log("Hello World");
    this.$form = document.querySelector("#form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });

    this.$form.addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      const hasNote = title || text;
      if (hasNote) {
        // add note
        this.addNote({ title, text });
      }
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);
    if (isFormClicked) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form.classList.toggle("form-open");
    this.$noteTitle.style.display = "block";
    this.$formButtons.style.display = "block";
    console.log("opening form");
  }

  closeForm() {
    this.$form.classList.toggle("form-open");
    this.$noteTitle.style.display = "none";
    this.$formButtons.style.display = "none";
    console.log("closing the form");
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1,
    };

    this.notes = [...this.notes, newNote];
    //console.log(this.notes);
    let fragment = new DocumentFragment();
    let placeHolder = document.getElementById("placeholder-text");
    // this.notes.forEach(function (post) {
    //   console.log(post);
    var p_element = document.createElement("p");
    p_element.innerHTML = `${note.title} <br/> ${note.text}`;
    fragment.appendChild(p_element);
    // });
    placeHolder.appendChild(fragment);
  }
}

new App();
