// spec.js
describe('Computer Databse Application', function() {
	var Page = require('./PageObjects.js');
	beforeEach(function(){
	Page.loadURL();
		

	});


	it('Verify that Application is Up',function(){

		expect(Page.HomePage.isDisplayed()).toBe(true);
		
	});

  it('Verify that on click of button Add a new Computer,User is navigated to Add a computer Page', function() {
  	
  	Page.AddNewComputer.click();
	expect(Page.CreatethisComputer.isDisplayed()).toBe(true);


    
  });
  it('Verify that on click of Cancel button on Add new Computer Page,User should be navigated to home page', function() {
  	
  	Page.AddNewComputer.click();
	Page.Cancel.click();
	expect(Page.AddNewComputer.isDisplayed()).toBe(true);


    
  });
    it('Verify that user is able to Add new Computer sucessfully', function() {
  	var name = 'TestComputer';
	var expstring = 'Done! Computer '+ name +' has been created'
	Page.AddNewComputerfxn(name,'2018-04-01','2018-04-02','RCA');
	expect(Page.alert.getText()).toBe(expstring);


    
  });
    it('Verify user is able filter computer name on using Filter by name button', function() {
  	
  	Page.Filterbynameinput.sendKeys('ASCI Purple');
	Page.Filterbynamebtn.click();
	expect(element(by.linkText("ASCI Purple")).isDisplayed()).toBe(true);


    
  });
    it('Verify that on click of Computer name link,User should be navigated to Edit Computer page ', function() {
  	
  	Page.Filterbynameinput.sendKeys('ASCI Purple');
	Page.Filterbynamebtn.click();
	element(by.linkText("ASCI Purple")).click();
	expect(Page.DeletethisComputer.isDisplayed()).toBe(true);


    
  });
    it('Verify that user is successfully able to edit and save computer details ', function() {
  	
  	Page.Filterbynameinput.sendKeys('ASCI Purple');
	Page.Filterbynamebtn.click();
	element(by.linkText("ASCI Purple")).click();
	Page.SavethisComputer.click();
	expect(Page.alert.getText()).toBe('Done! Computer ASCI Purple has been updated');
	


    
  });
 
    it('Verify that user is successfully able to Delete the Computer', function() {
 	Page.DeleteComputer('HeavyBox');
	expect(Page.alert.getText()).toBe('Done! Computer has been deleted');


    
  });
    it('Verify that on click of Cancel button on Edit Computer Page,User should be navigated to home page', function() {
  	
  	Page.Filterbynameinput.sendKeys('ASCI Purple');
	Page.Filterbynamebtn.click();
	element(by.linkText("ASCI Purple")).click();
	Page.Cancel.click();
	expect(Page.AddNewComputer.isDisplayed()).toBe(true);


    
  });


});