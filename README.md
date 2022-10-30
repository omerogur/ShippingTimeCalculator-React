# Front-End Development Test
● Date selection and fabric selection design is left to your preference, while should be consistent with the
overall design\
● After the user picks an input “gray” colored placeholder text should replace with “black” colored text - in
consistency with overall design elements\
● In the “Fabric Type” input field, the arrow should have a distance of 10% with the input box's right border\
● If the user presses calculate without filling in all input types correctly, a pop-up error should come and say
“Please Fill All Information Correctly”, pop-up design should be consistent with the overall design\
● When the user first enters the website, the text below the “Calculate” button should be “Please enter your
order information to estimate shipping date” and after the calculation is completed the text should turn into
“Your Estimated Shipping Date is <...>”\
● When the user hovers over the “i” button in the “Quantity” section, a small box should appear with the text
“Shipping Dates May Vary Based on Quantity”\
● Responsiveness: The design should be responsive to different screen sizes. Most importantly, input field
forms should switch to vertical distribution instead of horizontal distribution at smaller screen sizes.
Blue/Purple gradient design should take a smaller percentage of the screen in lower width and mobile
screens. Gradients shouldn't interfere with the text and the design should preserve aesthetics and
alignments in IPhone, Ipad, Galaxy, Pixel 5 and similar devices.\
● Order date picker input should have an id exactly equal to “datepicker”\
● Quantity input should have an id exactly equal to “productnumber”\
● Product type selection dropdown select should have an id exactly equal to “productstyle”\
● Product type selection dropdown should have type as “text”, not “value”\
# Shipping Time Calculation
● Shipping time is calculated based on business days\
● For “Cotton” and less than 50 pieces, shipping time is 2 business days\
● For “Cotton” and more than or equal to 50 pieces, shipping time is 3 business days\
● For “Linen” and less than 50 pieces, shipping time is 4 business days\
● For “Linen” and more than or equal to 50 pieces, shipping time is 5 business days\
● Example for shipping in 2 business days:\
○ If the order is placed on Monday, the item ships on Wednesday\\\\
○ If the order is placed on Wednesday, the item ships on Friday\\\
○ If the order is placed on Friday, the item ships on next week’s Tuesday\\
○ If the order is placed on Saturday or Sunday, the item ships on next week’s Tuesday\
● Bonus Calculation: To get bonus points you can integrate these two dates (for all years) as National
Holidays, which means they won’t count as business days.\
○ July 4th and December 25th (assume all other weekdays are business days except for these two
dates)\
○ Example: The item ships in 2 business days, today is July 2nd, and is Monday, the item will be
shipped on July 5th Thursday instead of July 4th Wednesday. If the 4th of July is a Saturday that
year, it wouldn’t change the calculation.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
