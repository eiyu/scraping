
  const puppeteer = require('puppeteer');
  const XLSX = require('xlsx');
  const fs = require('fs');
  
  // Array of links you want to visit
  const links = [
    'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213234',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213362',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213740',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213211',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213217',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213226',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213281',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213291',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213296',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213342',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213347',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213353',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146541',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/147351',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/149056',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/148621',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/148095',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/147726',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/147435',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146891',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146584',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146813',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146001',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/145896',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137300',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/141798',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/141172',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137551',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137457',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137408',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137175',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136690',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143541',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143851',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143786',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143691',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143631',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143596',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143329',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/158347',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/158113',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/158282',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/158018',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/158412',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160142',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213678',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/174914',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213435',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/165558',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213810',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/157961',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/157880',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/157807',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/157259',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/151356',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150551',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150628',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150404',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150309',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/151747',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/152030',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/154042',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153819',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153868',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136444',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136473',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136499',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136528',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136554',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136620',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/136659',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137019',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/137216',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/142739',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/142915',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143158',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/143433',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/145814',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146300',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146317',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146337',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146360',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146438',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146459',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146508',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146558',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/147056',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/149871',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/149999',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150086',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/150203',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/152172',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/152257',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153433',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153487',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153547',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/153576',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/156139',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/157228',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160168',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160217',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160278',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160326',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/160345',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/213942',
'https://pkk.bandungkab.go.id//dasawisma/keluarga/detail/146558'
    ];
  
  (async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
  
    await page.goto('https://pkk.bandungkab.go.id/index.php/auth/login'); 

 
    await page.type('input[name="username"]', '');
  
    
    await page.type('input[name="password"]', '');
    
    await page.click('button[type="submit"]');

    
    await page.waitForNavigation();

    let allData = [];
  
    for (const link of links) {
      console.log(`Visiting: ${link}`);
      await page.goto(link, { waitUntil: 'networkidle2' });
  
      const tableData = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('tbody tr'));
        return rows.map(row => {
          const cells = row.querySelectorAll('td');
          return Array.from(cells).map(cell =>
            cell.textContent
              .replace(/[\n\r\t]+/g, ' ')
              .replace(/\s+/g, ' ')
              .trim()
          );
        });
      });
  
      allData.push(...tableData); // combine all rows from all pages
    }
  
    await browser.close();
  
    // Create a worksheet and workbook
    const worksheet = XLSX.utils.aoa_to_sheet(allData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Extracted Data');
  
    // Write to file
    XLSX.writeFile(workbook, 'output_data.xlsx');
    console.log('✅ Data saved to output_data.xlsx');
  })();
