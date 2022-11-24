export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((rony) => {
    return {
      params: { id: rony.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: { rony: data },
  };
}
const Detail = ({ rony }) => {
  return (
    <div>
      <h1>{rony.title}</h1>
    </div>
  );
};
export default Detail;
