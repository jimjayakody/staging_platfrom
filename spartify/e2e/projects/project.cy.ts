import { spartiSuite } from "@spartify.io/spartify-engine";
import { PlatformLoginPage } from "../../pages/login/platformLoginPage";
import { Platformproject } from "../../pages/project/ProjectPage";

const loginPage = new PlatformLoginPage()
const projectPage = new Platformproject()


spartiSuite("🚀 project Page Testing", { tags: '@smoke' }, () => {

    beforeEach(function(){
        loginPage
        .step_login()        
    })  
    
    afterEach(function(){
        loginPage
        .step_logout()        
    })    
    it('Navigate to project page', { tags: '@smk' }, () => {
      
        projectPage.
        step_navigateproject().
        step_verifyMainTitle()
 
    });
    it('Verify the project table', { tags: '@smk' }, () => {
      
        projectPage.
        step_navigateproject().step_verifytable()
 
    });
    it('Verify the operation', { tags: '@smk' }, () => {
      
        projectPage.
        step_navigateproject().step_verifytable()
 
    });
  })