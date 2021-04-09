import Link from "next/link";

const ServerSiderRendered = ({ date, user }) => {
  return (
    <div>
      <Link href="/">Home</Link>

      <p>{`Generated at ${new Date(date).toLocaleString()}`}</p>
      <p>{user.name.title}</p>
      <p>{user.name.first}</p>
      <p>{user.name.last}</p>
    </div>
  );
};

export default ServerSiderRendered;

export async function getStaticProps(context) {
  const result = await fetch("https://randomuser.me/api/");
  const user = (await result.json()).results[0];

  return {
    revalidate: 10,
    props: {
      user,
      date: new Date().toISOString(),
    }, // will be passed to the page component as props
  };
}
