import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const Pid = router.query.productID;

  return <h1>Details of Product: {Pid}</h1>;
}

export default ProductDetails;
