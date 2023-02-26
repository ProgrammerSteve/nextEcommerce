import Head from "next/head";
import Card from "@/components/card/Card";
import { NextPage } from "next/types";
import client from "@/services/apollo-client";
import { GET_ITEMS } from "@/utils/gqlQueries/queries";
import { Product } from "@/types/items";
import { ApolloError } from "@apollo/client";
import { GetServerSideProps } from "next";

interface Props {
  products: Product[];
  error: ApolloError | null;
}

const Home: NextPage<Props> = ({ products, error }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-[100%] flex justify-center bg-slate-600">
        <div className="h-[100%] grow grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-slate-500 overflow-y-scroll scrollbar-hide place-items-center py-5 px-2 xs:px-5 gap-y-8 scroll scroll-smooth">
          {!error &&
            products.map((product) => (
              <Card product={product} key={`Display-card-${product.id}`} />
            ))}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data, error } = await client.query({ query: GET_ITEMS });
  let products: Product[] = data.items;
  return {
    props: {
      products: products,
      error: error ? error : null,
    },
  };
};
