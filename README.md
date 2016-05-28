# FCC Vienna - Trivia Game
The sense of this repository is first of all to play around and learn some Javascript technologies.
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
In order to contribute with your own code, you need to create a pull request from your branch. Follow these steps in your local directory:

Step 1. check if you are in master branch and it is up to date
```bash
git status
# On branch master
# Your branch is up-to-date with 'origin/master'.

# nothing to commit, working directory clean
```
Step 2. if you are not in master branch and/or there are some unresolved commits, please resolve your unwanted commits first and then switch to master branch by typing
```bash
git checkout master
```
Step 3. create your new branch
```bash
git checkout -B branch/name-here
# Follow branch naming e.g. fix/short-description, feature/short-description
```
Step 4. Edit your files locally

Step 5. After you are done check your changed files and commit
```bash
git status
git add .
git commit -m "Your commit description"
```
Step 6. Push commit to your fork
```bash
git push -u origin branch/name-here
```
Step 7. Find your branch here on GitHub and create a Pull Request from your branch to Trivias's master branch.

Updating your forked repository.
------------------------------
In your local clone of your forked repository, you can add the original GitHub repository as a "remote". ("Remotes" are like nicknames for the URLs of repositories - `origin` is one, for example.) Then you can fetch all the branches from that upstream repository, and rebase your work to continue working on the upstream version.

To update your forked repository from main branch which can contain new features from someone else follow these steps in your local directory:

Step 1. Add the remote, call it "upstream":
```bash
# Add the remote, call it "upstream":
git remote add upstream https://github.com/DusanSacha/fcctrivia.git
```
Step 2.
```bash
# Fetch all the branches of that remote into remote-tracking branches,
# such as upstream/master:

git fetch upstream
```
Step 3.
```bash
# Make sure that you're on your master branch:

git checkout master
```
Step 4.
```bash
# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master
```
If you don't want to rewrite the history of your master branch, (for example because other people may have cloned it) then you should replace the last command with `git merge upstream/master`. However, for making further pull requests that are as clean as possible, it's probably better to rebase.

If you've rebased your branch onto `upstream/master` you may need to force the push in order to push it to your own forked repository on GitHub. You'd do that with:
```bash
git push -f origin master
```
You only need to use the `-f` the first time after you've rebased.

See it live!
---------------
Trivia is hosted on [Heroku](https://heroku.com/) you can see it live [here](https://trivia-demo-app.herokuapp.com/).

Keep in mind that your git pushes don't go automatically to this hosting. We have to check it and deploy it.
