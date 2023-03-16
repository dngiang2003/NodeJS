// Chuyển đổi đoạn code  từ promise sang async/await

async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
}

getUsers();