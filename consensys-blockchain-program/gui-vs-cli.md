# Graphical User Interface (GUI) vs Command Line Interface (CLI)

## Graphical User Interface (GUI)

- A form of user interface that allows users to interact with electronic devices through graphical icons and audio indicator such as primary notation, instead of text-based UIs, typed command labels or text navigation.

- The GUI is presented (displayed) on the computer screen. It is the result of processed user input and usually the main interface for human-machine interaction.

- Actions are usually performed through direct manipulation of the graphical elements.

- Also used in many handheld mobile devices such as MP3 players, portable media players, gaming devices, smartphones and smaller household, office and industrial controls.

- The goal of GUI and interaction design is to enhance the efficiency and ease of use for the underlying logical design of a stored program.

- Typically, users interact with information by manipulating visual widgets that allow for interactions appropriate to the kind of data they hold.

- The widgets of a well-designed interface are selected to support the actions necessary to achieve the goals of users.

- A model–view–controller allows flexible structures application functions. These flexible structures are independent of the interface and indirectly linked to them.

- Good GUI design relates to users more, and to system architecture less

- Large widgets, such as computer and browser windows, usually provide a frame or container for the main presentation content such as a web page, email message, or drawing. Smaller ones usually act as a user-input tool.

- Real life applications of GUI designs include: 

    - Vertical market implementation as application GUIs e.g automated teller machines (ATM), point of sale (POS) touchscreens at restaurants, self-service checkouts used in a retail store, airline self-ticket and check-in, information kiosks in a public space, like a train station or a museum, and monitors or control screens in an embedded industrial application which employ a real-time operating system (RTOS).

    - Cellphones and handheld game systems.

    - Newer Automobile navigation systems and multimedia centers.

## Components of a GUI

GUI is made possible by the use of a combination of technologies anf devices to provide a platform that users can interact with, for the tasks of gathering and producing information.

- The most common combination of such elements in GUIs is the windows, icons, text fields, canvases, menus, pointer (WIMP) paradigm, especially in personal computers. 

## The WIMP Paradigm

- It is a style of interaction that uses a virtual input device to represent the position of a pointing device's interface, most often a mouse, and presents information organized in windows and represented with icons. 

- Available commands are compiled together in menus, and actions are performed making gestures with the pointing device.

- A window manager facilitates the interactions between windows, applications, and the windowing system.

- The windowing system handles hardware devices such as pointing devices, graphics hardware, and positioning of the pointer.

- In personal computers, all these elements are modeled through a desktop metaphor to produce a simulation called a desktop environment in which the display represents a desktop, on which documents and folders of documents can be placed. Window managers and other software combine to simulate the desktop environment with varying degrees of realism.

- Post WIMP are the ones used by smaller mobile devices. These support styles of interaction using more than one finger in contact with a display, which allows actions such as pinching and rotating, which are unsupported by one pointer and mouse.

- The Xerox Alto was the first ever computer with a GUI. Was made in 1973 but never saw commercial production.

- The first commercially available computer with a GUI was 1979 PERQ workstation, manufactured by Three Rivers Computer Corporation. Its design was heavily influenced by the work at Xerox PARC

- Xerox eventually commercialized the Alto in 1981, in the form of a new and enhanced system – the Xerox 8010 Information System – more commonly known as the Xerox Star

- In comparison to CLI, GUI is more heavyweight but presents users with many widgets that represent and can trigger alot of the system's available commands quicker especially when they would naturally involve many commands on a CLI.

    - GUIs can be made quite hard when dialogs are buried deep in a system or moved about to different places during redesigns. Also, icons and dialog boxes are usually harder for users to script.

    - WIMPs extensively use modes, as the meaning of all keys and clicks on specific positions on the screen are redefined all the time. Command-line interfaces use modes only in limited forms, such as for current directory and environment variables.

## Command Line Interface (CLI)

- An overarching philosophy with command line clients is the concept that Everything is a File. This means that every item you see on the command line interface or terminal is a file that can either be written to (changed) or read.

- No matter what kind of file the folder holds, the command line will simply understand it as a file. This is a form of abstraction which allows the command line to generalize computation in a powerful way. 

- receives commands from a user in the form of lines of text

- provides a means of setting parameters for the environment, invoking executables and providing information to them as to what actions they are to perform.

- CLIs are often implemented in terminal devices that are also capable of screen-oriented text-based user interfaces that use cursor addressing to place symbols on a display screen.

- Programs with command-line interfaces are generally easier to automate via scripting.

- Mainly used for control and operations of software systems for programming environments and utility programs.

