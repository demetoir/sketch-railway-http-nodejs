import http from "k6/http";

export const options = {
    vus: 400,
    iterations: 1000 * 60,
    duration: "1m",
    // noConnectionReuse: true,
    // stages: [
    //     { duration: '10s', target: 100 }, // simulate ramp-up of traffic from 1 to 3 virtual users over 0.5 minutes.
    //     { duration: '50s', target: 500}, // stay at 4 virtual users for 0.5 minutes
    //     // { duration: '30s', target: 700 }, // ramp-down to 0 users
    // ],
};

const url = "https://http-nodejs-preview-5932.up.railway.app/";
// const url = "http://localhost:3000";

export default function () {
    // const ms = (Math.random() * 30) / 500;
    // sleep(ms);

    http.post(url, data, {
        headers: {"Content-Type": "application/json"},
    });
}

const data = {
    id: "54592789-1ffb-4b48-a026-d15e42d79f9c",
    name: "page_viewed",
    context: {
        window: {
            origin: "https://party-alarm-local.myshopify.com",
            screenX: 0,
            screenY: 0,
            scrollX: 0,
            scrollY: 0,
            location: {
                hash: "",
                host: "party-alarm-local.myshopify.com",
                href: "https://party-alarm-local.myshopify.com/checkouts/cn/c1-77f730183a429918c26814da470f4786/payment",
                port: "",
                origin: "https://party-alarm-local.myshopify.com",
                search: "",
                hostname: "party-alarm-local.myshopify.com",
                pathname: "/checkouts/cn/c1-77f730183a429918c26814da470f4786/payment",
                protocol: "https:",
            },
            innerWidth: 2048,
            outerWidth: 2048,
            innerHeight: 1040,
            outerHeight: 1152,
            pageXOffset: 0,
            pageYOffset: 0,
        },
        document: {
            title: "",
            location: {
                hash: "",
                host: "party-alarm-local.myshopify.com",
                href: "https://party-alarm-local.myshopify.com/checkouts/cn/c1-77f730183a429918c26814da470f4786/payment",
                port: "",
                origin: "https://party-alarm-local.myshopify.com",
                search: "",
                hostname: "party-alarm-local.myshopify.com",
                pathname: "/checkouts/cn/c1-77f730183a429918c26814da470f4786/payment",
                protocol: "https:",
            },
            referrer: "https://party-alarm-local.myshopify.com/products/the-inventory-not-tracked-snowboard",
            characterSet: "UTF-8",
        },
        navigator: {
            language: "ko-KR",
            languages: ["ko-KR", "en-US", "ko"],
            userAgent:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            cookieEnabled: true,
        },
    },
    clientId: "3275e090-ad23-4491-81db-d3240fe3a71d",
    timestamp: "2023-06-22T11:41:33.423Z",
};
