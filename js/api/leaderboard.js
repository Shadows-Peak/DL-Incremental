async function fetchLeaderboardData() {
    const _0x2cdb75=_0x20bd;function _0x20bd(_0x449d26,_0x5da9df){_0x449d26=_0x449d26-0x128;const _0x4e4aad=_0x4e4a();let _0x20bd5d=_0x4e4aad[_0x449d26];return _0x20bd5d;}(function(_0x4b4865,_0x126127){const _0x12ec3e=_0x20bd,_0x3d5586=_0x4b4865();while(!![]){try{const _0x244801=parseInt(_0x12ec3e(0x129))/0x1*(parseInt(_0x12ec3e(0x12a))/0x2)+-parseInt(_0x12ec3e(0x12b))/0x3*(-parseInt(_0x12ec3e(0x128))/0x4)+parseInt(_0x12ec3e(0x12c))/0x5+-parseInt(_0x12ec3e(0x133))/0x6+parseInt(_0x12ec3e(0x132))/0x7+-parseInt(_0x12ec3e(0x12d))/0x8*(-parseInt(_0x12ec3e(0x12f))/0x9)+-parseInt(_0x12ec3e(0x131))/0xa*(parseInt(_0x12ec3e(0x130))/0xb);if(_0x244801===_0x126127)break;else _0x3d5586['push'](_0x3d5586['shift']());}catch(_0x468139){_0x3d5586['push'](_0x3d5586['shift']());}}}(_0x4e4a,0x4c280));function _0x4e4a(){const _0x4b9a8d=['83301wsHwNu','23775llXZJB','2660384DGCazM','bG9naW5z','9cPkxhM','630212BjHjIN','60THmERl','227444CYvAQw','1378674rkZMpZ','YXBwYjhOSThDOWNMcFh0dHo=','44erbiwO','19SBblfH','22130PeyEBx'];_0x4e4a=function(){return _0x4b9a8d;};return _0x4e4a();}const apiKey=atob('cGF0c3plUVFraXNURTlPejAuZWYxZGYwMjkwYWEwYmY5YWI3N2U0MDQyNDI4ODQzMjUwMzliYzM1YzgxNjI3NjZjMzQxNWYxZWEwNzA1ZjQwYg=='),baseId=atob(_0x2cdb75(0x134)),tableName=atob(_0x2cdb75(0x12e));
    // Use filterByFormula to search for the given username.
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}?view=main&fields[]=username&fields[]=data`;

    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });

    const result = await response.json();
    return result.records;
}

function extractValue(decryptedData, key) {
    const raw =decryptedData
            .split("|")
            .find(p => p.startsWith(key + ":"))
            ?.split(":")[1] ?? 0;
    
    if (!raw) return 0;

    var num;

    if (key == "LooksmaxxingChallengesCompleted") {
        if (raw.startsWith("[") && raw.endsWith("]")) {
            try {
                const arr = JSON.parse(raw);
                if (Array.isArray(arr)) {
                    return arr.reduce((sum, v) => sum + Number(v || 0), 0);
                }
            } catch (e) {
                return 0;
            }
        }
        num = Number(raw);
    } else if (key == "RizziteNRizzium") {
        const arr = JSON.parse(raw);
        num = Number(arr[2]);
    } else if (key == "playerAchievements") {
        const dict = JSON.parse(raw);
        if (!dict || typeof dict !== "object") {num = 0;} else {
            let count = 0;
            for (const key in dict) { 
                if (dict[key] === true) {count++;}
            }
            num = count;
        }
        num = Number(num);
    } else {
        num = Number(raw);
    }

    return Number.isNaN(num) ? 0 : num;
}

async function buildLeaderboard(dataName="clicks") {
    const records = await fetchLeaderboardData();

    const leaderboard = records.map(record => {
        if (record.fields.username == 'test' || record.fields.username == 'test2' || record.fields.data == null) {
            return null;
        }
        const encrypted = record.fields.data;
        if (!encrypted) return null;

        const decrypted = fullDecrypt(encrypted, "8675309");
        const data = extractValue(decrypted, dataName);

        if (extractValue(decrypted, "Cheater") == true) {
            return null;
        }

        return {
            username: record.fields.username,
            data: data
        };
    }).filter(Boolean);

    leaderboard.sort((a, b) => b.data - a.data);
    return leaderboard;
}
