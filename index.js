let countries = [
    {
        alt: "Norway",
        shape: "poly",
        coords: [2808,686,2808,817,2934,748,2944,701,2934,668,3035,545,3087,528,3107,541,3144,543,3158,517,3221,528,3234,492,3116,492,3044,509],
        linksTo: "#Norway",
    },
    {
        alt: "Finland",
        shape: "poly",
        coords: [3076,532,3087,528,3107,541,3144,543,3158,517,3207,526,3270,670,3219,718,3116,742,3072,679,3149,616],
        linksTo: "#Finland",
    },
    {
        alt: "Sweden",
        shape: "poly",
        coords: [2912,761,2934,748,2944,701,2934,668,3035,545,3076,532,3139,605,3058,657,3048,814,2954,846],
        linksTo: "#Sweden",
    },
    {
        alt: "Denmark",
        shape: "poly",
        coords: [2860,811,2860,848,2908,848,2908,780],
        linksTo: "#Denmark",
    },
    {
        alt: "Greenland",
        shape: "poly",
        coords: [1654,258,2615,258,2387,499,1953,726,1845,704,1845,407,1454,396,1439,324],
        linksTo: "#Denmark",
    },
    {
        alt: "Costa Rica",
        shape: "rect",
        coords: [799,1916,872,1996],
        linksTo: "#CostaRica"
    },
    {
        alt: "Italy",
        shape: "poly",
        coords: [2835,1066,2920,1037,2958,1048,3002,1160,3066,1198,3004,1320,2858,1237],
        linksTo: "#Italy"
    },
    {
        alt: "USA",
        shape: "poly",
        coords: [144,989,891,989,1131,1118,1368,1030,1383,1084,961,1578,609,1560,243,1391,188,1344],
        linksTo: "#USA",
    },
    {
        alt: "Alaska",
        shape: "poly",
        coords: [0,487,521,487,502,522,222,754,0,754],
        linksTo: "#USA",
    },
    {
        alt: "UK",
        shape: "poly",
        coords: [2568,863,2590,794,2625,756,2690,756,2747,901,2730,950,2598,976,2579,937,2606,870],
        linksTo: "#UK",
    },
];


let M = document.getElementById("wMap");
let ratio = document.getElementById("mainMap").getBoundingClientRect().width / 6450;
console.log(ratio);

for(let c of countries) {

    let A = document.createElement("area");
    let Nat = document.createElement("div");
    
    A.alt = c.alt;
    A.shape = c.shape;
    A.href = c.linksTo;

    let scaledCs = "";
    for(let coord of c.coords) {
        let newC = Math.round(coord*ratio);
        scaledCs += newC.toString() + ",";
    }
    A.coords = scaledCs;
    

    M.appendChild(A);

}