- When compared to a GUI, 

    -  requires fewer system resources to implement.

    - Automation of repetitive tasks is simplified by line editing and history mechanisms for storing frequently used sequences; this may extend to a scripting language that can take parameters and variable options.

    - A command-line system may require paper or online manuals for the user's reference, although often a "help" option provides a concise review of the options of a command. 

    - It may be difficult for a new user to become familiar with all the commands and options available, compared with the icons and drop-down menus of a graphical user interface, without reference to manuals.

## Types of CLIs

1. **Operating system command-line interfaces**: usually distinct programs supplied with the operating system. A program that implements such a text interface is often called a command-line interpreter, command processor or shell. A typical example is the Windows CMD.EXE programs

> Although the term 'shell' is often used to describe a command-line interpreter, strictly speaking, a 'shell' can be any program that constitutes the user-interface, including fully graphically oriented ones. For example, the default Windows GUI is a shell program named EXPLORER.EXE, as defined in the SHELL=EXPLORER.EXE line in the WIN.INI configuration file. These programs are shells, but not CLIs.

2. **Application command-line interfaces**: may support any or all three major types of CLI mechanisms namely:

    - **Parameters**: Most command-line interfaces support a means to pass additional information to a program when it is launched.
    - **Interactive command-line sessions**: After launch, a program may provide an operator with an independent means to enter commands.
    - **Inter-process communication**: Most operating systems support means of inter-process communication (for example, standard streams or named pipes). Command lines from client processes may be redirected to a CLI program by one of these methods

## Anatomy of a Shell CLI

```bash
Prompt command param1 param2 param3 … paramN
```

**Prompt** — generated by the program to provide context for the user.

**Command** — provided by the user. Commands are usually one of three classes:

- Internal commands are recognized and processed by the command line interpreter.

- Included commands run separate executables.

- External commands run executable files that may be included by other parties.

**param1 …paramN** — parameters provided by the user. The format and meaning of the parameters depends upon the command. 

In the case of Included or External commands, the values of the parameters are delivered to the program as it is launched by the OS. 

Parameters may be either Arguments or Options.

- delimiters between command-line elements are whitespace characters and the end-of-line delimiter is the newline delimiter. This is a widely used (but not universal) convention.

- A CLI can generally be considered as consisting of syntax and semantics.

- Syntax is the grammar that all commands must follow. 

- The semantics define what sort of operations are possible, on what sort of data these operations can be performed, and how the grammar represents these operations and data—the symbolic meaning in the syntax.

> Two different CLIs may agree on either syntax or semantics, but it is only when they agree on both that they can be considered sufficiently similar to allow users to use both CLIs without needing to learn anything, as well as to enable re-use of scripts.

>> A simple CLI will display a prompt, accept a "command line" typed by the user terminated by the Enter key, then execute the specified command and provide textual display of results or error messages. Advanced CLIs will validate, interpret and parameter-expand the command line before executing the specified command, and optionally capture or redirect its output.

- The commands given to a CLI shell are often in one of the following forms:

```bash
doSomething how toFiles
doSomething how sourceFile destinationFile
doSomething how < inputFile > outputFile
doSomething how | doSomething how | doSomething how > outputFile
```

where `doSomething` is, in effect, a verb, `how` an adverb (for example, should the command be executed "verbosely" or "quietly") and `toFiles` an object or objects (typically one or more files) on which the command should act. The `>` in the third example is a redirection operator, telling the command-line interpreter to send the output of the command not to its own standard output (the screen) but to the named file. 
This will overwrite the file. Using `>>` will redirect the output and append it to the file. 

Another redirection operator is the vertical bar `(|)`, which creates a pipeline where the output of one command becomes the input to the next command.

## Command Prompt

- a sequence of (one or more) characters used in a command-line interface to indicate readiness to accept commands. It literally prompts the user to take action. A prompt usually ends with one of the characters $, %, #, :, > or -[10] and often includes other information, such as the path of the current working directory and the hostname.

- On many Unix and derivative systems, the prompt commonly ends in $ or % if the user is a normal user, but in # if the user is a superuser ("root" in Unix terminology).

## Arguments

- A command-line argument or parameter is an item of information provided to a program when it is started. A program can have many command-line arguments that identify sources or destinations of information, or that alter the operation of the program.

```bash
rm file.s
```

## Command-line Option

A command-line option or simply option (also known as a flag or switch) modifies the operation of a command; the effect is determined by the command's program. Options follow the command name on the command line, separated by spaces. A space before the first option is not always required, such as Dir/? and DIR /? in DOS, which have the same effect[10] of listing the DIR command's available options, whereas dir --help (in many versions of Unix) does require the option to be preceded by at least one space (and is case-sensitive).

## Command Description Syntax

Built-in usage help and man pages commonly employ a small syntax to describe the valid command form:

- **angle brackets for required parameters**: ping <hostname>

- **square brackets for optional parameters**: mkdir [-p] <dirname>

