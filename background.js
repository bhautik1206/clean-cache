// chrome.action.onClicked.addListener((tab) => {
//     if (tab) {
//         const origin = new URL(tab.url).origin;

//         // Clear cache and other storage data
//         chrome.browsingData.remove({
//             origins: [origin]
//         }, {
//             cache: true
//         }, () => {
//             console.log('Cache cleared for this site!');
//         });

//         // Clear cookies
//         chrome.cookies.getAll({ url: origin }, (cookies) => {
//             for (let cookie of cookies) {
//                 chrome.cookies.remove({
//                     url: origin + cookie.path,
//                     name: cookie.name
//                 });
//             }
//             console.log('Cookies cleared for this site!');
//         });

//         // Clear localStorage and sessionStorage
//         chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             function: () => {
//                 localStorage.clear();
//                 sessionStorage.clear();
//                 console.log('localStorage and sessionStorage cleared!');
//             }
//         });
//     }
// });
