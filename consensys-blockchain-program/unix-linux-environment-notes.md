# Unix/Linux Environment

- Unix is an operating system developed in the 1970s at the famous AT&T Bell Laboratories in Murray Hill, NJ, USA

- Written to make computer development easier for individuals and teams.

- Used to be really difficult to learn software development on Windows but Windows 10 changed all that with the Windows Subsystem for Linux(WSL). 

- Mac and Ubuntu users do not need to worry about installing Linux.

- The Unix system is made up of 3 layers:

    - **The kernel**: controls the resources of the machine.

    - **The Shell**: the interface between users and the kernel. Sits there and waits for you to type commands on it and then interpretes it. 

    - **Utilities**: these are things like editors and compilers for programming languages, document formatting programs and programs that you write yourself.

- The Unix system can summarily be seen as building block programs with which you can build other programs. The difference between the Unix system and other systems is the degree to which its building blocks programs can be combined to get different jobs done.

- A practical way of how it works is how different programs combine to separate words and find spelling errors.

- Unix systems have features that makes it easier for a programmer to write programs:

    - formatless files
    - heirarchical directory structure
    - ability to pipeline the output of one command as the input of another
    - ability to store information for extended periods of time becuase of a well designed file system.

    - Input/Output Redirection: Normally, when cmds are typed, output goes to terminal and input comes from your keyboard but with unix, you can tell the system that when you run a program, you want the output be directed into a file or the input to be taken from a file. A typical example of this is how you can type up commands to print a file directly. This is not possible in other systems as they are wired to have the notion that they have to read or write the user's terminal. Input and output redirection is handled by the shell instead of the individual program.

- A good OS is easy for a dev to use if the programming language fits the style of the system. Denis Richie created the C language in the course of the unix development.

- C is a high level language with modern programming constructs that lets you avoid the details of the machine when you want to but when you need to, you can get at the details of the machine and control everything but you are not forced to do that. You can write OS in C and still have somethig that can be portable to other machines. Devs can write their code and not be bothered with what is going on under the hood.