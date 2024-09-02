import ProtocolData from '@/interfaces/ProtocolData';

export default function ProtocolDetails({ protocol }: { protocol: ProtocolData| null }) {
    if (!protocol) {
        return <div>Loading...</div>; 
    }
    return (
        <div className='space-y-4  md:w-[400px] lg:w-full'>
            <div className="text-left rounded-md bg-neutral-100 p-6 flex items-stretch">
                <div className='flex-auto'>
                    <div>{protocol.protocolCode}</div>
                    <div>{protocol.name}</div>
                </div>
                <div className='flex-auto text-right'>${protocol.price}/mo</div>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: protocol.description }}></div>
            </div>
        </div>
    );
}
