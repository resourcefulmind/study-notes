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