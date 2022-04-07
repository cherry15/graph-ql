# Getting Started with Learn Apollo GraphQL
The purpose of this app is to learn the basics of graphQL server and client.

It is based on the tutorial at 
[Odyssey Apollo GraphQL parts 1, 2 and 3](https://odyssey.apollographql.com/lift-off-part1/feature-overview-and-setup).

It also uses create react app and react router [Create React App](https://github.com/facebook/create-react-app).

I have re-written the FE to typescript and have simplified the styles.

The images are huge but as image compression isn't the goal of this exercise I've left them huge. I also don't have control over the images.

The home page is static as I was working out a design using flex instead of position absolute. 

I have discovered some limitations of CSS Modules with a dynamic active class so have reverted some of the CSS to regular CSS, there's probably a solution to this but I don't know it yet. Normally I would use SCSS for CSS but the create react app doesn't recommend this approach. 

Although I know how to lazy load components I haven't done this because at the time it was an experimental feature, neither have I used Suspense for the same reason.

I will be adding tests using [MSW](https://mswjs.io/)

## Running the App

In the command prompt or terminal clone the app

#### `git clone https://github.com/cherry15/graph-ql.git`

CD into the directory

#### `cd graph-ql`

And install dependencies

In the client folder you can run
#### `npm install && npm start`

In the server folder you can run
#### `npm install && npm start`
