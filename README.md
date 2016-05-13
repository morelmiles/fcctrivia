# FCC Vienna - Trivia Game
The sence of this repository is first of all to play around and learn some Javascript technologies.
Second of all, in some point it will turn into a simple trivia game :)

Development Setup
---------------

Prerequisites: [Node.js](http://nodejs.org/) 

Fork this project to your GitHub account (Fork button is in this project in the top menu).

```bash
# On Windows run cmd command and then clone the forked project
git clone https://github.com/*yourusername*/fcctrivia.git

# If poject was cloned successfully then switch to project directory
cd fcctrivia

# Install NPM dependencies
npm install

# Run project
node app.js
```

Now you can open your browser with following address: [http://localhost:5000](http://localhost:5000).

You should see our welcome screen.

Check the Issues
---------------
Check the Issues tab in the top menu. There are some opened issues which you can try to solve or help with.
If you want to resolve an issue, please write it in the issue comment, so everybody knows about it.

How to contribute with your code
---------------
In order to contriubute with your own code, you need to create a pull request from your branch. Follow these steps in your local directory:

1. check if you are in master branch and it is up to date
```bash
git status
# On branch master
# Your branch is up-to-date with 'origin/master'.

# nothing to commit, working directory clean
```
2. if you are not in master branch and/or there are some unresolved commits, please resolve your unwanted commits first and then switch to master branch by typing
```bash
git checkout master
```
3. create your new branch
```bash
git checkout -B branch/name-here
# Follow branch naming e.g. fix/short-description, feature/short-description
```
4. Edit your files locally
5. After you are done check your changed files and commit
```bash
git status
git commit -m "Your commit description" 
```
6. Push commit to your fork
```bash
git push -u origin branch/name-here
```
7. Find your branch here on GitHub and create a Pull Request from your branch to Trivias's master branch.

See it live!
---------------
Trivia is hosted on [Heroku](https://heroku.com/) you can see it live [here](https://trivia-demo-app.herokuapp.com/)
Keep in mind that your git pushes don't go automaticaly to this hosting. We have to check it and deploy it.

