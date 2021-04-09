import Link from "next/link";

const ServerSiderRendered = ({ date, slug }) => {
  return (
    <div>
      <Link href="/">Home</Link>
      <p>Slug: {slug}</p>
      <p>{`Generated at ${new Date(date).toLocaleString()}`}</p>
    </div>
  );
};

export default ServerSiderRendered;

export async function getStaticProps(context) {
  return {
    props: {
      date: new Date().toISOString(),
      slug: context.params.slug,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
