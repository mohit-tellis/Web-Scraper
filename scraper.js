const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to the website
  await page.goto('https://quotes.toscrape.com');

  // Extract data
  const quotes = await page.evaluate(() => {
    const quoteElements = document.querySelectorAll('.quote');
    const data = [];

    quoteElements.forEach(quote => {
      const text = quote.querySelector('.text')?.innerText;
      const author = quote.querySelector('.author')?.innerText;
      const tags = Array.from(quote.querySelectorAll('.tags .tag')).map(tag => tag.innerText);

      data.push({ text, author, tags });
    });

    return data;
  });

  // Output to console
  console.log(quotes);

  // Save to JSON
  fs.writeFileSync('quotes.json', JSON.stringify(quotes, null, 2));

  await browser.close();
})();
