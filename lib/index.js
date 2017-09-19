'use babel';
'use strict';
const fs = require('fs');
const $ = require('jquery');
const InputDialog = require('@aki77/atom-input-dialog')
const process = require('child_process')
const ps = require('process')
const path = require('path')

const isWin = (/^win/.test(process.platform));

module.exports = {

  config: {
    classpathFileName: {
      type: 'string',
      default: '.classpath'
    }
  },

  activate: function () {
    const self = this;
    self.setup();
    atom.commands.add('atom-workspace', 'atom-commit-templates:Set Commit Template', self.setCommitTemplate);
  },

  setup: function () {
    var self = this;
  },

  setCommitTemplate: function() {
    var dialog = new InputDialog({
      callback: (text) => {
        process.exec('git config --global commit.template ~/.gitcommit')
        fs.writeFile(path.join(isWin? ps.env.HOMEPATH : ps.env.HOME, '.gitcommit'), text, (err) => {
          if (err) {
            console.log(err)
          }
        })
      },
      labelText: 'Commit Template'
    })
    dialog.attach()
  }
};
