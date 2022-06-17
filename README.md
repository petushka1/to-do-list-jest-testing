![](https://img.shields.io/badge/Microverse-blueviolet)

# To Do List
## Testing functionality

A Books manager webapp that lists existing records and allows user to add and remove to and from the books record.

## TEST (Scope and Fllow)

#### ⚡ ADD FUNCTION

✔️check array length after a new element added

✔️check ``` <ul> ``` children number after a new ``` <li> ``` created

✔️check new array element value ``` toMatchObject ```

#### ⚡ REMOVE FUNCTION

✔️check array length after an element removed

✔️check ``` <ul> ``` children number after ``` <li> ``` element removed



#### ⚡ UPDATE FUNCTION

✔️ check ``` li ``` child ```:placeholder```  to equal test case value

✔️ check ```array[index].description``` to equal test case value

#### ⚡ UPDATE COMPLETED STATUS FUNCTION

✔️ check the status of array element to change to true on ```checkbox.checked = true```;

#### ⚡ CLEAR ALL SELLECTED FUNCTION

✔️ check all completed ```li``` removed when function invoked;

✔️ check all corresponding array elements are removed;

## Built With

- html
- css
- JavaScript
- Node.js
- npm
- jest


## Getting Started

Use this repo as a reference or clone to customize for your own project.

### [Live Demo](https://petushka1.github.io/to-do-list-review/)

### Prerequisites

- Must have a working computer
- A Web-Browser installed (Chrome - Recommended)

### Setup

- Install a text editor which will work for you.
_I personally prefer [Atom](https://atom.io/)_
- Clone this project repository on your local computer. [link](../../)
- Open the project directory with _Text Editor_

### Install

Open _Terminal/Git Bash_ inside your and run
  ```
    npm install --force
  ```
Install _Jest_ to run tests
  ```
    npm install --save-dev jest
  ```
Install _JSDOM_ to manipulate document elements
```
  npm install --save-dev jsdom global-jsdom
```
Install _Local Storage Mock_ to interact with local storage
```
  npm i --save-dev jest-localstorage-mock
```

### Run linters tests

- For _hint_ tests, run
  ```
    npm run lint:hint
  ```
- For _style_ tests, run
  ```
    npm run lint:style
  ```
- For _eslint_ tests, run
  ```
    npm run lint:es
  ```



## Authors

👤 **Nadezhda**

- GitHub: [@petushka1](https://github.com/petushka1)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Fellow Micronauts
