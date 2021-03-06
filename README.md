# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

1. Fork
1. Clone
1. Pull Request

![React](https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png)

# [Create React App](https://facebook.github.io/create-react-app)

![](wishlist-app.png)

## Start Here

Inside this repo, run the following command to create a new react app:

```sh
npx create-react-app wishlist-app
```

> `npx` is a tool for running JavaScript npm modules that are intended for use as commands.

Use `npm start` to start a server that will serve your new React application:

```bash
cd wishlist-app
npm start
```

You can view the app at `http://localhost:3000`

> Note: If you ever need to stop the server, you can hit `ctrl-c` in the terminal window.

Your job will be to implement the following:

1. A Header component
1. A List component
1. An Item component
1. A Footer component
1. A Blog component

Your App component will have three children: Header, List, and the Footer component.
The List component will have a child component, the Item component that will render the list item along with any votes that the item has gotten.

It will also have a `handleItemUpVote` and `handleItemDownVote` method that will be passed down via props to the Item component. These methods will increase or decrease the votes for the list item which should dynamically update as you click up and down.

Add in a Blog component and use Link and Route from react-router-dom to dynamically render the Blog component or the List components depending on what url the user navigates to!

**Bonus One:** Give the user the ability to add List items

**Bonus Two:** Give the user the ability to create blog posts and dynamically render them on the page.

**Super Bonus** Add in user authentication (mocked) and have in state different user objects with associated list / blog items and render them depending on which user is 'logged' in.


**Required**
- You should use Styled Components in at least one component
- It's highly recommended that you test out a react styling framework

**Tips:**
- Use Flexbox

##

<p align="center">
  <img src="wishAppColors.png"/>
</p>
