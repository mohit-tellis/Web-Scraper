# 🕷️ Basic Web Scraper with Puppeteer

A simple Node.js-based scraper that uses Puppeteer to scrape quotes from [quotes.toscrape.com](https://quotes.toscrape.com).

---

## ✨ Features

- ✅ Scrapes quotes, authors, and tags
- ✅ Uses Puppeteer to navigate and extract data
- 💾 Saves output to `quotes.json`
- 🔁 No stealth or advanced anti-bot techniques used

---

## 📁 Project Structure

web-scraper/
├── scraper.js # Main scraping logic
├── quotes.json # Output file (created after running)
├── package.json



---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/web-scraper.git
cd web-scraper
2. Install Puppeteer
npm install puppeteer
3. Run the Scraper
node scraper.js
🔧 Example Output
json
[
  {
    "text": "“The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.”",
    "author": "Albert Einstein",
    "tags": ["change", "deep-thoughts", "thinking", "world"]
  },
  ...
]
📌 Technologies Used
Node.js

Puppeteer

⚠️ Disclaimer
For educational use only. Do not scrape websites without permission.

👨‍💻 Author
Mohit Raj
📧 mohit@tellistechnologies.com
🔗 https://github.com/raj20889
