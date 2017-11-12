module.exports = (function() {
  var Hogan = require('hogan.js');
  var templates = {};
  templates['faq'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b('<a name="top"></a>\r');
      t.b('\n' + i);
      t.b('<ul>\r');
      t.b('\n' + i);
      t.b(
        '<li><a href="#longerThan2Mins">The copying has been paused longer than 2 minutes and it isn\'t complete.  What do I do?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#copyBetweenDomains">Can I use this app to copy a folder between domains?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#whenIsItDone">How do I know when it is done?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#notEverythingCopied">It didn\'t copy everything - what do I do?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#multipleAccounts">How do I sign into a different account with this app?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#infiniteLoop">HELP! The copying is stuck in an infinite loop!  What do I do?</a></li>\r'
      );
      t.b('\n' + i);
      t.b(
        '<li><a href="#openissue">How do I report a bug in the app?</a></li>\r'
      );
      t.b('\n' + i);
      t.b('</ul>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="longerThan2Mins"></a>The copying has been paused longer than 2 minutes and it isn\'t complete.  What do I do?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        '    When the app stops, you can use the "Resume" button to restart the copying.  When selecting the folder to resume, you must select the <b>in-progress</b> folder, <b>not</b> the original.<br><br>\r'
      );
      t.b('\n' + i);
      t.b(
        '    For example, if you are creating a copy of "Folder A" called "Copy of Folder A", you should select "Copy of Folder A" when you resume the copying.  Selecting the original folder will return an error.\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="copyBetweenDomains"></a>Can I use this app to copy a folder between domains?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b('    Yes!  Follow the steps below:\r');
      t.b('\n' + i);
      t.b('    <ol>\r');
      t.b('\n' + i);
      t.b(
        '        <li>Log into the account that owns the folder ("Account 1")</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Share the folder with the domain to which you\'d like to copy ("Account 2")</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Open an private/incognito window and log into Account 2</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Go to the "Shared with me" section, right click the folder, and select "Add to Drive"</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Open the app, and select the folder that has been shared</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Create a copy and Account 2 will now be the owner</li>\r'
      );
      t.b('\n' + i);
      t.b('    </ol>\r');
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="whenIsItDone"></a>How do I know when it is done?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        '    You will know it is complete when the Copy Log says "Complete" in cell C2.  In addition, the cell will highlight green.\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="notEverythingCopied"></a>It didn\'t copy everything - what do I do?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        '    Typically this is due to server errors encountered while copying.  You should be able to do one of the following to resolve this situation:\r'
      );
      t.b('\n' + i);
      t.b('    <ol>\r');
      t.b('\n' + i);
      t.b(
        '        <li>Audit the Copy Log for any errors, and manually copy those files</li>\r'
      );
      t.b('\n' + i);
      t.b(
        '        <li>Restart the copy process.  Typically, it is best if you wait a few hours if you ran into significant copying errors</li>\r'
      );
      t.b('\n' + i);
      t.b('    </ol>\r');
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="multipleAccounts"></a>How do I sign into a different account with this app?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        "    There isn't a handy Account Switcher like you'll find in native Google Apps.*  However, you can try to use the link at the top of the page which should re-direct you and allow you to sign if from a different account.<br><br>\r"
      );
      t.b('\n' + i);
      t.b(
        '    If that fails, I would recommend signing in from another browser, or opening an incognito/private window and accessing the app that way.\r'
      );
      t.b('\n' + i);
      t.b('    \r');
      t.b('\n' + i);
      t.b(
        '    <br><br>*If you think this is a good feature, please feel free to <a href="https://github.com/ericyd/gdrive-copy/issues" target="_blank">open an issue on Github</a>, or better yet, contribute to the repo! \'Cuz I don\'t know how to add an Account Switcher, otherwise I would have done it already :)\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="infiniteLoop"></a>HELP! The copying is stuck in an infinite loop!  What do I do?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        '    Please use the "Pause" function built into the app and <a href="https://github.com/ericyd/gdrive-copy/issues" target="_blank">report the bug</a>\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b(
        '<h4><a name="openissue"></a>How do I report a bug in the app?</h4>\r'
      );
      t.b('\n' + i);
      t.b('<div className="description">\r');
      t.b('\n' + i);
      t.b(
        '    If you have found a bug that is not covered in these FAQs, please <a href="https://github.com/ericyd/gdrive-copy/issues" target="_blank">open an issue on Github</a>.\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('<a href="#top">Top</a>');
      return t.fl();
    },
    partials: {},
    subs: {}
  });
  templates['pause'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b("<div id='confirm-stop-message'>\r");
      t.b('\n' + i);
      if (t.s(t.f('confirmed', c, p, 1), c, p, 0, 51, 158, '{{ }}')) {
        t.rs(c, p, function(c, p, t) {
          t.b(
            '    <h3>You have stopped all folder copies.  To restart them, please use the "Resume" feature.</h3>\r'
          );
          t.b('\n' + i);
        });
        c.pop();
      }
      t.b('    \r');
      t.b('\n' + i);
      if (!t.s(t.f('confirmed', c, p, 1), c, p, 1, 0, 0, '')) {
        t.b(
          '    <h3>Are you sure you want to stop the instances of copy folder that you have running?</h3>\r'
        );
        t.b('\n' + i);
        t.b(
          '    <button type="button" className="btn btn--small" id="stop-confirm-button">Yes, I want to stop all my current instances of Copy Folder</button><br><br>\r'
        );
        t.b('\n' + i);
      }
      t.b('</div>');
      return t.fl();
    },
    partials: {},
    subs: {}
  });
  templates['resume'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b('<div id="resume-description" className="description">\r');
      t.b('\n' + i);
      t.b(
        '    Sometimes this app will get stuck (sorry!).  To resume a folder copy that is in-progress, but paused for whatever reason, simply\r'
      );
      t.b('\n' + i);
      t.b(
        '    select the <b><i>new, incomplete copy</i></b> of the folder and select "Resume copying".\r'
      );
      t.b('\n' + i);
      t.b('</div>  \r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('<div id="resume-form-div" className="form-div">\r');
      t.b('\n' + i);
      t.b(
        '    <form id="resumeForm" name="resumeForm"  className="form-horizontal">\r'
      );
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        <!--Select Folder-->\r');
      t.b('\n' + i);
      t.b('        Select the folder copy that is in progress\r');
      t.b('\n' + i);
      t.b('        <!--Elements to select folder-->\r');
      t.b('\n' + i);
      t.b('        <div className="folderSelect">\r');
      t.b('\n' + i);
      t.b('            <!--Button to activate Google Picker-->\r');
      t.b('\n' + i);
      t.b(
        '            <button type="button" id="resumeFolderSelect" className="btn btn--small selectFolderButton">Select Folder</button>\r'
      );
      t.b('\n' + i);
      t.b('            or\r');
      t.b('\n' + i);
      t.b('            <!--Textbox for pasting folder URL-->\r');
      t.b('\n' + i);
      t.b(
        '            <label htmlFor="resumeTextbox" className="textfield">\r'
      );
      t.b('\n' + i);
      t.b('                <input type="text" id="resumeTextbox">\r');
      t.b('\n' + i);
      t.b(
        '                <span className="textfield__label">Paste folder URL (Ctrl-V)</span>\r'
      );
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('            \r');
      t.b('\n' + i);
      t.b('            \r');
      t.b('\n' + i);
      t.b('        <div className="folderLookup">\r');
      t.b('\n' + i);
      t.b(
        '            Finding folder...<span className="rotate-contents"><i className="spinner"></i></span>\r'
      );
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('                     \r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <div className="getFolderErrors"></div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Display when folder is selected-->\r');
      t.b('\n' + i);
      t.b('        <div className="selectedFolderInfo">\r');
      t.b('\n' + i);
      t.b('            <span className="folderName"></span> &nbsp;&nbsp;\r');
      t.b('\n' + i);
      t.b(
        '            <button type="reset" className="btn  btn--small selectOtherFolder">Select other folder</button>\r'
      );
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('         \r');
      t.b('\n' + i);
      t.b('        <br />\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Submit-->\r');
      t.b('\n' + i);
      t.b(
        '        <button type="submit" id="resumeFolderSubmit" data-loading-text="Resuming..." className="btn">Resume copying</button>\r'
      );
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('    </form>\r');
      t.b('\n' + i);
      t.b('</div>');
      return t.fl();
    },
    partials: {},
    subs: {}
  });
  templates['start'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b('<!--Form-->\r');
      t.b('\n' + i);
      t.b('<div id="description" className="description">\r');
      t.b('\n' + i);
      t.b(
        '    To get started, simply select your folder and choose a new name, then select Copy Folder!<br />\r'
      );
      t.b('\n' + i);
      t.b(
        '    If the folder copy get\'s stuck, simply use the "Resume prior folder copy" button, then select the copy of your folder.<br />\r'
      );
      t.b('\n' + i);
      t.b('</div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('<div id="formDiv" className="form-div">\r');
      t.b('\n' + i);
      t.b('    <form id="folderForm" name="folderForm">\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Select Folder-->\r');
      t.b('\n' + i);
      t.b('        Folder to copy\r');
      t.b('\n' + i);
      t.b('        <!--Elements to select folder-->\r');
      t.b('\n' + i);
      t.b('        <div className="folderSelect">\r');
      t.b('\n' + i);
      t.b(
        '            <button type="button" id="selectFolderButton" className="btn btn--small selectFolderButton">Select Folder</button>\r'
      );
      t.b('\n' + i);
      t.b('            or\r');
      t.b('\n' + i);
      t.b('            <label htmlFor="newFolder" className="textfield">\r');
      t.b('\n' + i);
      t.b(
        '                <input type="text" id="folderTextbox" name="newFolder">\r'
      );
      t.b('\n' + i);
      t.b(
        '                <span className="textfield__label">Paste folder URL (Ctrl-V)</span>\r'
      );
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <div className="getFolderErrors"></div>\r');
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        <div className="folderLookup">\r');
      t.b('\n' + i);
      t.b(
        '            Finding folder...<span className="rotate-contents"><i className="spinner"></i></span>\r'
      );
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Display when folder is selected-->\r');
      t.b('\n' + i);
      t.b('        <div className="selectedFolderInfo">\r');
      t.b('\n' + i);
      t.b('            <span className="folderName"></span> &nbsp;&nbsp;\r');
      t.b('\n' + i);
      t.b(
        '            <button type="reset" className="btn  btn--small selectOtherFolder">Select other folder</button>\r'
      );
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        <br />\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--New folder name-->\r');
      t.b('\n' + i);
      t.b('        <label className="textfield" htmlFor="newFolder">\r');
      t.b('\n' + i);
      t.b(
        '            <input type="text" id="newFolder" name="newFolder" />\r'
      );
      t.b('\n' + i);
      t.b(
        '            <span className="textfield__label">New folder name</span>\r'
      );
      t.b('\n' + i);
      t.b('        </label>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Copy permissions?-->\r');
      t.b('\n' + i);
      t.b('        Copy sharing permissions\r');
      t.b('\n' + i);
      t.b('        <!--Question mark button-->\r');
      t.b('\n' + i);
      t.b(
        '        <span tabindex="10" className="tooltip-toggle" data-tooltip="Select this box if you want the documents in the folder copy to be editable/viewable by the same people as the originals. Owners of originals will become editors of the copies. Copying takes much longer if \'Yes\' is selected.">\r'
      );
      t.b('\n' + i);
      t.b(t.rp('<question0', c, p, '            '));
      t.b('        </span> \r');
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        \r');
      t.b('\n' + i);
      t.b('        <div className="form-group" id="permissions-group">\r');
      t.b('\n' + i);
      t.b('            <label className="radio">\r');
      t.b('\n' + i);
      t.b(
        '                <input type="radio" name="permissions" value="no" checked/>\r'
      );
      t.b('\n' + i);
      t.b('                <span className="radio__label">No</span>\r');
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('            <label className="radio">\r');
      t.b('\n' + i);
      t.b(
        '                <input type="radio" name="permissions" value="yes" />\r'
      );
      t.b('\n' + i);
      t.b('                <span className="radio__label">Yes</span>\r');
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Copy to-->\r');
      t.b('\n' + i);
      t.b('        Copy folder to\r');
      t.b('\n' + i);
      t.b('        <div className="form-group" id="destination-group">\r');
      t.b('\n' + i);
      t.b('            <label className="radio">\r');
      t.b('\n' + i);
      t.b(
        '                <input type="radio" name="copyLocationOptions" value="same" checked/>\r'
      );
      t.b('\n' + i);
      t.b(
        '                <span className="radio__label">Same as source folder</span>\r'
      );
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('            <label className="radio">\r');
      t.b('\n' + i);
      t.b(
        '                <input type="radio" name="copyLocationOptions" value="root" />\r'
      );
      t.b('\n' + i);
      t.b(
        '                <span className="radio__label">Root directory (i.e. at the top of "My Drive")</span>\r'
      );
      t.b('\n' + i);
      t.b('            </label>\r');
      t.b('\n' + i);
      t.b('        </div>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('        <!--Submit-->\r');
      t.b('\n' + i);
      t.b(
        '        <button type="submit" id="copyFolderButton" data-loading-text="Copying..." className="btn">Copy folder</button>\r'
      );
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('    </form>\r');
      t.b('\n' + i);
      t.b('\r');
      t.b('\n' + i);
      t.b('</div>   ');
      return t.fl();
    },
    partials: { '<question0': { name: 'question', partials: {}, subs: {} } },
    subs: {}
  });
  templates['header-icon'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b(
        '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:osb="http://www.openswatchbook.org/uri/2009/osb" height="36" width="36" version="1.1" xmlns:cc="http://creativecommons.org/ns#" viewBox="0 0 36 36.000001" xmlns:dc="http://purl.org/dc/elements/1.1/"><g><path d="m5.7599 1.1996-2.1822 1.8964h-3.0438v25.218h6.7741v-18.937h3.0418l2.1822-1.8943h8.0122l1.9588 1.8943h5.9467v-6.2809h-12.719l-1.9588-1.8964h-8.0122z" fill-rule="evenodd" stroke="#000" stroke-width=".25"/></g><g><path style="color-rendering:auto;text-decoration-color:#000000;color:#000000;isolation:auto;mix-blend-mode:normal;shape-rendering:auto;solid-color:#000000;block-progression:tb;text-decoration-line:none;text-decoration-style:solid;image-rendering:auto;white-space:normal;text-indent:0;text-transform:none" d="m12.093 7.0608-2.168 1.8828h-3.0234v11.053h-3.1009v1h3.1009v13.008h27.74v-25.061h-12.639l-1.9473-1.8828z" fill-rule="evenodd" stroke="#000" stroke-width=".5" fill="#fff"/></g><g stroke-linejoin="bevel" stroke="#000" stroke-width=".5" fill="none"><path d="m19.933 25.519 8.0838-5.023-8.0732-4.8707"/><path d="m27.994 20.496h-20.844"/></g></svg>'
      );
      return t.fl();
    },
    partials: {},
    subs: {}
  });
  templates['question'] = new Hogan.Template({
    code: function(c, p, i) {
      var t = this;
      t.b((i = i || ''));
      t.b('<!--from http://iconmonstr.com/help-3/-->\r');
      t.b('\n' + i);
      t.b(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"/></svg>'
      );
      return t.fl();
    },
    partials: {},
    subs: {}
  });
  return templates;
})();
