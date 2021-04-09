import Link from "next/link";

const StaticRendered = ({ date }) => {
  return (
    <div>
      <Link href="/">Home</Link>

      <p>{`Generated at ${new Date(date).toLocaleString()}`}</p>
    </div>
  );
};

export default StaticRendered;

export async function getStaticProps(context) {
  return {
    revalidate: 10,
    props: {
      date: new Date().toISOString(),
    }, // will be passed to the page component as props
  };
}
