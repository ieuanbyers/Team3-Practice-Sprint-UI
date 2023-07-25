import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class LoginPage {

	// WebElements --------------------------------------------------------------------------
	public static WebElement Amazon_Devices_and_Accessories(WebDriver driver) {
		
		WebElement element = driver.findElement(By.linkText("Amazon Devices & Accessories"));
		
		return element;	
	}
	
	
	public static WebElement Amazon_Launchpad(WebDriver driver) {
		WebElement element = driver.findElement(By.linkText("Amazon Launchpad"));
		
		return element;	
	}
	
	public static WebElement Apps_and_Games(WebDriver driver) {
		
		WebElement element = driver.findElement(By.linkText("Apps & Games"));
		
		return element;	
	}
	
	//----------------------------------------------------------------------------------------
	// Click on these WebElements ---------------------------------------
	
	public void clickAmazon_Devices_and_Accessories(WebDriver driver) {
		Amazon_Devices_and_Accessories(driver).click();
	}
	
	public void clickAmazon_Launchpad(WebDriver driver) {
		Amazon_Launchpad(driver).click();
	}
	
	public void clickApps_and_Games(WebDriver driver) {
		Apps_and_Games(driver).click();
	}
	
	//----------------------------------------------------------------------------------------
}
