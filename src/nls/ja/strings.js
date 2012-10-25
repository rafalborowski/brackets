/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({
    /**
     * Errors
     */

    // General file io error strings
    "GENERIC_ERROR"                     : "(エラー {0})",
    "NOT_FOUND_ERR"                     : "ファイルが見つかりません。",
    "NOT_READABLE_ERR"                  : "ファイルを読み取れません。",
    "NO_MODIFICATION_ALLOWED_ERR"       : "対象となるディレクトリは変更不可です。",
    "NO_MODIFICATION_ALLOWED_ERR_FILE"  : "ファイルを変更する権限がありません。",
    "FILE_EXISTS_ERR"                   : "ファイルは既に存在しています。",

    // Project error strings
    "ERROR_LOADING_PROJECT"             : "プロジェクトの読み込みに失敗しました。",
    "OPEN_DIALOG_ERROR"                 : "「ファイルを開く」ダイアログを表示する際にエラーが発生しました。 (エラー {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR"  : "ディレクトリを読み込む際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. (エラー {1})",
    "READ_DIRECTORY_ENTRIES_ERROR"      : "ディレクトリの内容を読み込む際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. (エラー {1})",

    // File open/save error string
    "ERROR_OPENING_FILE_TITLE"          : "ファイルを開く際にエラーが発生しました",
    "ERROR_OPENING_FILE"                : "ファイルを開く際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RELOADING_FILE_TITLE"        : "ファイルを再読込する際にエラーが発生しました。",
    "ERROR_RELOADING_FILE"              : "ファイルを再読込する際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_SAVING_FILE_TITLE"           : "ファイルを保存する際にエラーが発生しました。",
    "ERROR_SAVING_FILE"                 : "ファイルを保存する際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE"         : "ファイルの名前を変更する際にエラーが発生しました。",
    "ERROR_RENAMING_FILE"               : "ファイルの名前を変更する際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE"            : "ファイル名が不正です。",
    "INVALID_FILENAME_MESSAGE"          : "ファイル名には、次の文字を含めることはできません: /?*:;{}<>\\|",
    "FILE_ALREADY_EXISTS"               : "ファイル <span class='dialog-filename'>{0}</span> は既に存在しています。",
    "ERROR_CREATING_FILE_TITLE"         : "ファイルを作成する際にエラーが発生しました。",
    "ERROR_CREATING_FILE"               : "ファイルを作成する際にエラーが発生しました。<span class='dialog-filename'>{0}</span>. {1}",

    // Application error strings
    "ERROR_IN_BROWSER_TITLE"            : "{APP_NAME} は、まだブラウザ上で実行されていません！",
    "ERROR_IN_BROWSER"                  : "{APP_NAME} はHTMLで構築されていますが、デスクトップアプリとして実行することで、ローカルファイルを編集することができます。{APP_NAME} を実行するために、<b>github.com/adobe/brackets-shell</b> リポジトリを使用してください。",

    // FileIndexManager error string
    "ERROR_MAX_FILES_TITLE"             : "ファイルのインデックス時にエラーが発生しました。",
    "ERROR_MAX_FILES"                   : "インデックス化できるファイルの最大数に達しました。インデックス内でファイルを見つける機能は正しく動作しません。",

    // Live Development error strings
    "ERROR_LAUNCHING_BROWSER_TITLE"     : "ブラウザの起動時にエラーが発生しました。",
    "ERROR_CANT_FIND_CHROME"            : "Google Chromeブラウザが見つかりません。インストールされていることを確認してください。",
    "ERROR_LAUNCHING_BROWSER"           : "ブラウザの起動時にエラーが発生しました。 (エラー {0})",
    
    "LIVE_DEVELOPMENT_ERROR_TITLE"      : "ライブプレビュー時にエラーが発生しました。",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE"   : "ブラウザに接続しています",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE"    : "ライブプレビューに接続するには、リモートデバッグを有効にしてChromeを再起動する必要があります。<br /><br />Chromeを再起動してリモートデバッグを有効にしますか？",
    "LIVE_DEV_NEED_HTML_MESSAGE"        : "ライブプレビューを起動するには、HTMLファイルを開いてください。",
    "LIVE_DEVELOPMENT_INFO_TITLE"       : "ライブプレビューへようこそ！",
    "LIVE_DEVELOPMENT_INFO_MESSAGE"     : "ライブプレビューは {APP_NAME} をブラウザに接続します。ブラウザ内でHTMLファイルのプレビューを起動し、コードを編集するとすぐにプレビューが更新されます。<br /><br />{APP_NAME} の初期バージョンでは、ライブプレビューは<strong>Google Chrome</strong>との組み合わせで、CSSファイルの編集にしか機能しません。HTMLとJavaScriptについても、すぐに実装します！<br /><br />(このメッセージは最初の一度しか表示されません)",
    
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED" : "ライブプレビュー",
    "LIVE_DEV_STATUS_TIP_PROGRESS1"     : "ライブプレビュー: 接続中...",
    "LIVE_DEV_STATUS_TIP_PROGRESS2"     : "ライブプレビュー: 初期化中...",
    "LIVE_DEV_STATUS_TIP_CONNECTED"     : "ライブプレビューの接続を切断します",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC"   : "ライブプレビュー: クリックして切断 (ファイルを保存して更新)",
    
    "SAVE_CLOSE_TITLE"                  : "変更を保存",
    "SAVE_CLOSE_MESSAGE"                : "文書に加えた変更を保存しますか？<span class='dialog-filename'>{0}</span>?",
    "SAVE_CLOSE_MULTI_MESSAGE"          : "以下のファイルに対する変更を保存しますか？",
    "EXT_MODIFIED_TITLE"                : "外部で変更されました",
    "EXT_MODIFIED_MESSAGE"              : "<span class='dialog-filename'>{0}</span>はディスク上で変更されていますが、{APP_NAME} 内に保存されていない変更があります。<br /><br />どちらのバージョンを保持しますか？",
    "EXT_DELETED_MESSAGE"               : "<span class='dialog-filename'>{0}</span>はディスク上で削除されていますが、{APP_NAME} 内に保存されていない変更があります。<br /><br />変更を保持しますか？",
    
    // Find, Replace, Find in Files
    "SEARCH_REGEXP_INFO"                : "正規表現による検索には /re/ シンタックスを使用してください",
    "WITH"                              : "With",
    "BUTTON_YES"                        : "はい",
    "BUTTON_NO"                         : "いいえ",
    "BUTTON_STOP"                       : "停止",

    "OPEN_FILE"                         : "ファイルを開く",
    "CHOOSE_FOLDER"                     : "フォルダを選択",

    "RELEASE_NOTES"                     : "リリースノート",
    "NO_UPDATE_TITLE"                   : "最新バージョンです！",
    "NO_UPDATE_MESSAGE"                 : "あなたは {APP_NAME} の最新バージョンを実行中です。",
    
    "FIND_IN_FILES_TITLE"               : "for \"{4}\" - {0} {1} in {2} {3}",
    "FIND_IN_FILES_FILE"                : "ファイル",
    "FIND_IN_FILES_FILES"               : "ファイル",
    "FIND_IN_FILES_MATCH"               : "一致",
    "FIND_IN_FILES_MATCHES"             : "一致",
    "FIND_IN_FILES_MORE_THAN"           : "以上",
    "FIND_IN_FILES_MAX"                 : " (最初の{0}件の一致を表示しています)",
    "FIND_IN_FILES_FILE_PATH"           : "ファイル: <b>{0}</b>",
    "FIND_IN_FILES_LINE"                : "行:&nbsp;{0}",

    "ERROR_FETCHING_UPDATE_INFO_TITLE"  : "更新情報を取得する際にエラーが発生しました。",
    "ERROR_FETCHING_UPDATE_INFO_MSG"    : "サーバーから最新の更新情報を取得する際にエラーが発生しました。インターネット接続を確認してリトライしてください。",
    
    // Switch language
    "LANGUAGE_TITLE"                    : "言語を切り替える",
    "LANGUAGE_MESSAGE"                  : "以下のリストから言語を選択してください:",
    "LANGUAGE_SUBMIT"                   : "{APP_NAME} をリロードする",
    "LANGUAGE_CANCEL"                   : "キャンセル",

    /**
     * ProjectManager
     */

    "UNTITLED" : "Untitled",

    /**
     * Keyboard modifier names
     */

    "KEYBOARD_CTRL"   : "Ctrl",
    "KEYBOARD_SHIFT"  : "Shift",
    "KEYBOARD_SPACE"  : "Space",
    
    /**
     * StatusBar strings
     */
    "STATUSBAR_CURSOR_POSITION"             : "行 {0}, 列 {1}",
    "STATUSBAR_INDENT_TOOLTIP_SPACES"       : "インデントをスペースに変換する",
    "STATUSBAR_INDENT_TOOLTIP_TABS"         : "インデントをタブに変換する",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES"  : "インデントに用いるスペースの数を変更",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS"    : "タブ幅を変更",
    "STATUSBAR_SPACES"                      : "スペース",
    "STATUSBAR_TAB_SIZE"                    : "タブ幅",
    "STATUSBAR_LINE_COUNT"                  : "{0} 行",

    /**
     * Command Name Constants
     */

    // File menu commands
    "FILE_MENU"                           : "ファイル",
    "CMD_FILE_NEW"                        : "新しいファイル",
    "CMD_FILE_NEW_FOLDER"                 : "新しいフォルダ",
    "CMD_FILE_OPEN"                       : "開く\u2026",
    "CMD_ADD_TO_WORKING_SET"              : "ワーキングセットに追加する",
    "CMD_OPEN_FOLDER"                     : "フォルダを開く\u2026",
    "CMD_FILE_CLOSE"                      : "閉じる",
    "CMD_FILE_CLOSE_ALL"                  : "すべて閉じる",
    "CMD_FILE_SAVE"                       : "保存",
    "CMD_FILE_SAVE_ALL"                   : "全て保存",
    "CMD_LIVE_FILE_PREVIEW"               : "ライブプレビュー",
    "CMD_FILE_RENAME"                     : "ファイル名変更",
    "CMD_QUIT"                            : "終了する",

    // Edit menu commands
    "EDIT_MENU"                           : "編集",
    "CMD_SELECT_ALL"                      : "全て選択",
    "CMD_FIND"                            : "検索",
    "CMD_FIND_IN_FILES"                   : "ファイルを横断して検索",
    "CMD_FIND_NEXT"                       : "次を検索",
    "CMD_FIND_PREVIOUS"                   : "前を検索",
    "CMD_REPLACE"                         : "置換",
    "CMD_INDENT"                          : "インデント",
    "CMD_UNINDENT"                        : "インデント解除",
    "CMD_DUPLICATE"                       : "行を複製",
    "CMD_DELETE_LINES"                    : "行を削除",
    "CMD_COMMENT"                         : "行をコメント/コメント解除",
    "CMD_LINE_UP"                         : "行を上に移動",
    "CMD_LINE_DOWN"                       : "行を下に移動",
     
    // View menu commands
    "VIEW_MENU"                           : "表示",
    "CMD_HIDE_SIDEBAR"                    : "サイドバーを隠す",
    "CMD_SHOW_SIDEBAR"                    : "サイドバーを表示する",
    "CMD_INCREASE_FONT_SIZE"              : "フォントサイズを大きく",
    "CMD_DECREASE_FONT_SIZE"              : "フォントサイズを小さく",
    "CMD_RESTORE_FONT_SIZE"               : "フォントサイズを元に戻す",

    // Navigate menu Commands
    "NAVIGATE_MENU"                       : "ナビゲート",
    "CMD_QUICK_OPEN"                      : "クイックオープン",
    "CMD_GOTO_LINE"                       : "行に移動",
    "CMD_GOTO_DEFINITION"                 : "定義に移動",
    "CMD_TOGGLE_QUICK_EDIT"               : "クイック編集",
    "CMD_QUICK_EDIT_PREV_MATCH"           : "前の一致部分に移動",
    "CMD_QUICK_EDIT_NEXT_MATCH"           : "次の一致部分に移動",
    "CMD_NEXT_DOC"                        : "次の文書",
    "CMD_PREV_DOC"                        : "前の文書",
    "CMD_SHOW_IN_TREE"                    : "ファイルツリー内で表示",
    
    // Debug menu commands
    "DEBUG_MENU"                          : "デバッグ",
    "CMD_REFRESH_WINDOW"                  : "{APP_NAME} をリロード",
    "CMD_SHOW_DEV_TOOLS"                  : "開発者ツールを表示",
    "CMD_RUN_UNIT_TESTS"                  : "テストを実行",
    "CMD_JSLINT"                          : "JSLintを有効にする",
    "CMD_SHOW_PERF_DATA"                  : "パフォーマンスデータを表示",
    "CMD_NEW_BRACKETS_WINDOW"             : "新しい {APP_NAME} ウィンドウ",
    "CMD_SHOW_EXTENSIONS_FOLDER"          : "拡張機能のフォルダを開く",
    "CMD_USE_TAB_CHARS"                   : "タブ文字を使用する",
    "CMD_SWITCH_LANGUAGE"                 : "言語を切り替える",
    "CMD_CHECK_FOR_UPDATE"                : "更新をチェックする",

    // Help menu commands
    "HELP_MENU"                           : "ヘルプ",
    "CMD_ABOUT"                           : "{APP_TITLE} について",
    "CMD_FORUM"                           : "{APP_NAME} フォーラム",

    // Special commands invoked by the native shell
    "CMD_CLOSE_WINDOW"                    : "ウィンドウを閉じる",
    "CMD_ABORT_QUIT"                      : "強制終了する",

    // Strings for main-view.html
    "EXPERIMENTAL_BUILD"                   : "実験的なビルド",
    "JSLINT_ERRORS"                        : "JSLintエラー",
    "JSLINT_ERROR_INFORMATION"             : "1個のJSLintエラーがあります",
    "JSLINT_ERRORS_INFORMATION"            : "{0}個JSLintエラーがあります",
    "JSLINT_NO_ERRORS"                     : "JSLintエラーはありません - すばらしい！",
    "JSLINT_DISABLED"                      : "JSLintは無効か、現在のファイルには実行されません",
    "SEARCH_RESULTS"                       : "検索結果",
    "OK"                                   : "OK",
    "DONT_SAVE"                            : "保存しない",
    "SAVE"                                 : "保存",
    "CANCEL"                               : "キャンセル",
    "RELOAD_FROM_DISK"                     : "ディスクから再読込",
    "KEEP_CHANGES_IN_EDITOR"               : "エディタ内の変更を保持する",
    "CLOSE_DONT_SAVE"                      : "保存せずに閉じる",
    "RELAUNCH_CHROME"                      : "Chromeを再起動",
    "ABOUT"                                : "About",
    "APP_NAME"                             : "Brackets",
    "CLOSE"                                : "閉じる",
    "ABOUT_TEXT_LINE1"                     : "sprint {VERSION_MINOR} experimental build {VERSION}",
    "ABOUT_TEXT_LINE3"                     : "Notices, terms and conditions pertaining to third party software are located at <a class=\"clickable-link\" data-href=\"http://www.adobe.com/go/thirdparty/\">http://www.adobe.com/go/thirdparty/</a> and incorporated by reference herein.",
    "ABOUT_TEXT_LINE4"                     : "Documentation and source at <a class=\"clickable-link\" data-href=\"https://github.com/adobe/brackets/\">https://github.com/adobe/brackets/</a>",
    "UPDATE_NOTIFICATION_TOOLTIP"          : "{APP_NAME} の新しいビルドが利用できます！詳細はここをクリックしてください。",
    "UPDATE_AVAILABLE_TITLE"               : "更新が利用できます",
    "UPDATE_MESSAGE"                       : "{APP_NAME} の新しいビルドが利用できます。いくつかの新機能を含みます:",
    "GET_IT_NOW"                           : "すぐに入手する！"
});
