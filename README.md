# counter-app
A counter application that helps count the number of visitors entering a facility


---

# 🧮 Counter App

A simple JavaScript project where I learned how to manipulate the DOM, update UI elements dynamically, and handle user interactions using functions and variables.

---

## 🚀 Overview

This project is a basic counter that increments a number each time a button is clicked.
The user can also **save** the current count, which gets added to a list of previous entries.

It helped me practice **JavaScript fundamentals**, including DOM selection, event handling, and updating the UI without reloading the page.

---

## 📚 What I Learned

### ✔ DOM Manipulation

* Used `document.getElementById()` to access HTML elements.
* Updated text using `.innerText` and `.textContent`.

### ✔ Variables & State

* Stored the counter value in a variable (`count`).
* Learned how the UI reflects the changing value.

### ✔ Functions

* Created functions for the **Increment** and **Save** buttons.
* Understood how functions respond to user actions.

### ✔ Updating the UI

* Displayed new values instantly without page reloads.
* Appended previous entries in real time.

### ✔ Debugging

* Used `console.log()` to verify that elements were selected correctly.

---

## 🧠 Code Snippet (Core Logic)

```js
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

let previousEl = document.getElementById("previous-el");
function save() {
    let saveBtn = " " + count + " - ";
    previousEl.textContent += saveBtn;
    countEl.innerText = 0;
    count = 0;
}
```

---

## 📦 Features

* Increment the counter
* Save previous counts
* Reset automatically after saving
* Simple, clean UI
* Fully beginner-friendly JavaScript project

---

## 🧰 Tech Stack

* **HTML**
* **CSS**
* **JavaScript (DOM manipulation)**

---