- **ellipses for repeated items**: cp <source1> [source2…] <dest>

- **vertical bars for choice of items**: netstat {-t|-u}

> Notice that these characters have different meanings than when used directly in the shell. Angle brackets may be omitted when confusing the parameter name with a literal string is not likely.

## Reasons To Use The Command Line

- Saves time
- Can be handy when your system has issues and no GUI
- Useful in scripting repetitive tasks

## Libraries

- Libraries have two roles which illustrate abstraction.

    - Allow programmers to reuse commonly accessed code.

    - Act as a black box implementing functionality for the programmer.

- The standard library of a UNIX platform is generically referred to as `libc`. It provides the basic interface to the system: fundamental calls such as read(), write() and printf(). This API is described in its entirety by a specification called POSIX

## Command Line Syntax

- **Prompt**: The prompt shows that you've properly loaded your command line and it's ready to receive instructions.

```bash
o.s@EngrOpe1Air1877 ~ %
```

> The above shows that I am O.S and on a machine called EngrOpe1Air1877 which is a Macbook Air. The % sign represents the command line and means that you should copy everythingn after the % but not include the %. You can also see $ in some cases.

## Single Command

- Some CLI commands will include but not limited to: 

    - `ls`: will list all the files in the current directory.

    - `pwd`: means **print working directory** and is used to display your current location in the computer.

    ![showing pwd command](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674218129/Screenshot_2023-01-20_at_1.32.40_PM_mcicnk.png)
    
    - `COMMAND <ARGUMENT>`: Arguments almost always come after a command and the command always operates on the argument. A typical example can be seen with the `echo` and `cat` commands that will act on the arguments below...

        - `echo`: prints any argument to the command line output.

        ![echo command](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674218730/Screenshot_2023-01-20_at_1.45.16_PM_xzh0dv.png)

        - `cat`: prints out the "contents" of an argument to the command line output. If the file you want to read is a directory, the command line is going to output that it is a directory. If it is a file, it will display the contents of that file.
        
        ![directory example](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674219599/Screenshot_2023-01-20_at_1.59.47_PM_k1jzom.png)

        ![cat displaying content of a file](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674219665/Screenshot_2023-01-20_at_2.00.49_PM_lfe5qx.png)

    - `COMMAND -option`: options are passed after a command to alter its original behavior. A few examples are: 

    - `ls -a`: where `ls` is the list command and `-a` is an option that tells `ls` to not only display a list of all the files in the current directory but to also display those files that are hidden in that same current directory.

    - When option is used in conjunction with running a program from the command line, we call it a flag. eg `node -v` which helps a user know what version of a program they are currently using and can be usefuln in troubleshooting.

    > It's possible to run a command with five, ten or more flags

## Multiple Commands

- Multiple commands can also be run in the same terminal line by the use of operators like `&&`. Commands of this nature should naturally look like this:

![multiple commands](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674220591/Screenshot_2023-01-20_at_2.16.20_PM_rswlgh.png)

The above tells the command line to create a directory named `consensys-test-folder` and then  navigate into the directory created and create a file named `intro.text`. 

> order of the commands is extremely important -- we cannot run cd before mkdir in the example above.

## Control Flow

- The ability to redirect the input or output of a command.

- An example of this is the > operator, which redirects the output of a command as an argument to the second command. For example, we can pass the content of the echo statement which we made earlier into the `intro.txt` file and then check if it was passed in successfully with the `cat` command.

```bash
echo 'you can be a world class developer with the consensys program' > intro.txt 

cat intro.txt
```

