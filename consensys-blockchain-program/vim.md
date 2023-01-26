# Basic Vim Movements

* :help to open Vim’s help. Arguably the most useful command. This help is insanely complete. If you don’t remember how to quit Vim for example, you can type :help quit.

* :q to quit the current window. If there is only one window (it’s the default), you’ll finally quit Vim.

* :q! to quit without saving. Imagine that you yell at your editor you want to quit, whatever the consequences!

* :w to write (save the current file open).
* You can even combine some ex command: :wq to write and quit. Or just use :x.

* :e <path> to edit a file. The path can be absolute or relative.

j - up
k - down
h - left
l - right
w - forwards by word
b - backwards by word
dd - to delete 
yy - to yank or cut
p - paste
shift + v = highlight 
i - insert
esc/ ctrl + c / ctrl + open bracket

## Searching In Vim

* To search in the current file, you just need to type / in normal mode. Then, you need to type your search pattern, press enter, and the result becomes highlighted in your file.

* To go backward and forward through the results, you can type n and N (for next) respectively.

* Using / will search forward in the file. If you need to directly search backward, you can use ? instead.

* If you want to search again using the previous search pattern, // is your friend.

## Insert Mode

* i - insert content before the current character.
* a - insert content after the current character.
* A - insert content After everything. It will move your cursor to the end of the line and enter INSERT mode.
* o - open a new line, below the current one, and allow you to insert your content.
* O - Open a new line above the current one.
* esc or CTRL-c or CTRL-[ - bring you back to NORMAL mode if you are in INSERT mode.

## Vim Motion Commands

### Use this instead of the arrow keys

* h moves your cursor to the left, and l moves it to the right. It makes sens, since h is on the left of the sequence hjkl, and l is on the right.
* j moves your cursor down. You can remember it since j looks like an arrow which points down (with a bit of imagination). Another mnemonic method: the key j has a little bump at the bottom of the key, which means the cursor will go down.
* k is the only letter left, so it has to go up. I always imagine a Ninja Turtle jumping up, saying “Kowabunga”! It’s not even the good spelling (it would be “Cowabunga”) but it works for me. Please, don’t judge me.

### Moving Horizontally

* w - move forward to the next word. A word - by default - is a sequence containing letters, digits, or underscores.
* b - move back your cursor to the previous word
* 0 - move to the beginning of the current line.
* ˆ - move to the first non-blank character on the current line.
* $ - move to the end of the current line.
* % - move to the matching bracket when the cursor is already on a bracket.

You can as well move on a specific character on your line using:

* f<character> - find a character after your cursor.
* F<character> - find a character before your cursor.
* t<character> - move to a character after your cursor.
* T<character> - move to a character before your cursor.

- After using one of the last four keystrokes, you can move on the character you’ve chosen with ; to go forward, and , to go backward. A very powerful way to move horizontally!

### Moving Vertically

You can move vertically simply by searching the word you want to move on (see above to learn how to search). There are other ways to move vertically:

* <line_number>G - move your cursor to the beginning of an arbitrary line. For example, 10G will move the cursor on line 10.
* G - move your cursor to the last line of your file.
* 1G or gg - move your cursor to the first line of your file.

You can as well use different keystrokes to scroll. Here are the very basics:

* CTRL-e - scroll the window downwards.
* CTRL-u - move your cursor upward half a screen.
* CTRL-d - move your cursordownward half a screen.