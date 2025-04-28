"use strict";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const getData = (url) => {
    return fetch(url).then((data) => data.json());
};
getData(COMMENTS_URL).then((data) => {
    for (let i = 0; i < data.length; i++) {
        const { id, email } = data[i];
        console.log(`ID: ${id}, Email: ${email}...`);
    }
});
