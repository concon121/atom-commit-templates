'use babel';
'use strict';
const fs = require('fs');
const InputDialog = require('@aki77/atom-input-dialog');
const process = require('child_process');
const ps = require('process');
const path = require('path');

const isWin = (/^win/.test(ps.platform));

module.exports = {

  activate: function () {
    const self = this;
    self.setup();
    atom.commands.add('atom-workspace', 'atom-commit-templates:Set Commit Template', self.setCommitTemplate);
    atom.commands.add('atom-workspace', 'atom-commit-templates:Clear Commit Template', self.clearCommitTemplate);
  },

  setup: function () {},

  setCommitTemplate: function () {
    var templatePath = path.join(isWin ? ps.env.HOMEPATH : ps.env.HOME, '.gitcommit');
    var dialog;
    var baseDialog = {
      callback: (text) => {
        process.exec('git config --global commit.template ' + templatePath);
        fs.writeFile(templatePath, text, (err) => {
          if (err) {
            console.log(err);
          }
        });
      },
      labelText: 'Commit Template'
    };
    fs.readFile(templatePath, (err, data) => {
      if (!err) {
        baseDialog.defaultText = data;
      }
      dialog = new InputDialog(baseDialog);
      dialog.attach();
    });
  },

  clearCommitTemplate: function () {
    var templatePath = path.join(isWin ? ps.env.HOMEPATH : ps.env.HOME, '.gitcommit');
    fs.writeFile(templatePath, '', (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
