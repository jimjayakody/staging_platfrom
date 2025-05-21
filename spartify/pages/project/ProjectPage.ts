import { SpartiUI } from "@spartify.io/spartify-engine";
import { PlatformSidePanel } from "../panels/platformSidePanel"
//import { PlatformAllInstallationPage } from "../home/platformAllInstallationPage";

export class Platformproject {

    private lbl_menuTitle = '.card-title'
    private tb_col1 = '#projectGrid th[aria-label="Project Id: activate to sort column ascending"]:nth-child(1)'
    private tb_col2 = 'th[aria-label="Project name: activate to sort column ascending"]'
    private tb_col3 = 'th[aria-label="Partner Name / Team Name: activate to sort column ascending"]'
    private tb_col4 = 'th[aria-label="Is dry run enabled: activate to sort column ascending"]'
    private transfertoproject = '//a[@title="Transfer project to partner"])[1]'
    private transferlogs = '//a[@title="Transfer logs"])[1]'
    private deleterecord = '(//a[@title="Delete"])[1]'
    //private editrecord = 
   
    private sidePanel;

       // Load supporting re-usable panels to launch complete screen
       constructor() {
        this.sidePanel = new PlatformSidePanel();
    }
      public step_navigateproject() {
        this.sidePanel.step_click_Project()
        return this;
    }
      public step_verifyMainTitle() {
        SpartiUI.wait(2000)
        SpartiUI.element(this.lbl_menuTitle).should('contain', 'Projects');
        return this
    }
      public step_verifytable() {
        SpartiUI.wait(2000)
        SpartiUI.element(this.tb_col1).should('contain', 'Project Id');
        SpartiUI.element(this.tb_col2).should('contain', 'Project name');
        SpartiUI.element(this.tb_col3).should('contain', 'Partner Name / Team Name');
        SpartiUI.element(this.tb_col4).should('contain', 'Is dry run enabled');
        return this
    }
      public step_operation() {
        SpartiUI.wait(2000)
        //SpartiUI.element(this.tb_col1).should('contain', 'Project Id');
        //SpartiUI.element(this.tb_col2).should('contain', 'Project name');
        return this
    }
}