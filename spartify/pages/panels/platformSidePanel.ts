import {SpartiUI} from "@spartify.io/spartify-engine";
//import {PlatformAllInstallationPage} from "../home/platformAllInstallationPage"
//import {PlatformNewInstallationPage} from "../installations/platformNewInstallationPage"
import { Platformproject } from "../project/ProjectPage";
 
export class PlatformSidePanel{

     private btn_menu_installation = "ul[role='menu'] >li:nth-child(1) > a";
     private btn_allInstallation = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(1) > a[href='/Webstore/AllWebstores']";
     private btn_newInstallation = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(2) > a[href='/Webstore/Install']";
     private btn_project = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(3) > a[href='/Project']";
     private btn_upgradeinstallation = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(4) > a[href='/UpgradedWebstore/UpgradableWebstores']"
     private btn_upgradeoverview = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(5) > a[href='/UpgradedWebstore']"
     private btn_restorebackup = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(6) > a[href='/WebstoreRestore']"
     private btn_manageaddon = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(7) > a[href='/Addon/Addons']"
     private btn_upgradeaddon = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(8) > a[href='/Addon/AddonUpgrade']"
     private btn_uninstalledwebstores = "ul[role='menu'] >li:nth-child(1) > ul > li:nth-child(9) > a[href='/Webstore/UninstalledWebstores']"
     
    // public step_click_AllInstallations(){
    //   SpartiUI.wait(6000)
    //   SpartiUI.button(this.btn_menu_installation).forceClick()     
    //   SpartiUI.button(this.btn_allInstallation).forceClick();
    //   return new PlatformAllInstallationPage()
    //  }

    // public step_click_NewInstallations(){
    //   SpartiUI.button(this.btn_menu_installation).click()
    //   SpartiUI.button(this.btn_newInstallation).click();
    //   return new PlatformNewInstallationPage()
    // }

    public step_click_Project(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_project).click();
      return new Platformproject()
    }
    public step_click_Upgradeinstallation(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_upgradeinstallation).click();
      
    }
    public step_click_Upgradeoverview(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_upgradeoverview).click();
      
    }
    public step_click_Restorebackup(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_restorebackup).click();
      
    }
    public step_click_Manageaddon(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_manageaddon).click();
      
    }
    public step_click_Upgradeaddon(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_upgradeaddon).click();
      
    }
    public step_click_Uninstalledwebstores(){
      SpartiUI.button(this.btn_menu_installation).click()
      SpartiUI.button(this.btn_uninstalledwebstores).click();
      
    }       
}