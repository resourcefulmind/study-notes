# What is Github Actions?

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline.

- With Github actions, you can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

- It also lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

## What are the components of Github Actions?

1. Workflow
2. Event
3. Runners
4. Jobs
5. Steps
6. Action

In summary, you can configure a GitHub Actions workflow to be triggered when an event occurs in your repository, such as a pull request being opened or an issue being created. Your workflow contains one or more jobs which can run in sequential order or in parallel. Each job will run inside its own virtual machine runner, or inside a container, and has one or more steps that either run a script that you define or run an action, which is a reusable extension that can simplify your workflow.

### What are workflows?

- A workflow is a **configurable automated process** that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

- Workflows are defined in the `.github/workflows` directory in a repository.

- A repository can have multiple workflows, each of which can perform a different set of tasks. For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, etc

- You can also reference a workflow within another workflow.

### What are events?

- An event is a specific activity in a repository that triggers a workflow run. eg creating a pull request or opening an issue.

- Events can also be triggered on a schedule by posting to a REST API.

### What are jobs?

- A job is a set of steps in a workflow that execute on the same runner.

- Steps are shell scripts that are executed in order, dependent on each other and can have data shared between them since they have the same runner. eg A step to build the app followed by another to test the built app.

- Steps can also be actions that will be run.

- Jobs have no dependencies by default (they run in parallel with each other). You have to configure job dependencies with other jobs. You can also have multiple jobs running in parallel and then dependent on one job after they are done running.

### What is an action?

- An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task.

- Mainly used to help reduce the amount of repetitive code that is written in workflow files. 

- You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.

### What is a runner?

- A runner is a server that runs your workflows when they're triggered. Each runner can run a single job at a time.

- Usually provided by Github and each runs in a fresh, newly-provisioned virtual machine.

- If you need a different operating system or require a specific hardware configuration, you can host your own runners.

### How To Create An Example Workflow

- In this workflow

1. GitHub Actions checks out the pushed code
2. installs the bats testing framework, and
3. runs a basic command to output the bats version: bats -v

Workflow can be found [here](https://github.com/resourcefulmind/learn-github-actions/blob/main/github/workflows/learn-github-actions.yml)

Explanation below:

Understanding the workflow file

To help you understand how YAML syntax is used to create a workflow file, this section explains each line of the introduction's example:

`name: learn-github-actions`
Optional - The name of the workflow as it will appear in the Actions tab of the GitHub repository.
`on: [push]`
Specifies the trigger for this workflow. This example uses the push event, so a workflow run is triggered every time someone pushes a change to the repository or merges a pull request. This is triggered by a push to every branch; for examples of syntax that runs only on pushes to specific branches, paths, or tags, see "Workflow syntax for GitHub Actions."
`jobs:`
Groups together all the jobs that run in the learn-github-actions workflow.
`check-bats-version:`
Defines a job named check-bats-version. The child keys will define properties of the job.
  `runs-on: ubuntu-latest`
Configures the job to run on the latest version of an Ubuntu Linux runner. This means that the job will execute on a fresh virtual machine hosted by GitHub. For syntax examples using other runners, see "Workflow syntax for GitHub Actions."
  `steps:`
Groups together all the steps that run in the check-bats-version job. Each item nested under this section is a separate action or shell script.
    `- uses: actions/checkout@v3`
The uses keyword specifies that this step will run v3 of the actions/checkout action. This is an action that checks out your repository onto the runner, allowing you to run scripts or other actions against your code (such as build and test tools). You should use the checkout action any time your workflow will run against the repository's code.
    ```
    - uses: actions/setup-node@v3
      with:
        node-version: '14'
    ```
This step uses the actions/setup-node@v3 action to install the specified version of the Node.js (this example uses v14). This puts both the node and npm commands in your PATH.
    `- run: npm install -g bats`
The run keyword tells the job to execute a command on the runner. In this case, you are using npm to install the bats software testing package.
    `- run: bats -v`
Finally, you'll run the bats command with a parameter that outputs the software version.

### Finding and customizing actions

To find and customize your actions, see [here](https://docs.github.com/en/actions/learn-github-actions/finding-and-customizing-actions)