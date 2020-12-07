// https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

// 1. Click login button
//2. Redirect to SPOTIFY login page
//3. Redirect to home page once logged in and authorized

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "f70b8062ff494441b2f2db28d2a061aa";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split(`&`)
    .reduce((initial, item) => {
      let parts = item.split(`=`);
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
