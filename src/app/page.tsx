// src/app/page.tsx (Server Component)
import { client } from '@/sanity/lib/client';
import { FC } from 'react';
import ProductList from '@/Components/ProductList';

// Fetch data from Sanity in the server component
async function getData() {
  const data = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      tags,
      "imageUrl": image.asset->url
    }`
  );
  return data;
}

// Server component for handling data fetching
const Page: FC = async () => {
  const data = await getData();

  // Return the product list component with the fetched data as a prop
  return <ProductList products={data} />;
};

export default Page;
