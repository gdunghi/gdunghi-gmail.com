const puppeteer = require("puppeteer-core");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    });
    const page = await browser.newPage();
    while (true) {
        await page.goto("https://applied20.xn--12cl1ck0bl6hdu9iyb9bp.com/urgent-web/#/register");
        const bodyHandle = await page.$("body");
        const html = await page.evaluate(body => body.innerHTML, bodyHandle);
        if (html.includes("ดำเนินการไม่สำเร็จ")) {
            continue;
        } else {
            setInterval(() => console.log("Found!!!"), 1000);
            break;
        }


    }
})();
