
const puppeteer = require('puppeteer');
const XLSX = require('xlsx');

(async () => {
    
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const keluarga = "https://pkk.bandungkab.go.id/dasawisma/keluarga"
  await page.goto('https://pkk.bandungkab.go.id/index.php/auth/login'); 

 
  await page.type('input[name="username"]', '');

  
  await page.type('input[name="password"]', '');

 
  await page.click('button[type="submit"]');

  
  await page.waitForNavigation();

  
  await page.goto('https://pkk.bandungkab.go.id/dasawisma/keluarga', { waitUntil: 'networkidle2' });

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // Your Puppeteer logic
  await page.waitForSelector('button[href="#kt_tab_pane_1_7"]');
  await page.click('button[href="#kt_tab_pane_1_7"]');
  
  // Wait for 5 seconds
  await delay(10000);
  console.log('Button clicked!');


  // Wait for the elements to load
  await page.waitForSelector('a.btn.btn-sm.btn-icon.btn-light-warning.btn-active-light-default.me-1');

  // Extract hrefs
  const links = await page.$$eval(
    'a.btn.btn-sm.btn-icon.btn-light-warning.btn-active-light-default.me-1',
    anchors => anchors.map(anchor => anchor.href)
  );

  while (true) {
    // Check if the 'next' button is disabled
    const isDisabled = await page.$eval(
      '#dataTable_keluarga_general_next',
      el => el.classList.contains('disabled')
    );
  
    if (isDisabled) {
      console.log('Reached the last page. Stopping.');
      break; // exit the loop
    }
  
    // Click the next button
    await page.click('#dataTable_keluarga_general_next a.page-link');
  
    // Optional delay to wait for table to update
    await delay(5000);
    // Wait for the elements to load
  await page.waitForSelector('a.btn.btn-sm.btn-icon.btn-light-warning.btn-active-light-default.me-1');

  // Extract hrefs
  const links = await page.$$eval(
    'a.btn.btn-sm.btn-icon.btn-light-warning.btn-active-light-default.me-1',
    anchors => anchors.map(anchor => anchor.href)
  );
  
  console.log('Extracted Links:', links);
  }

  console.log('Extracted Links:', links);

  // await page.screenshot({ path: 'after-login.png' });

  // Close the browser if you're done
  await browser.close();
})();
