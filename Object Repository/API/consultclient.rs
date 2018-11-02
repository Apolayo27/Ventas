<?xml version="1.0" encoding="UTF-8"?>
<WebServiceRequestEntity>
   <description></description>
   <name>consultclient</name>
   <tag></tag>
   <elementGuidId>186e297c-4b99-4601-aef2-457cd0e5c0af</elementGuidId>
   <selectorMethod>BASIC</selectorMethod>
   <useRalativeImagePath>false</useRalativeImagePath>
   <httpBody></httpBody>
   <httpBodyContent>{
  &quot;text&quot;: &quot;&quot;,
  &quot;contentType&quot;: &quot;text/plain&quot;,
  &quot;charset&quot;: &quot;UTF-8&quot;
}</httpBodyContent>
   <httpBodyType></httpBodyType>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Authorization</name>
      <type>Main</type>
      <value>Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5NmFlNTk5Mi0xZWUxLTQyMDgtOGIxOC0wYzM0YTRiZTg0ZTIiLCJpYXQiOjE1MjU5MDA2NDIsInN1YiI6InN0cmluZyIsImlzcyI6ImJnZW5lcmFsLWRpZ2l0YWwtYnVzaW5lc3MtY2FwYWJpbGl0aWVzIiwiZXhwIjoyMTQ3NDgzNjQ3LCJsYXN0TG9naW4iOiIyMDE4LTA1LTA5VDE1OjQyOjUzIiwiYmNWaXJ0dWFsIjo2NywiaXAiOiI2NC4xMTYuMTkxLjQ3IiwiY29tcGxldGVOYW1lIjoiSk9TRUZJTkEgTUFSSUEgVklDVE9SSUEgUkFOR0VMIERFIENBUlJBU0NPIiwic2VzaW9uQmciOiIyNUIzOTlGRUJEMjk4NUUzNkQ0OTk5Q0MxMTVCOEMzODFBRDY2REQwIiwiY2xpZW50TnVtYmVyIjo1MjQ5NzgsImxvZ2luIjoiMTMwNjU5NiIsImFwcGxpY2F0aW9uTmFtZSI6InN0cmluZyJ9.qCXnjF_mPFU1Vh6XQlBklTSpzjrGtVpdLigomEyrR8Y</value>
   </httpHeaderProperties>
   <httpHeaderProperties>
      <isSelected>true</isSelected>
      <matchCondition>equals</matchCondition>
      <name>Content-Type</name>
      <type>Main</type>
      <value>application/json</value>
   </httpHeaderProperties>
   <migratedVersion>5.4.1</migratedVersion>
   <restRequestMethod>POST</restRequestMethod>
   <restUrl>http://bg-digital-stage-infra-1211059729.us-east-1.elb.amazonaws.com/onboarding/api/consultClient/</restUrl>
   <serviceType>RESTful</serviceType>
   <soapBody></soapBody>
   <soapHeader></soapHeader>
   <soapRequestMethod></soapRequestMethod>
   <soapServiceFunction></soapServiceFunction>
   <verificationScript>import static org.assertj.core.api.Assertions.*

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webservice.verification.WSResponseManager

import groovy.json.JsonSlurper
import internal.GlobalVariable as GlobalVariable

RequestObject request = WSResponseManager.getInstance().getCurrentRequest()

ResponseObject response = WSResponseManager.getInstance().getCurrentResponse()
</verificationScript>
   <wsdlAddress></wsdlAddress>
</WebServiceRequestEntity>
