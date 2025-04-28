const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getData = (url: string) => {
  return fetch(url).then((data) => data.json());
};

getData(COMMENTS_URL).then((data: CommentModel[]) => {
  for (let i = 0; i < data.length; i++) {
    const { id, email } = data[i];
    console.log(`ID: ${id}, Email: ${email}...`);
  }
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
