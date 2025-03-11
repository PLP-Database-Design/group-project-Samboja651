# Test Plan for the Terminal Based Calculator.
Goal is to test the functionality of each module.

## Test Objectives
Verify the basic arithmetic operations. Addition, Subtraction, Division and Multiplication.

## Test Scope
**In scope**
- Addition
- Subtraction
- Multiplication
- Division
(Positives, Negatives, Decimals, Zeros, non numerics)

## Test Strategy
Unit testing with Jest.

## Test Cases
**Addition**
| Test Case id | Input (a, b) | Expected Output | RemarksFail |
| -------- | -------- | -------- | -------- |
| TC_1   | 4, 3   | 7   | positive number test   | 
| TC_2   | -3, -4   | -7   | negative number test   |
| TC_3   | -3, 4   | 1   | negative number test   |
| TC_4   |  4, 0.5  | 4.5   | Decimal number tests     |


**Subtraction**
| Test Case id | Input (a, b) | Expected Output | Remarks
| -------- | -------- | -------- | -------- |
| TC_5   | 4, 3   | 1   | positive number test   | 
| TC_6   | -3, -4   | 1   | negative number test   |
| TC_7   | -3, 4   | -7   | negative number test   |
| TC_8   |  4, 0.5  | 3.5   | Decimal number tests     |


**Multiplication**
| Test Case id | Input (a, b) | Expected Output | Remarks |
| -------- | -------- | -------- | -------- |
| TC_9   | 4, 3   | 12   | positive number test   | 
| TC_10   | -3, -4   | 12   | negative number test   |
| TC_11   | -3, 4   | -12   | negative number test   |
| TC_12   |  4, 0.5  | 2   | Decimal number tests     |
| TC_13   |  4, 0  | 0   | multiplication by zero     |
| TC_14   |  4, '#'  | NaN   | multiplication of non numerics   |

**Division**
| Test Case id | Input (a, b) | Expected Output | Remarks
| -------- | -------- | -------- | -------- |
| TC_15   | 4, 3   | 1.3333333333333333   | positive number test   | 
| TC_16   | -3, -4   | 0.75   | negative number test   |
| TC_17   | -3, 4   | -0.75   | negative number test   |
| TC_18   |  4, 0.5  | 8   | Decimal number tests     |
| TC_19   |  4, 0  | error   | division by zero     |
| TC_20   |  0, 4  | 0   | zero division    |

## Risk Analysis
| Risk | Severity 
| -------- | -------- 
| Division by zero   | High   
| Incorrect decimal calculations   | Low 

## Test Environment
Node.js
Jest

## Entry/Exit Criteria
Entry: `calculator.js`, Jest, node.js and npm intalled\
Exit: All tests pass.

## Tools
Project management tools
- Jira
- Trello
  
Test automation tools
- Selenium
- Appium
