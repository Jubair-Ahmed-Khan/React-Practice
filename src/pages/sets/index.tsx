// import { getAllSets } from "@/service/pokemon.service";
import useSets from "@/hooks/useSets";
import { QueryKeys } from "@/models/enums";
import { useSetListStore } from "@/store";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
} from "next";
import { Set, getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import { BookComponent } from "@/components/BookComponent";
// import {
//   GetServerSideProps,
//   GetServerSidePropsContext,
//   GetStaticProps,
// } from "next";
// import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";
// import { QueryKeys } from "@/models/enums";
// import useSets from "@/hooks/useSets";

//SSR = getServerSideProps
//SSG/ISR = getStaticProps + getStaticPaths
//getStaticPaths fallback = false | true | blocking

//CSR
// const SetList = () => {
//   const [sets, setSets] = useState<Set[]>([]);

// const setInit = async () => {
//   try {
//     const tempSets = await getAllSets();
//     setSets(tempSets);
//   } catch (e) {
//     console.log("Error: ", e);
//   }
// };
// useEffect(() => {
//   setInit();
// }, []);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>
//       {/* {!books && <h1>Loading....</h1>} */}
//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {sets?.map((set) => {
//           return (
//             <div key={set.id} className="flex px-3 flex-col">
//               <div className="relative w-[100px] h-[100px]">
//                 <img src={set?.images.logo || ""} alt="set logo"></img>
//               </div>
//               <div className="">{set?.name || "loading...."}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const SetList = (props: { serverSets: Set[] }) => {
//   console.log(props);

//   const { data: sets, isLoading, isError } = useSets();
//   return (
//     <div className="px-3 flex flex-wrap">
//       {isLoading && "Loading...."}
//       {sets?.map((set) => {
//         return (
//           <div key={set.id} className="flex px-3 flex-col">
//             <div className="relative w-[100px] h-[100px]">
//               <img src={set?.images.logo || ""} alt="set logo"></img>
//             </div>
//             <div className="">{set?.name || "loading...."}</div>
//           </div>
//         );
//       })}
//       {isError && "Error"}
//     </div>
//   );
// };

//SSR
// export const getServerSideProps: GetServerSideProps<{
//   serverSets: Set[];
// }> = async (context: GetServerSidePropsContext) => {
//   // console.log("I am from Server");

//   try {
//     const tempSets = await getAllSets();
//     return { props: { serverSets: tempSets } };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return { notFound: true }; // Handle data fetching error
//   }
// };

// const SetList = (props: { serverSets: Set[] }) => {
//   console.log(props);
//   const [sets, setSets] = useState<Set[]>(props.serverSets);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!props.serverSets) {
//       const fetchData = async () => {
//         setIsLoading(true);
//         try {
//           const response = await getAllSets();
//           setSets(response);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       fetchData();
//     }
//   }, []);

//   // const { data: sets, isLoading, isError } = useSets();
//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>

//       {!isLoading && "Loading....."}

//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {sets?.map((set) => {
//           return (
//             <div key={set.id} className="flex px-3 flex-col">
//               <div className="relative w-[100px] h-[100px]">
//                 <img src={set?.images.logo || ""} alt="set logo"></img>
//               </div>
//               <div className="">{set?.name || "loading...."}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

//SSG
// export const getStaticProps: GetStaticProps<{ serverSets: Set[] }> = async (
//   context
// ) => {
//   console.log("I am from getStatic props Server");

//   let returnVal = null as unknown as Set[];
//   try {
//     const tempSets = await getAllSets();
//     //throw new Error("Custom Error");
//     returnVal = tempSets;
//   } catch (e) {
//     console.log(e);
//     return { notFound: true, revalidate: 1200 };
//   }

//   return { props: { serverSets: returnVal } };
// };

// const SetList = (props: { serverSets: Set[] }) => {
//   console.log(props);
//   const [sets, setSets] = useState<Set[]>(props.serverSets);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (!props.serverSets) {
//       const fetchData = async () => {
//         setIsLoading(true);
//         try {
//           const response = await getAllSets();
//           setSets(response);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       fetchData();
//     }
//   }, []);

//   // const { data: sets, isLoading, isError } = useSets();
//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>

//       {!isLoading && "Loading....."}

//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {sets?.map((set) => {
//           return (
//             <div key={set.id} className="flex px-3 flex-col">
//               <div className="relative w-[100px] h-[100px]">
//                 <img src={set?.images.logo || ""} alt="set logo"></img>
//               </div>
//               <div className="">{set?.name || "loading...."}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

//ISR
// export const getStaticProps: GetStaticProps<{ serverSets: Set[] }> = async (
//   context
// ) => {
//   console.log("I am from getStatic props Server");
//   const tempSets = await getAllSets();
//   return { props: { serverSets: tempSets }, revalidate: 20 };
// };

// const SetList = (props: { serverSets: Set[] }) => {
//   const [sets, setSets] = useState<Set[]>(props.serverSets);
//   const setInit = async () => {
//     try {
//       const tempSets = await getAllSets();
//       setSets(tempSets);
//     } catch (e) {
//       console.log("Error: ", e);
//     }
//   };
//   useEffect(() => {
//     if (!sets) {
//       setInit();
//     }
//   }, [sets]);

//   return (
//     <div>
//       <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
//         Available Books
//       </h1>
//       {/* {!isLoading && "Loading....."} */}

//       <div className="w-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5">
//         {sets?.map((set) => {
//           return (
//             <div key={set.id} className="flex px-3 flex-col">
//               <div className="relative w-[100px] h-[100px]">
//                 <img src={set?.images.logo || ""} alt="set logo"></img>
//               </div>
//               <div className="">{set?.name || "loading...."}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// CSR using Zustand

const SetList = () => {
  // const sets = useSetListStore((state) => state.sets);
  const { sets, loading, error, fetchData } = useSetListStore();
  useEffect(() => {
    if (sets.length === 0) {
      fetchData();
    }
  }, []);

  // console.log("Store sets === ", sets);

  return (
    <div>
      <h1 className="font-bold text-3xl pt-3 pb-10 text-center text-blue-800">
        Available Book
      </h1>
      {loading && <h1>Loading....</h1>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-5 mx-auto">
        {sets?.map((set) => {
          return (
            <div key={set.id} className="flex px-3 flex-col">
              <div className="relative w-[100px] h-[100px]">
                <img src={set?.images.logo || ""} alt="set logo"></img>
              </div>
              <div className="">{set?.name || "loadingg...."}</div>
            </div>
          );
        })}
      </div>

      {error && "Something Went Wrong"}

      {/* <button onClick={() => fetchData()}>Fetch Data</button> */}
    </div>
  );
};

export default SetList;
