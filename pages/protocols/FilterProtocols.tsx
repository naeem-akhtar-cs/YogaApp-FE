import ProtocolCategory from "@/interfaces/ProtocolCategory";

export default function FilterProtocols({ protocolsData }: { protocolsData?: ProtocolCategory[] }) {
    return (
        <div className="border-solid border-black rounded-md bg-gray-200 fixed overflow-y-auto h-[500px]">
            {protocolsData && Array.isArray(protocolsData) && protocolsData.length > 0 ? (
                protocolsData.map((protocolCategory, index) => (
                    <div key={protocolCategory._id}>
                        <a className="hover:text-sky-500 w-full text-left block" href={`#${protocolCategory._id}`}>
                            <div className="p-6">{protocolCategory.name}</div>
                        </a>
                        {index + 1 < protocolsData.length ? <hr className="h-px border-0 bg-gray-700" /> : null}
                    </div>
                ))
            ) : (
                <div ></div>
            )}
        </div>
    );
}
