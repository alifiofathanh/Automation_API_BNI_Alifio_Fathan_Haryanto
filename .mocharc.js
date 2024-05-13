// .mocharc.js
module.exports = {
    spec: "testExplorer/testCase/testCaseAutomationAPI.js",
    timeout: 5000,
    reporter: 'mochawesome', 
    'reporter-option': [
    'reportDir=Report', 
    'reportFilename=[status]_[datetime]-[name]-report', 
    'html=true',
    'json=false', 
    'overwrite=false', 
    'timestamp=longDate', 
    ], 
};