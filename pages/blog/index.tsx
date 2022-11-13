import BackToPortFolio from "../../components/backtoportfolio";

export default function CompName(props: { ranch: any }) {
  console.log(typeof props.ranch);
  const data: any = props.ranch;
  console.log(props.ranch);

  const display_data = [];
  for (let i = Object.keys(props.ranch).length; i >= 1; i--) {
    {
      display_data.push(
        <div className="blog_card">
          {/* <div className="blog_id">{props.ranch[`${i}`]["post_id"]}</div> */}
          <div className="blog_title">{props.ranch[`${i}`]["blog_title"]}</div>
          <div className="blog_description">
            {props.ranch[`${i}`]["blog_description"]}
          </div>
        </div>
      );
    }
  }
  {
    console.log(display_data);
  }
  return (
    <div className="p-4 lg:p-4 grid grid-cols-12 h-screen">
      <BackToPortFolio link="/" text="" />
      {display_data}
    </div>
  );
}

// get serverside props

export async function getServerSideProps() {
  const res = await fetch("http://localhost:80/api/get_blogs");
  const data = await res.json();

  //   console.log(data);
  return {
    props: {
      ranch: data,
    },
  };
}
