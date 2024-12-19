import axios from "axios";

export default function AdminProductsPage() {
  axios.get("http://localhost:3000/api/products").then((res) => {
    console.log(res);
  });

  return (
    <>
      <h1>Admin Products Page</h1>
    </>
  );
}
