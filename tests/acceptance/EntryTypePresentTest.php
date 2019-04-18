<?php 

use Codeception\Module\WebDriver;

class EntryTypePresentTest extends \Codeception\Test\Unit
{
    /**
     * @var \AcceptanceTester
     */
    protected $tester;

    /** @var WebDriver $webDriver */
    protected $webDriver;
    
    protected function _before()
    {

    }

    protected function _after()
    {
    }

    // tests
    public function testSomeFeature()
    {
        // Login
        /** @var WebDriver $webDriver */
        $this->webDriver = $this->getModule('WebDriver');

        // $this->webDriver->amOnPage('/admin');
        // $this->webDriver->wait(10);
        // try {
            if ($this->webDriver->webDriver->findElement(WebDriverBy::cssSelector('input#loginName'))) {
                $this->webDriver->fillField('input#loginName', 'admin');
                $this->webDriver->fillField('input#password', 'DPjRmtzZgjC.m4bcoAzL');
                $this->webDriver->click('#submit');
                $this->webDriver->waitForElement('li#nav-settings');
            }
        // } catch (\Exception $e) {
        //     // 
        // }
        // if ($this->webDriver->webDriver->findElement(WebDriverBy::cssSelector('li#nav-settings'))) {
        //     return;
        // }
        // $this->webDriver->waitForElement('input#loginName');

            // $this->webDriver->waitForElement('li#nav-settings');
        $this->webDriver->click('li#nav-settings > a');
    }
}