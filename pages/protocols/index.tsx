"use client";

import { useState, useEffect } from "react";

import ProtocolCategories from "./ProtocolCategories";
import ProtocolCategory from "@/interfaces/ProtocolCategory";
import FilterProtocols from "./FilterProtocols";

export default function Protocols() {
  const [protocolsData, setProtocolsData] = useState<ProtocolCategory[]>([]);
  const [protocolsDataFiltered, setProtocolsDataFiltered] = useState<
    ProtocolCategory[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getProtocols`)
      .then((res) => res.json())
      .then((data) => {
        setProtocolsData(data);
        setProtocolsDataFiltered(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProtocolsData([]);
        setProtocolsDataFiltered([]);
        setLoading(false);
      });
  }, []);

  const searchProtocol = (event: any) => {
    const searchQuery = event.target.value.toLowerCase();
    if (searchQuery === "" || searchQuery == null) {
      setProtocolsDataFiltered(protocolsData);
      return;
    }

    const filtered = protocolsData
      .map((category) => {
        const filteredProtocols = category.protocols.filter((protocol) => {
          const matchesName = protocol.name.toLowerCase().includes(searchQuery);
          const matchesKeywords = protocol.searchKeywords.some((keyword) =>
            keyword.toLowerCase().includes(searchQuery)
          );
          return matchesName || matchesKeywords;
        });
        return { ...category, protocols: filteredProtocols };
      })
      .filter((category) => category.protocols.length > 0);

    setProtocolsDataFiltered(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen w-full lg:w-[1000px] md:w-[800px] mt-[60px]  ml-40 md:ml-0 ">
      {loading ? (
        <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden ">
          <div
            className=" top-[80px] left-0 w-full h-full bg-blue-900"
            style={{
              animation: "move 2s infinite",
            }}
          ></div>
        </div>
      ) : null}
      <div className="mt-10 mx-6 grid grid-cols-12 gap-2 flex-col">
        <div className="hidden md:block lg:block col-span-3 mx-4">
          <FilterProtocols protocolsData={protocolsData} />
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-9 ">
          <input
            type="text"
            className="fixed w-[57%] md:w-[59%] lg:w-[53%] bg-gray-50 border border-gray-300 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block p-2.5
     dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 md:ml-8 lg:ml-0 
     dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:mr-8"
            placeholder="Search protocols"
            onChange={searchProtocol}
          />

          {loading ? null : (
            <ProtocolCategories protocolCategories={protocolsDataFiltered} />
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
