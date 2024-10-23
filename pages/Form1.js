const Paths = require("../Allpaths/paths")


class Form1{
    constructor(page){
        this.page = page
        this.paths = new Paths(page)
    } 


    async Form1page(userData){
        await this.page.locator(this.paths.Formdate).click();
        await this.page.locator(this.paths.Fromdatepick).fill(userData.FromDate);
        await this.page.locator(this.paths.Todatepick).fill(userData.ToDate);
        await this.page.getByLabel('Select Plant').click();           
        await this.page.getByRole('option', { name: 'Echt' }).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.paths.SelectChannel).click();
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: 'Import (control) Echt' }).click();
        await this.page.getByRole('button', { name: ' Export to Excel' }).click();
      

    }   
}

module.exports  = Form1