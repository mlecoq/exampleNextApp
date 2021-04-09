import Link from "next/link";

const ServerSiderRendered = ({ date }) => {
  return (
    <div>
      <Link href="/">Home</Link>

      <p>{`Generated at ${new Date(date).toLocaleString()}`}</p>
    </div>
  );
};

export default ServerSiderRendered;

export async function getServerSideProps(context) {
  return {
    props: {
      date: new Date().toISOString(),
    }, // will be passed to the page component as props
  };
}
