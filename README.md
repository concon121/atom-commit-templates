# atom-commit-templates
Easily set custom commit templates from the Atom UI

## Setting a Git Commit Template

To enable your git commit template to take effect, this package writes to a ```.gitcommit``` file in your home directory, and updates your git configuration to use this file as a commit template e.g.

```
git config --global commit.template ~/.gitcommit
```

#### Keyboard Shortcuts

- ```ctrl-shift-alt-t``` on Windows and Linux
- ```cmd-shift-alt-t``` on OSX
- ```Atom Commit Templates: Set Commit Template``` from the command palette

## Goes well with

- [Git Plus](https://atom.io/packages/git-plus) - Git commands without the terminal!
- [Git Control](https://atom.io/packages/git-control) - A git GUI directly in Atom

## Kudos

Kudos to the following, for making my life easier!

- [atom-input-dialog](https://github.com/aki77/atom-input-dialog)
