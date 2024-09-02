import ProtocolData from "@/interfaces/ProtocolData";
import { useRouter } from 'next/navigation'

export default function Protocol({ protocol }: { protocol?: ProtocolData }) {
    const router = useRouter();
    if (!protocol) {
        return <div>Loading...</div>; 
    }
    return (
        <button key={protocol._id} className="text-left rounded-md bg-cyan-500 text-white h:15 md:h-32 lg:32" onClick={() => router.push( `/protocol?id=${protocol._id}`)}>
            <div className="p-4">
                <div>{protocol.protocolCode}</div>
                <div>{protocol.name}</div>
            </div>
        </button>
    );
}
