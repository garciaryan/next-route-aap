import { GetStaticProps } from "next";
import { Post } from "../posts";
import Link from "next/link";

export default function PostPage({ post }: { post: Post }) {
  return (
    <div className="container px-[5%] my-10">
      <h1 className="pb-10 text-2xl">{post.title}</h1>
      <h2 className="text-xl">{post.body}</h2>
      <Link href="/posts" className="inline-block mt-10 hover:text-red-400">Back to posts</Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  const post: Post = await res.json();
  return {
    props: {
      post
    }
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return {
    paths,
    fallback: false
  }
}