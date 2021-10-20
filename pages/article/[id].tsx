import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  // useEffect(() => {
  //   try {
  //     async () => {
  //       const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const response = await request.json();
  //       await setArticles(response);
  //     };
  //   } catch {
  //     console.log("erorr");
  //   }
  // }, []);

  return (
    <div>
      <p>single article</p>
      {/* <Link href="/article/[id]/]" as={`/article/${id}`}>
        <a>First comment</a>
      </Link> */}
    </div>
  );
};

export default Article;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
