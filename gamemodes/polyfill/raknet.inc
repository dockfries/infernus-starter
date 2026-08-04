public OnIncomingPacket(playerid, packetid, BitStream:bs)
{
    return SAMPNode_CallEvent("OnIncomingPacket", playerid, packetid, _:bs);
}

public OnIncomingRPC(playerid, rpcid, BitStream:bs)
{
    return SAMPNode_CallEvent("OnIncomingRPC", playerid, rpcid, _:bs);
}

public OnOutgoingPacket(playerid, packetid, BitStream:bs)
{
    return SAMPNode_CallEvent("OnOutgoingPacket", playerid, packetid, _:bs);
}

public OnOutgoingRPC(playerid, rpcid, BitStream:bs)
{
    return SAMPNode_CallEvent("OnOutgoingRPC", playerid, rpcid, _:bs);
}