![control flow example](https://res.cloudinary.com/resourcefulmind-inc/image/upload/v1674221392/Screenshot_2023-01-20_at_2.29.41_PM_pmlwnh.png)

- Another example is the `pipe` or `|` which does almost the same thing as `>` but with a difference of being able to do things at the same time.

```bash
ls | sort
```

- `$` is the command line prompt and `~` is stands for your home directory.

- `pwd` allows you "to find out the path of the current working directory (folder) you’re in. The command will return an absolute (full) path, which is basically a path of all the directories that starts with a forward slash (/). An example of an absolute path is /home/username."
- `cd` "allow[s] you to change directories. When you open a terminal you will be in your home directory. To move around the file system you will use `cd`.
To navigate to your home directory, use `cd` or `cd ~`;
    - To navigate up one directory level, use `cd ...`
    - To navigate through multiple levels of directory at once, specify the full directory path that you want to go to. For example, use:
    `cd /var/www` to go directly to the /www subdirectory of /var/.`

    As another example, `cd ~/Desktop` will move you to the Desktop subdirectory inside your home directory.

- `ls` "is used to view the contents of a directory. By default, this command will display the contents of your current working directory. If you want to see the content of other directories, type `ls` and then the directory’s path. For example, enter `ls /home/username/Documents` to view the content of Documents. There are variations you can use with the `ls` command:

    `ls -R` will list all the files in the sub-directories as well.

    `ls -a` will show the hidden files.

    `ls -al` will list the files and directories with detailed information like the permissions, size, owner, etc."

- `mkdir`: The `mkdir` command will allow you to create directories. Example: `mkdir music` will create a directory called "music" Remember, a common multiple command line is `mkdir NEW_DIRECTORY && cd NEW_DIRECTORY`.

- `clear` will clear all typing on the terminal and give you a fresh line.

- `CONTROL + c` will interrupt any terminal process and return you to the prompt.

- `cat` is used to list the contents of a file [...]. To run this command, type cat followed by the file’s name and its extension. For instance: `cat file.txt`.

- `cp` cop[ies] files from the current directory to a different directory. For instance, the command `cp scenery.jpg /home/username/Pictures` would create a copy of scenery.jpg (from your current directory) into the Pictures directory.

- `mv` is to [used to] move files, although it can also be used to rename files. The arguments in `mv` are similar to the `cp` command. You need to type `mv`, the file’s name, and the destination’s directory. 
For example: 
`mv file.txt /home/username/Documents`. 

To rename files, the command is `mv oldname.ext newname.ext`

- Command History to access any commands you've run, simply press the "up" arrow on the command line prompt. The terminal will scroll through the history of your commands starting from the most recent. To execute the command, simply hit enter.

8. rmdir command

If you need to delete a directory, use the rmdir command. However, rmdir only allows you to delete empty directories.

9. rm command

The rm command is used to delete directories and the contents within them. If you only want to delete the directory — as an alternative to rmdir — use rm -r.

Note: Be very careful with this command and double-check which directory you are in. This will delete everything and there is no undo.

11. locate command

You can use this command to locate a file, just like the search command in Windows. What’s more, using the -i argument along with this command will make it case-insensitive, so you can search for a file even if you don’t remember its exact name.

To search for a file that contains two or more words, use an asterisk (*). For example, locate -i school*note command will search for any file that contains the word “school” and “note”, whether it is uppercase or lowercase.

12. find command

Similar to the locate command, using find also searches for files and directories. The difference is, you use the find command to locate files within a given directory.

As an example, find /home/ -name notes.txt command will search for a file called notes.txt within the home directory and its subdirectories.

Other variations when using the find are:
To find files in the current directory use, find . -name notes.txt
To look for directories use, / -type d -name notes. txt

For more check [here](https://www.reddit.com/r/commandline/comments/myquqp/linux_basic_commands_every_user_should_know/) and [here](https://help.ubuntu.com/community/AdvancedCommandlineHowto).

## Running a File (Application) within a Directory

- To run a file, navigate to the directory holding the file and use the format: $ ./filename.extension.

- For Python files, for example, you need to make sure Python is installed and use the format $ python python-file-name.py

- For JavaScript files, you need to install Node and run with the format $ node javascriptFile.js

## System Information Commands

- **top (table of processes)** command allows you to quickly see the what programs are running on your machine and how many resources they are consuming. It's a quick alternative to the Activity Monitor in MacOS or Task Manager in Windows. To quit top, simply press q

## Networking and Internet Commands

> Note: Always be careful when downloading from the command line. The GUI provides safeguards and visual cues to keep you aware of nefarious activity, but that might not be the case with your command line. Only download from locations you trust and triple-check before running software you've downloaded.

Downloading a File to download a file from a specific internet address, you use `curl ADDRESS_OF_FILE` on MacOS and `wget ADDRESS_OF_FILE` on Linux. The file will download to the current directory you run the command in. If you need to move the file to another directory, use `mv`

- Decompressing / Unarchiving files Software may be "bundled" or compressed with tar or zip formats. Use the `tar` and `unzip` commands to decompress the files into your current directory. To learn more, type `man gunzip` or `man tar` in your terminal.

## sudo and privileges

In trying out some command line exercises, you may have been confronted with a message that looked something like this:

`You do not have sufficient privilege to perform this operation`.

> Certain important files are protected from being read or changed by the user. However, these permissions can be changed or overridden by putting sudo at the beginning of your command. You must be extremely careful about using this, though, as you can accidentally commit serious damage to your computer while operating as sudo


## $PATH

- $PATH "is an environment variable on Unix-like operating systems specifying a set of directories where executable programs are located" (source).

- $PATH is important because it allows you to run programs from your command line without specifying the directory where the program is located. For example, you can run `npm install dependencies` without specifying where `npm` is located because your computer has Node and `npm` linked on the `$PATH` variable.

**man intro**: If you type this into your MacOS or Linux prompt, it will walk you through a command line basics in your own terminal.
