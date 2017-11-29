Create a React web application that loads all of the redux contributors and displays each contributor’s avatar and login name. Use the Github API v3 to get the entire list of contributors for reactjs/redux. The docs are here: https://developer.github.com/v3/

Provide a search text field at the top to filter these contributors by name. For example an “a” in the search text field should only show contributors with usernames that begin with “a”. “mik” in the search text field should only show contributors with usernames that begin with “mik”.

Provide a user interface to upvote/downvote each contributor and show vote totals for each contributor.

Endpoint: https://api.github.com/repos/reactjs/redux/contributors