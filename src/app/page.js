import Card from "@/components/Card";
import Parent from "@/components/Parent";
import React from "react";

const Home = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return (
<div>
<h1>this is the h1 tag from the page</h1>
</div>
 
  );
};

export default Home;
