class App {
  constructor() {
    console.log("Hello World");
    this.$form = document.querySelector("#form");
    this.$noteTitle = document.querySelector("#note-title");
    this.$formButtons = document.querySelector("#form-buttons");
    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
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
}

new App();
