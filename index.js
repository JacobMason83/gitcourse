// git init starts the git repository 
// make sure you in the root directory where you want the repository to live 
/*
git status = tells you if you have files to be committed, branch your on, pretty much the status your at
git add "the file"/and or (. = all the files )
git commit -m "initial commit" = that your committing the file to master file, and your giving it the message initial commit / and creating the version of it
git remote add origin https://github.com/JacobMason83/gitcourse.git https is whatever the repo name 
use http version, and git remote -v 
and it will give you a fetch, and push remotes and as long as you have that your good to go 
or if you name it origin main, you can change it git branch master then hit enter
then git push -U origin master 
to make your repo, go to github, hit the plus sign, and name the repo as long as its green , and after that you click create repository
quick setup allows you to quickly link your local system, and online repo

when you have a new file, that you want to push, or additions to the code
you go to git add. 
git commit -m " whatever you did , changed etc "
git push then pushes it to the repo
git log shows all the commits made to this repo 
to clear the cache git rm -r --cached . 
when your working with other collaborators, and someone updated the master, and you need to pull down the latest version use
git pull which allows you to pull down the latest version from github
and allows you to keep uptodate with the version by pulling all the new code from github , and make sure your on the master branch tho
git checkout -b branch name, will allow you to checkout into a branch , and now if you have to pull to the master your changes wont be touched
git merge branch name, will merge the branch to the main master branch 

good practices is to be in a branch and not on the master, but for collaboration its easier to just merge and push to github,
and will allow you to keep the master branch clean, and get used to using it 
*/