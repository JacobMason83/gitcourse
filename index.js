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

git rebasing 
if say your master is ahead of your feature, you can rebase it by leverages rebasing it 
and making your branch up to date with the master, and what you pulled out would be 
the branch your on will remain that checked out branch itll just update the master data 
if your working on a feature with others , never do a rebase 

git stash branch name
allows you to put stuff and saved in the cache, and then 
git stash show will show you what was changed, and make sure that it copys the whole thing where the master is and everything 
git stash apply will apply it back to branch, and then commit and push 
then git stash clear will clear the stash so that if you need to stash again it will be clear 

git pull - pulls down all the recent changes to the main file, and update it on the local system
get fetch - pulls down the master branch with commits, and doesnt override the code locally 
to get it to be up to date locally you use git merge origin/master and it will open a windo called
merge remote-tracking branch 'origin master and itll make you add some details and why you need to do this
then add a new line merged in whatever happend and whatever features you did and then hit enter
and then git push and itll be all synced up 
git pull is more generic and as long as you dont have any merge conflics
git fetch is more specific and allow you to deal with those conflicts yourself 

how to delete a branch or repos
delete the branch on your local system  git checkout -d branch to remove keep it a day or two and then remove it 
git push origin --delete branch name 

step by step guide to remove git merge conflicts 

all a merge conflict is git giving you a choice 
in the file itll say head is the local change 
inbetween head  and first line is your change and the rest is what you brought down 
delete the lines and save the file and its fixed 


git diff file name will show the changes of the branch and masters

git keeps track of changes to existing files, when you use checkout itll remove the changes you made and revert to the branch you did 
if you use rm the bad file or just delete it in the console or github etc , and if you have untracked files just delete the bad files, and it will allow you to revert to a previous commit 

if you want to revert to a previous commit, go into git log and scroll to the sha number
then type git checkout sha#/hash# -- fileName where  you want it to go 
then git add . 
git commit -m " reverted back to a previous version sha/hash# "
git push 

guide to viewing a version commit in git 
use the commit hash and checkout into the branch and give it the file name and then check it and if its what you want then you can revert to it 
this is for specific files

to revert the entire project back to a previous version 
it is not to be done very often, its like your losing time just depends on how long ago it was etc 
its better to do it specific file 

start off by going into the log and find a commit you want to investigate
grab the hash number and go to git checkout hash# -b investigation 
its just named investigation, because thats what your doing and thats investigation 
when its the one you want you type 
git reset sha# --head takes that sha number and makes it the head it will tell you that your behing so many commits 
so to make it permant you use 
git push -f origin master 

make sure you know exactly what your doing, only do it when your doing it by yourself
and there are no consequences to it, only on a small project otherwise it could get very messy 

*/