// import fetch from "node-fetch";
// import { errorLogger } from "../misc";
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function deletePlaylistTracks(accessToken: string, playlistID: string, tracks: string[]): Promise<void> {
//   const req = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer ${accessToken}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       "tracks": tracks,
//     })
//   });
//   // if (req.status === 429) { // if rate limited
//   //   errorLogger(`rate limited! (DeletePlaylistTracks) - retry: ${req.headers.get("Retry-After")}`);
//   //   await sleep(parseInt(req.headers.get("Retry-After")) + 3);
//   // } else
//   if (req.status !== 200) { // if request not 200
//     errorLogger(`unexpected error! (deletePlaylistTracks)\nstatus: ${req.status}\nerror: ${JSON.stringify(await req.json(), null, " ")}`);
//   } else {
//     return await req.json();
//   }
// }
//# sourceMappingURL=deletePlaylistTracks.js.map