# What is the Terminal

- It is a place where you type commands on the computer that cause actions.

## What is a CLI

- It is short for Command Line Interface. It is the actual place where you type the commands to use the computer. What you see on most Sci-Fi movies like The Matrix. A good example is the Apple II

### What is a GUI

- It is short for the Graphical User Interface. That is tech jargon for the computer with the screens that you see these days with the beautiful folders and screens and stuff.

- For MAC_OS, you probably already have **Terminal** on your system. (Applications -> Terminal)

- For Linux, you can download it

- For Windows, you can download **GitBash** (<https://gitforwindows.org>) and later on you can use **WSL (Windows Subsystem for Linux)**

#### Some common commands are

- `pwd` stands for "Print Working Directory" and  it will show the user where they are inclusive of the path. A directory simply means folder as well.

- `mkdir` stands for "Make Directory" and will create a folder.

- `cd` means "create directory" and enables a user to open a new folder. eg `cd Desktop`

- `cd ..` will make the user go up a level in the directory path. It's like going from a child-folder to the immediate parent-folder.

`cd` will take you inside a folder and `cd ..` will take you out one level from child to immediate parent.

- `cd ~` will take you all the way back to the home folder

- `cd <folder>/<subfolder>/` is used when you want to proceed to a specific path.

- `clear` will clear the terminal.

- `touch <name-of-file>` will create a new file eg `touch index.html`

- `ls` will show you a list of all the files contained in the current folder at any given time.

- `ls -l` will give us the list and more information like the name, the date of creation and permissions on the file

- `ls -la` will show you the list and all the information about the files including the hidden stuff.

- `rm <name-of-file>` will remove a file. eg `rm index.html`.

- `rm -r <folder>` will remove/delete a folder.

- `rm -rf <folder>` will remove forcefully/permanently.

- `code <filename>` will open a file in VScode.
The user has to go to the command palette in their VS code --> View --> Install code command with PATH  and then they can use this.

### GIT

#### Why is GIT important?

Recall that before the advent of modern technology as we know it, saving documents on your computer, say a Micorsoft Word file would have been done via the following ways:

1. Floppy Disks
2. Flash and sometimes hard drives depending on your level of paranoia, lol.
3. Saving it and e-mailing it to yourself and sometimes to others because you know your computer might be bad or because you want to collaborate with them.
4. Other ways which I am sure you are thinking about in your mind now.

The above ways were the early days of what we know now as **"Version Control".**

**Git** solves this version control problem for our codes and right now some people like myself even keep my notes on there too. Other types of version control are Google Drive, etc

### How does Git work?

Git is a version control system that gives a user the ability to make **"save points"** and track changes to code that you or your team members make.
Save points are snapshots of your code at different times while you are working.

A more concise definition would be that **Git** is a distributed version control system (DVCS) that allows multiple developers or other contributors to work on a project. It provides a way to work with one or more local branches and push them to a remote repository. Git is responsible for everything GitHub-related that happens locally on your computer. Key features provided by Git include:

- It's installed and used on your local machine
- Handles version control
- Supports branching

**WHILE**

**GitHub** is a cloud platform that uses Git as its core technology. It simplifies the process of collaborating on projects and provides a website, command-line tools, and overall flow that allows developers and users to work together. GitHub acts as the "remote repository" mentioned previously in the Git section.
Key features provided by GitHub include:

- Issues
- Discussions
- Pull requests
- Notifications
- Labels
- Actions
- Forks
- Projects

Git makes it possible to make those save points and to also place those save points on servers like Github so you can share your code with everyone for easy collaboration.

Git also enables the user to be able to backup these save points on the cloud in case the user somehow loses access to all the data and files on their local machine.

Git also enables you to rollback your code to previous versions. Say you wrote a bunch of code and you want to take it back because you have sort of written rubbish (we all do that, you are not alone), Git gives you this power.

### Some Git Terminologies

- `commit` is what enables the user to make that snapshot(create that save point). Sort of the same thing like the user zipping up the file and emailing it to themselves back in the day.

- `branch` is like a bus-stop that leads to a street. You are on a journey on the main road for instance, a git branch is the bus-stop you get down and start walking into the street...You can always get back to the main road if you hit a dead end at the street or you can always discover a new path and add it to your map(merging the branch with the main file).

- `repository` is the special folder that holds all of your snapshots(commits). There is a local repository which is the folder on your PC(local machine) and then there is the remote repository which is going to be in the clouds, i.e on Github and where your codes are going to live. Also called **repo**.

### How To Install Git

- For Windows, visit [Git Bash](https://gitforwindows.org) or WSL.

- For mac OS, you can first install **homebrew** by entering this in your command line when you open your terminal

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

And then install Git using

`$ brew install git`

**NB: take note that you are not to use the $ sign when you see it in a code entered. The $ sign is simply telling you to enter the code after it and not before it.**

- For Linux
If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use dnf:

`$ sudo dnf install git-all`
If you’re on a Debian-based distribution, such as Ubuntu, try apt:

`$ sudo apt install git-all`
For more options, there are instructions for installing on several different Unix distributions on the [Git website](https://git-scm.com/download/linux).

### What to do after git is installed;

Enter this in your command line almost immediately after Git has been installed

`git config --global user.name "<your name>"`
`git config --global user.email "<preferably the email you used in signing up for github>"`

The above commands will be able to place a tag of your identity whenever you make a commit and tell anyone looking at the code where you have made a commit or written a piece of code.

Also, you can see other people's commits too so it helps when you are in a team as well.

### Basic Git Commands

**It is important to note that these are not all the commands but will get you on your merry way into the exciting journey of Git.**

`git init` will create that special folder to hold all your snap shots and if you check with `ls -la` you can see the folder along with other folders in your repo.

`git add <file>` will add whatever file you want to take a snapshot of to what is called a staging area. Think of a staging area as you putting all your files in one file jacket first before putting it in the special folder(repository) and sending it to your safety deposit box(Github). Kindly note that you can  add these files one after the other or you can use `git add .` to add all of the files at once.

`git status` will show you the items that are in the staging area and ready to be committed(ready to have their snapshots taken). Items highlighted in green are the ones in the staging area and ready for a commit while the ones in red are the ones still on the local machine that haven't been added to the staging area yet.

`git rm --cached <file name>` will enable a user to remove a file from the staging area.

`git commit` is used to take the snapshot of everything that's in the staging area. 
Ideally commits should always have a message which would inform anyone reading about the code on what has been done so you will often see something like this;

`git commit -m "<add text>"`

Make sure to always use the **Ideal** so you don't get stuck in the terminal's editor. If you get stuck there however(by typing just git commit), use the steps below

`i --> <type commit message> --> escape --> type :wq --> Hit Enter`

Once you hit enter after that, you just successfully took your first snapshot. It's like checkpoints in a game. When the power goes out or you get tired, you can always come back to meet your code at the last point you were. 

- Whether you are adding more changes to the new file or creating a new file all together, you just have to repeat the process again to make a new commit.

### Why is this important?

This is important because as a developer, you need to have a last saved point before you tackle a new and almost always more difficult feature.

- Github typically expects a user to be on the branch "main" instead of the old "master" version.

You can do that by entering the following command to switch from "master" to "main"

`git branch -M main`

### More on Branches

Sometimes, you don't want to roll back your code but you want to try a feature that might be risky or mess up the code.

This is where the **branch** comes in. You can move away from your code with a copy of everything intact and work on something else so even if you make a mistake, it does not affect the original version of the code.

If it works out well, you can **merge** that branch with the original code and if it does not, then you can just delete the branch.

- To create a new branch,

`git branch <name of new branch>`

- After creating this branch, then you have to move it to where you can make changes without affecting the rest of the code. This is what "checkout" does as shown below;

`git checkout <branch name that was just created>`

When you do a git status, it shows you that you are this new branch you have just created so you can keep working for as long as you want and make your changes without affecting the original code.

- Now you add and commit as usual.

- But let's say those changes you were trying to make turned out to be a dead end and you just want to go back to the original code, all you have to do is type the code below to take you back to where you were before

`git checkout <name of branch you want to go back to>`

- You can do stuff you want to do and if you do not like it, you can just go back to where you started.

- Let's say that you were successful with your new feature or changes you were trying to make and want to add the new branch to the original code, you do the below;

`git merge <name of branch>`

Ideally, as a junior engineer, you might only get to do this when you are working alone and on your personal projects. You will usually be required to push your changes/features of the new branch to the repo and open up a **Pull Request** where a senior will review your changes and then do the merging.

### What next after the commits?

After saving your snapshots, it is always advisable to take those snapshots and put them in the remote repository which is on Github. Github makes collaboration easier with other engineers.

Make this a rule

**"ANYTIME YOU MAKE A CHANGE, PUSH YOUR CHANGES TO YOUR REMOTE REPOSITORY"***

### So how to push?

1. Go to your [Github](https://www.github.com) and create a new repository (Look for the plus sign)

2. For the sake of convention, make sure the name of this Github repository is the same as the one in your local machine.

3. After naming, you can add a README.md to give a description of what happens in the repository.

4. Then you add remote (where you want to send it in the clouds on Github) by using:
`git remote add origin <link to repo>`

5. After this, input the below command to make the first git push to the online repository.
`git push -u origin main`

Subsequent file pushes can only then be made for that repo by just using `git push`.

- If you want to host your new code online for free, open a new branch on the online repo called **gh-pages** and then you can view your live link by entering this in your browser

**<your-Github-username>.github.io/<name-of-repo>/index.html**

- Make sure it is the exact same name

**Just like that ladies and gentlemen, your code has been stored safely in the cloud, it is in public and can be seen. I bet you feel like a hacker now right? You are no longer a beginner, lol.**

### Additional Notes

- When you create a pull request, include a summary of the changes and what problem they solve. You can include images, links, and tables to help convey this information. If your pull request addresses an issue, link the issue so that issue stakeholders are aware of the pull request and vice versa. If you link with a keyword, the issue will close automatically when the pull request merges. 

- There are two primary ways people collaborate on GitHub:

1. Shared repository
2. Fork and pull

With a shared repository, individuals and teams are explicitly designated as contributors with read, write, or administrator access. You most likely achieve this by cloning the repo.

For an open source project, or for projects to which anyone can contribute, managing individual permissions can be challenging, but a fork and pull model allows anyone who can view the project to contribute.
A fork is a copy of a project under a developer's personal account. Every developer has full control of their fork and is free to implement a fix or a new feature.
Work completed in forks is either kept separate, or is surfaced back to the original project via a pull request. There, maintainers can review the suggested changes before they're merged.

- You can find a full *git cheatsheet* [here](https://training.github.com/downloads/github-git-cheat-sheet.pdf)

- What are Issues?

Issues are where most of the communication between a project's consumers and development team occurs. An issue can be created to discuss a broad set of topics, including bug reports, feature requests, documentation clarifications, and more. Once an issue has been created, it can be assigned to owners, labels, projects, and milestones. You can also associate issues with pull requests and other GitHub items to provide future traceability.

- What are Pull Requests?

A pull request is the mechanism used to alert that the commits from one branch are ready to be merged into another branch. The developer submitting the pull request will often request one or more reviewers/maintainers to verify the code and approve the merge. These reviewers have the opportunity to comment on changes, add their own, or use the pull request itself for further discussion. Once the changes have been approved (if approval is required), the pull request's source branch (the compare branch) may be merged in to the base branch

- What are labels? 

Labels provide a way to categorize and organize issues and pull requests in a repository. As you create a GitHub repository several labels will automatically be added for you and new ones can also be created.

Examples of Labels include:

- bug
- documentation
- duplicate
- help wanted
- enhancement
- question

You can take Microsoft's short course on Github to really finetune your Github skills by following this [link](https://docs.microsoft.com/en-us/learn/modules/introduction-to-github/1-introduction)


- Rules to live by for commit messages:

Don’t end your commit message with a period.
Keep your commit messages to 50 characters or less.

Add extra detail in the extended description window if necessary. This is located just below the subject line.

Use active voice. For example, "add" instead of "added" and "merge" instead of "merged".

Think of your commit as expressing intent to introduce a change.