// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { people } from "../../../data/people";

const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export async function getServerSideProps() {
  // Fetch data from external API
  //   const res = await fetch(`https://.../data`);
  //   const data = await res.json();

  // Pass data to the page via props

  const max = people.length-1;

  const aPerson = people[randomIntFromInterval(0, max)];

  return { props: { aPerson } };
}

const Post = ({ aPerson }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>This is a post no {id}</h1>
      <img src="./chart.svg" alt="chart" width={24} height={24} />

      <div>
        <ul>
          <li>
            {aPerson.id} - {aPerson.firstName} - {aPerson.lastName}
          </li>
        </ul>
      </div>

      <p>
        <Link href="/">Home</Link>
      </p>
    </>
  );
};

export default Post;
