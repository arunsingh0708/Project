var Page = function() {
  this.loadURL=function(){
  browser.waitForAngularEnabled(false);
  browser.get('http://computer-database.herokuapp.com/computers');

  };
  this.HomePage = element(by.linkText("Play sample application — Computer database"));
  this.AddNewComputer = element(by.id("add"));
  this.CreatethisComputer = element(by.className("btn primary"));
  this.Cancel = element(by.linkText("Cancel"));
  this.Computername = element(by.id("name"));
  this.IntroducedDate = element(by.id("introduced"));
  this.DiscontinuedDate = element(by.id("discontinued"));
  this.alert = element(by.className("alert-message warning"));
  this.Filterbynameinput =  element(by.id("searchbox"));
  this.Filterbynamebtn =  element(by.id("searchsubmit"));
  this.DeletethisComputer = element(by.className("btn danger"));
  this.SavethisComputer = element(by.className("btn primary"));
  this.AddNewComputerfxn = function(name,introduced_date,discontinued_date,company){
    this.AddNewComputer.click();
    this.Computername.sendKeys(name);
    this.IntroducedDate.sendKeys(introduced_date);
    this.DiscontinuedDate.sendKeys(discontinued_date);
    element(by.cssContainingText('option', company)).click();
    //this.Company.click();
    this.CreatethisComputer.click();
  };
  this.DeleteComputer = function(name){
    this.AddNewComputer.click();
    this.Computername.sendKeys(name);
    this.CreatethisComputer.click();
    this.Filterbynameinput.sendKeys(name);
    this.Filterbynamebtn.click();
    element(by.linkText(name)).click();
    this.DeletethisComputer.click();
  };


};
module.exports = new Page();