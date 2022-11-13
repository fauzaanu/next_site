import { useRouter } from "next/router";

export default function CompName(props: { ranch: any }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  return router.push("/blog");
  // <div>
  //   <div className="blog_id">{props.ranch[`${id}`]["post_id"]}</div>
  //   <div className="blog_title">{props.ranch[`${id}`]["blog_title"]}</div>
  //   <div className="blog_description">
  //     {props.ranch[`${id}`]["blog_description"]}
  //   </div>
  // </div>
}

// get serverside props

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get_blogs");
  const data = await res.json();

  //   console.log(data);
  return {
    props: {
      ranch: data,
    },
  };
}
