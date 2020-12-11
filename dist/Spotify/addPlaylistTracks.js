"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPlaylistTracks = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const misc_1 = require("../misc");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function addPlaylistTracks(accessToken, playlistID, tracks) {
    const req = await node_fetch_1.default(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "uris": tracks,
        })
    });
    // if (req.status === 429) { // if rate limited
    //   errorLogger(`rate limited! (addPlaylistTracks) - retry: ${req.headers.get("Retry-After")}`);
    //   await sleep(parseInt(req.headers.get("Retry-After")) + 3);
    // } else
    if (req.status !== 201) { // if request not 200
        misc_1.errorLogger(`unexpected error! (addPlaylistTracks,)\nplaylist id: ${playlistID}\nstatus: ${req.status}\nerror: ${JSON.stringify(await req.json(), null, " ")}`);
    }
    else {
        return await req.json();
    }
}
exports.addPlaylistTracks = addPlaylistTracks;
//# sourceMappingURL=addPlaylistTracks.js.map