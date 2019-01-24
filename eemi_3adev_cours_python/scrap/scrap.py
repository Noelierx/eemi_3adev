from selenium import webdriver

browser = webdriver.Chrome('chromedriver.exe')

browser.get("https://linkedin.com")

sleep(2)
browser.find_element_by_xpath('//*[@id="login-email"]')
