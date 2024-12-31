const createToDo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getToDo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
  let todo = {
    title: "Jay Sagar",
    body: "Weeb",
    userId: 1200,
  };
  let todor = await createToDo(todo);
  console.log(todor);
  console.log(await getToDo(101))
};

mainFunc();
