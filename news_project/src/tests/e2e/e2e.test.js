import puppeteer from 'puppeteer';




// for a long time, selenium was by far the most popular choice for automating a browser
describe('', ()=>{

    let browser
    let page
    beforeAll( async ()=>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
        })
        page = await browser.newPage()
        await page.goto('http://localhost:3000')
    })

    afterAll( (done)=>{
        browser.close()
        done()
    })

    describe('the homepage', () =>{

        it('should render articles', async ()=>{
            await page.waitForSelector('.even-item')
            // let link = await page.$('.even-item')

            // link.evaluate does not run code locally, it runs it in the puppeteer browser!
            // let linkText = await link.evaluate((linkEl)=> linkEl.innerText)
            // console.log('link text? ', linkText)
            await page.click('.even-item a')
            await page.waitForSelector('#read-more')

            const nextLink = await page.$('#read-more')
            let nextLinkText = await nextLink.evaluate((linkEl)=> linkEl.innerText)

            console.log('next link text? ', nextLinkText)

            expect(nextLinkText).toBe('Read The full article')
        })
    })
})