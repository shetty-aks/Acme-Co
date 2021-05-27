# Welcome to ACME CO.

## Summary

This is a fictitious website using Next.js framework. As far as now I have worked on the following -

### Level 1 - Next.js setup with typescript and basic page layout

-   Create Next.js instance
-   Use typescript
-   Create React components for sections of the webpage, you do not need to style these components but the markup should be well thought out.
-   Use yarn to setup the build process
-   Provide documentation on how to get it running locally

### Level 2 - Create styles for these components

-   Use react styled components to style the existing components you have createdUse typescript
-   Make sure your styles are responsive for differnt screen sizes (see mobile screen shot in images folder)
-   Add functionality for dropdown menu
-   Create a unit test for the dropdown menu

Stay tuned for more updates in coming week!

## Demo
![ACMEC CO. Screenshot](acme-co/public/assets/home-page-final-screenshot.png?raw=true)


## Steps to get it running locally

### Requirements

-   Node.js and yarn

### Steps to run it locally
```
git clone https://github.com/shetty-aks/FrontendChallenge.git
cd FrontendChallenge/acme-co
yarn install
```
Then, you can run locally in development mode with live reload:

```
yarn dev
```

### Unit tests

Independently exported the Popup styled component and tested for correct rendering and applying of props.
These tests were some sample rendering tests. There is scope for more DOM, event based and snapshot testing via the Navbar component. To run tests:

```
yarn test
```

Open  [http://localhost:3000](http://localhost:3000/)  with a browser of your choice and you should see a landing page as shown in the demo. Take a note of the fact that, Next JS needs to take some time to compile the project for your first time.