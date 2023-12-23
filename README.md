# Task

An application that identifies the pair of employees who have worked together on common projects for the longest period of time and determines the duration for each of those projects.
Input data is accepted from a CSV file in the following format:

- EmpID, ProjectID, DateFrom, DateTo

## Problem solving

The concept is that when the file is uploaded, the goal is to extract data from it, bring it into an appropriate data structure containing the necessary information to solve the problem, and create various components suitable for the contents of the data structure. Finally, these components are displayed to the user, helping them become familiar with the type of file and the required structure needed for uploading to view the results.

### Algorithm

- Accept the CSV file using the file input field.
- Read the file as text and save the data.
- Convert the received data from text to an array.
- Transform the array into an array of objects.
- To preserve the correct dates in the new data structure, a function is created to parse the dates into the correct JavaScript format.
- Once we have the formatted date values, we create a function that saves them as date type values in the object properties where needed.
- Create a new data structure, grouping values by project.
- Create a new data structure based on the previous one, grouping employee value pairs.
- Display the final results of the last data structure in the corresponding React component.

## Installation

First, make sure you have Node.js and npm installed on your computer.
Then, in a terminal window in the project root folder, run the following command to install all required dependencies:

```sh
npm install
```

## Start the application

After successful installation of dependencies,
run the following command to run the application in development mode:

```sh
npm start
```

This will launch the app and open it in your default browser.
