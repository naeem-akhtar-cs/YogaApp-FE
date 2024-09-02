import ProtocolData from "@/interfaces/ProtocolData";
import { useRouter } from "next/navigation";

interface cartProtocol { protocol: ProtocolData, removeSavedProtocol: (protocolId: string) => void }

export default function CartProtocol({ protocol, removeSavedProtocol }: cartProtocol) {
    const router = useRouter()

    const removeCartProtocol = async (e: any) => {
        const element = e.target as HTMLAnchorElement;
        const protocolId = element.id;

        removeSavedProtocol(protocolId)
        e.stopPropagation();
    }
    if (!protocol) {
        console.error('Protocol data is missing');
        return <div>Error: Protocol data is missing.</div>;
    }
    return (
        <button className="w-full rounded-lg border border-gray-200 text-black hover:bg-cyan-500 px-2 lg:px-8 md:px-8 py-4 lg:py-8 md:py-8 grid grid-flow-col gap-3 lg:gap-7 md:gap-7" onClick={() => { router.push(`/protocol?id=${protocol._id}`) }}>
            <div className="text-sm lg:font-bold md:font-bold">{protocol.name}</div>
            <div>${protocol.price}/mo</div>
            <a id={protocol._id} className="text-red-600 hover:underline underline-offset-2" onClick={(e) => removeCartProtocol(e)}>Remove</a>
        </button>
    )
}
