



export function getUserToDo(id){
  console.log(id)
    return fetch('https://jsonplaceholder.typicode.com/todos?userId='+id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
    
}