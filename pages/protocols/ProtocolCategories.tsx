import Protocol from "./Protocol";
import ProtocolCategory from "@/interfaces/ProtocolCategory";

function ProtocolCategories({ protocolCategories }: { protocolCategories?: ProtocolCategory[] }) {
 
    const categories = protocolCategories || [];

    return (
        <div className="scroll-smooth">
            {categories.length >= 1 ? (
                categories.map(category => (
                    <div key={category._id}>
                        <h1 className="text-xl mt-12 mb-4 md:ml-8 lg:ml-0" id={`${category._id}`}>{category.name}</h1>
                        <div className="grid sm:grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-3  md:ml-8 lg:ml-0">
                            {category.protocols.map(protocol => (
                                <Protocol key={protocol._id} protocol={protocol} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="mt-12">No matching protocol...</div>
            )}
        </div>
    );
}

export default ProtocolCategories;
