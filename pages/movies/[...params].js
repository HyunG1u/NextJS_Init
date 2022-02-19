import { useRouter } from "next/router";
import Title from "../../components/Title";

export default function Detail({ params }) {
  const router = useRouter(); //client-side-render
  const [title, id] = params || [];
  return (
    <div>
      <Title title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  //server-side-render
  return {
    props: {
      params,
    },
  };
}
