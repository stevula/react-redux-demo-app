This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# EarnUp Interview Project

## Getting Started

#### Prerequisites

- [node](https://nodejs.org/en/download/)

#### Installing

From project root (same directory as package.json) run:
```
npm install
```

#### Running

```
npm start
```

#### Features
- View an up-to-date list of Redux contributors (refreshed on application start).
- Filter contributors by GitHub handle ("starts with").
- Vote contributors up or down.

#### Design Choices
- User is allowed to vote more than once so as to demo the voting system (and there is no user auth to prevent this anyways).
- I used [react-materialize](https://react-materialize.github.io)'s implementation of [MaterializeCSS](http://materializecss.com/) for its styles/layouts and some generic components.
