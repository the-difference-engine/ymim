const axios = require("axios");

const { data } = axios.post("http://localhost:1337/enroll-pages", {
  data: {
    pageText: "hi",
    pageImage: "image"
  },
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8"
  }
});

console.log(data);
