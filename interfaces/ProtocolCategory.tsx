import ProtocolData from "./ProtocolData";

export default interface ProtocolCategory {
    "_id": string,
    "assetType": string,
    "name": string,
    "protocols": ProtocolData[]
}
