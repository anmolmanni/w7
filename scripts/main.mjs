import fs from 'fs';
import lighthouse from 'lighthouse';
import puppeteer from 'puppeteer';

// Or import puppeteer from 'puppeteer-core';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://anmolmanni.github.io/desn3035-e4/');
await page.setViewport({ width: 1080, height: 1024 });
await page.waitForNetworkIdle();
await page.png({
    path: 'autoscreenshot.png',
});

const options = {output: 'html' };
const runnerResult = await lighthouse('https://anmolmanni.github.io/desn3035-e4/', options, undefined, page);

// `.report` is the HTML report as a string
const reportHtml = runnerResult.report;
fs.writeFileSync('auto_report.html', reportHtml);


await browser.close();