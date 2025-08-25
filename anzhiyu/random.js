var posts=["2025/08/25/hello-world/","2025/08/25/血片/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };