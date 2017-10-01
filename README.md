# atom-commit-templates

[![Build Status](https://api.travis-ci.org/concon121/atom-commit-templates.png)](https://api.travis-ci.org/concon121/atom-commit-templates)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d9426cb0602646f5a12dccb26a044c4e)](https://www.codacy.com/app/connor-bray/atom-commit-templates?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=concon121/atom-commit-templates&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/concon121/atom-commit-templates/badges/gpa.svg)](https://codeclimate.com/github/concon121/atom-commit-templates)
[![Issue Count](https://codeclimate.com/github/concon121/atom-commit-templates/badges/issue_count.svg)](https://codeclimate.com/github/concon121/atom-commit-templates)
[![Downloads](https://img.shields.io/apm/dm/atom-commit-templates.svg?maxAge=2592000)](https://atom.io/packages/atom-commit-templates)

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

#### Input Dialog
![atom-commit-template](https://user-images.githubusercontent.com/12021575/30941905-a8f31262-a3df-11e7-86e5-772338acb340.jpg)

#### Commit Message Automatically Populated
![commit-message](https://user-images.githubusercontent.com/12021575/30941982-10b29774-a3e0-11e7-89eb-e0f36498a4f7.png)

## Clearing the Commit Template

Removes the current commit template. 

#### Keyboard Shortcuts

- ```ctrl-shift-alt-c``` on Windows and Linux
- ```cmd-shift-alt-c``` on OSX
- ```Atom Commit Templates: Clear Commit Template``` from the command palette


## Goes well with

- [Git Plus](https://atom.io/packages/git-plus) - Git commands without the terminal!
- [Git Control](https://atom.io/packages/git-control) - A git GUI directly in Atom

## Kudos

Kudos to the following, for making my life easier!

- [atom-input-dialog](https://github.com/aki77/atom-input-dialog)
