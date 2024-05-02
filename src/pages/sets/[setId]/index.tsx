import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { getAllSets, getSetsById } from "@/service/pokemon.service";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/models/enums";
import useSet from "@/hooks/useSet";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<{ props: { dehydratedState: DehydratedState } }> => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: [QueryKeys.set, context?.params?.setId],
//     queryFn: async () => {
//       const set = await getSetsById(context?.params?.setId as string);
//       return set;
//     },
//   });
//   return { props: { dehydratedState: dehydrate(queryClient) } };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  let allSets = await getAllSets();
  let listOfSetIdObjects = allSets.map((x) => {
    return { params: { setId: x.id } };
  });

  return { paths: listOfSetIdObjects.splice(0, 10), fallback: true };
};

export const getStaticProps: GetStaticProps<{
  serverSet: Set;
}> = async (context) => {
  console.log("I am from getStatic props Server");

  let returnVal = null as unknown as Set;
  try {
    const tempSets = await getSetsById(context?.params?.setId as string);
    //throw new Error("Custom Error");
    returnVal = tempSets;
  } catch (e) {
    console.log(e);
    return { notFound: true, revalidate: 1200 };
  }

  return { props: { serverSet: returnVal } };
};

// export const getStaticProps: GetStaticProps<{
//   dehydratedState: DehydratedState;
// }> = async (context) => {
//   //console.log("I AM SERVER");

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: [QueryKeys.set, context?.params?.setId],
//     queryFn: async () => {
//       const set = await getSetsById(context?.params?.setId as string);
//       return set;
//     },
//   });
//   //console.log("I am from server");
//   return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 30 };
// };

// const setList: FC<{ serverSet: Set }> = ({ serverSet }) => {
//   const router = useRouter();
//   // console.log("I am in set page");
//   const [set, setSet] = useState<Set>(serverSet);

//   //console.log("router == ", router);
//   useEffect(() => {
//     let setId = router?.query.setId as string;
//     console.log("****");
//     //console.log("setId === ",setId);
//     //console.log("router query == ",setId);
//     //
//     if (serverSet) {
//       setSet(serverSet);
//     }
//   }, [serverSet]);

//   return (
//     <div className="flex h-screen">
//       {router.isFallback ? (
//         <>Fallback Loading</>
//       ) : (
//         <div className="flex flex-col items-center justify-center flex-grow">
//           <div className="relative h-[100px]">
//             <img
//               src={set?.images.logo || ""}
//               width={100}
//               height={100}
//               alt="demo"
//             ></img>
//             <div className="">{set?.name || "Loading..."}</div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const SetList = () => {
 // console.log(props);
  const router = useRouter();

  const {
    data: set,
    isLoading,
    isError,
  } = useSet(router?.query?.setId as string);
  return (
    <div className="px-3 h-full flex justify-center items-center flex-wrap">
      {/* {isLoading && "Loading...."} */}

      {router?.isFallback ? (
        <>Fallback Loading</>
      ) : (
        <div key={set?.id} className="flex justify-center items-center p-5 flex-col border border-lg">
          <div className="relative w-[100px] h-[100px]">
            <Image src={set?.images?.logo || ""} fill alt="set logo"></Image>
          </div>
          <div className="">{set?.name}</div>
        </div>
      )}

      {/* {isError && "Error"} */}
    </div>
  );
};
export default SetList;
