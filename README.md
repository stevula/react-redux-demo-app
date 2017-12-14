This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# React Redux Demo App

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
- Filter contributors by GitHub handle (using "starts with" substring).
- Vote contributors up or down to change their position in the list.

#### Design Choices
- All conntributors are fetched from GitHub at once so that they can be found from the search field. If it weren't for the search feature, I would probably have requested only the first page of contributors until others were needed.
- The user is allowed to vote more than once in order to more easily test the voting system. There is also no user auth to prevent this anyways.
- I used [react-materialize](https://react-materialize.github.io)'s implementation of [MaterializeCSS](http://materializecss.com/) for its styles/layouts and some generic components. Unfortunately, some of the components create HTML that is not accessible (like <a> where <button> would be more appropriate), so I would now avoid this library for future projects until it improves.

#### Todo
- Add GitHub authentication to avoid rate-limiting (60 requests/hour).
- Paginate the collaborators list.
- Update the collaborators list after some interval. Perhaps add a manual refresh button as well.
- Add loading and error views.
