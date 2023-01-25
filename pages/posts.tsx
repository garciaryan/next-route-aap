import Link from 'next/link';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Blog({ posts }: { posts: Post[] } ) {
  let firstTen = posts
    .filter(post => post.id <= 10 )
    .map(post => {
      return (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="hover:text-red-400">{post.title}</Link>
        </li>
      )
    });

  return (
    <div className="container px-[5%] my-10">
      <h1 className="text-3xl">Blog</h1>
      <ol className="text-lg list-disc">
        {firstTen}
      </ol>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts
    }
  }
}