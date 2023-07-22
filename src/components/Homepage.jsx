// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://your-wordpress-site/wp-json/wp/v2/posts')
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title.rendered}</h2>
//           <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomePage;
