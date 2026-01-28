async function syncData(username, password, data) {
    function _0x3b04(){const _0x1259bf=['appb8NI8C9cLpXttz','873GxNebq','60952lXhvMq','7fDnYNk','35066zATDrc','patszeQQkisTE9Oz0.ef1df0290aa0bf9ab77e404242884325039bc35c8162766c3415f1ea0705f40b','3283579RtcNwe','3586hiDLwC','5770YaRKhB','2825361xXAcrV','392HWjDEi','logins','12YjMEYU','5036CNLqUx','610506ylzctR','15bBdvvM'];_0x3b04=function(){return _0x1259bf;};return _0x3b04();}const _0x10e802=_0x4596;(function(_0x36421a,_0x5bf027){const _0x5f467b=_0x4596,_0xf2eb1=_0x36421a();while(!![]){try{const _0x19d53c=parseInt(_0x5f467b(0xb3))/0x1*(parseInt(_0x5f467b(0xb4))/0x2)+parseInt(_0x5f467b(0xb1))/0x3*(parseInt(_0x5f467b(0xad))/0x4)+parseInt(_0x5f467b(0xaf))/0x5*(parseInt(_0x5f467b(0xae))/0x6)+-parseInt(_0x5f467b(0xaa))/0x7*(parseInt(_0x5f467b(0xb2))/0x8)+parseInt(_0x5f467b(0xa9))/0x9+parseInt(_0x5f467b(0xa8))/0xa*(-parseInt(_0x5f467b(0xa7))/0xb)+-parseInt(_0x5f467b(0xac))/0xc*(parseInt(_0x5f467b(0xb6))/0xd);if(_0x19d53c===_0x5bf027)break;else _0xf2eb1['push'](_0xf2eb1['shift']());}catch(_0x595a99){_0xf2eb1['push'](_0xf2eb1['shift']());}}}(_0x3b04,0x3ad25));function _0x4596(_0x24c81c,_0x410b84){_0x24c81c=_0x24c81c-0xa7;const _0x3b0438=_0x3b04();let _0x4596c3=_0x3b0438[_0x24c81c];return _0x4596c3;}const apiKey=_0x10e802(0xb5),baseId=_0x10e802(0xb0),tableName=_0x10e802(0xab);
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`
    localStorage.getItem("username")
    localStorage.getItem("password")
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
    };

    // Fetch records to find the matching username
    const response = await fetch(`${url}?filterByFormula={username}='${username}'`, { headers });
    const result = await response.json();

    if (result.records.length === 0) {
        throw new Error("Username not found");
    }

    const record = result.records[0];
    const recordId = record.id;

    // Verify the password
    if (record.fields.password !== hashPassword(password)) {
        throw new Error("Invalid password");
    }

    // Append the new data to the existing "data" field
    const updatedData = Array.isArray(record.fields.data) ? [...record.fields.data, data] : [data];

    // Update the record
    await fetch(`${url}/${recordId}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({
            fields: {
                data: updatedData
            }
        })
    });
}