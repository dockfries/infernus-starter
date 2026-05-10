forward OnSampNodeCefRecv(p, b, const s[]);
public OnSampNodeCefRecv(p, b, const s[])
{
    return SAMPNode_CallEvent("OnSampNodeCefRecv", p, b, s);
}

forward patchCefRegisterEvent();
public patchCefRegisterEvent()
{
    return CEF_RegisterEvent("sampnode:cef", "OnSampNodeCefRecv", Argument_String);
}

forward patchCefEmitEvent(p, b, const e[], const d[]);
public patchCefEmitEvent(p, b, const e[], const d[])
{
    return CEF_EmitEvent(p, b, e, Argument_String, d);
}