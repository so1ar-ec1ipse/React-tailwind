# EstateSpace Frontend Development Challenge

Hi! Thank you for your interest in [EstateSpace][g3website]. Our evaluation processes includes an open-ended coding challenge that will be part of your interview. There is not one correct way to approach this challenge. Rather, we would like to see your approach and your creativity in solving the problem.

We appreciate that any coding challenge represents an investment of your time.

# The Challenge
EstateSpace employs several technologies to create a services based architecture leveraging a REST API. We are currently using
[Nodejs][nodejs] on the backend with [docker][docker] based microservices deployed to AWS over [kubernetes][kubernetes].  We currently
have a [React][react] webapp and use [React Native][reactnative] for mobile.

Your challenge is to create a UI following the specified design and using the given [React][react] components.
Feel free to go into detail or keep it simple.

## Tech stack

- [React](https://reactjs.org/)
- [parcel](https://parceljs.org/) as the bundler
- [tailwindcss](https://tailwindcss.com/) as the CSS framework
- [storybook](https://storybook.js.org/) to organize and develop components

## Pre-requisites
- Node v12 or higher (v12.18.3 was used to test this challenge)

## Running the webapp
- `npm install --legacy-peer-deps` followed by `npm run start`.
- This should start the single page web application accessible via http://localhost:1234 that will show all the provided
[React][react] components (Navbar, CollapsibleSection, Input, Dropdown, etc).

## Requirements
We would like a minimum capability. These are:
- Get it to work with bare minimum UI. 
- The code must execute. 
- You need to build a UI exactly as provided in the screenshot in the web_interview/mock directory using the components provided to you  in src/App.jsx file
- These components are stateless and accept props. Every component has a list of prop-types describing the props they accept. Your aim should be to reuse these components as much as possible while creating your application.
-- You don’t need to add search-bar, world-clock or other features in the Navbar component as you may notice in the screenshot.
- The code uses tailwind as CSS framework. You may use tailwind or CSS for styling, whichever you prefer.
- You need to store all the data from the form fields (Inputs and Dropdowns) as you think will be best for maintaining the state.
- For Dropdown fields, you can use any mock data for the dropdown items.
- On clicking “Save”, you should print (or console.log()) all the values in the given structure/format:
```json
{
  eSpaceName,
  companyName,
  subscription,
  owner: {
   name.
   phone,
   email,
  },
  location: {
   street,
   suite,
   city,
   country,
   postalCode,
  }
}
```
- Try to limit time investment to 30-60 mins max for the initial “get it to work approach”. 
- Share the git repo link that contains your code and readme with steps to execute.


Please do not overthink think this or get too wrapped up in making a bullet proof application. This is a basic
challenge. Spending significant amounts of time ensuring production level quality is not required. Rather,
we would like to see your ability to model a UI based on a provided design over production ready, visually
appealing features.

## Prerequisites
1. A basic understanding of source code control, [git][git-scm] is required.
2. You must make your code available via a [GitHub][github] account.
3. You should be familiar with [React][react] components and structuring a UI.

## Getting Started
1. Fork this [repository][repository].
1. Clone the fork to your local machine.
1. Start coding.
1. Commit changes to your fork as you see fit.

## Submission

When you are comfortable with your results, please email your fork to
[support@estatespace.com](mailto:support@estatespace.com). Please keep your emails short and to the point.

Any specific notes or further information you would like to add about your submittal, should be included in the GitHub project.

Do not feel as though you must create a public fork of this repository. You are free to create a throwaway GitHub account or private fork.
In those cases, please let us know so that we may send you the GitHub IDs to add to the repository.

## Evaluations

We realize there are many items to look at when creating an application.
Please do not feel like like you have to do everything.
Use your strengths to your advantage in the code you write.
Give us a heads up by documenting your code to let us know where and why you concentrated on certain items.

As you develop your solution, you may have ideas on other avenues to pursue.
Please feel free to include them inline as documented source or as additional [Common Mark][commonmark] compliant notes in your fork.

We look for creativity, originality, and a good user experience in your application if that's an area you focused on.

We look for readability, good architectural decisions, modularity, and a solid approach to testing in your code.

### License
This project is [MIT licensed][mitlicense].

[g3website]:https://www.griffingroupglobal.com
[git-scm]:https://git-scm.com/
[github]:https://github.com/
[nodejs]:https://nodejs.org/en/
[TDD]:https://en.wikipedia.org/wiki/Test-driven_development
[ES6]:http://www.ecma-international.org/ecma-262/6.0/
[eslint]:https://eslint.org/
[airbnb-eslint]:https://www.npmjs.com/package/eslint-config-airbnb
[mocha]:https://mochajs.org/
[repository]:https://github.com/GriffinGroupGlobal/web_interview
[mitlicense]:https://en.wikipedia.org/wiki/MIT_License
[commonmark]:https://spec.commonmark.org/]
[docker]:https://www.docker.com/
[kubernetes]:https://kubernetes.io/
[react]:https://reactjs.org/
[reactnative]:https://reactnative.dev/
 
