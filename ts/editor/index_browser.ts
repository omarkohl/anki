// Copyright: Ankitects Pty Ltd and contributors
// License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html
import BrowserEditor from "./BrowserEditor.svelte";
import { editorModules } from "./base";
import { promiseWithResolver } from "../lib/promise";
import { globalExport } from "../lib/globals";
import { setupI18n } from "../lib/i18n";

const [uiPromise, uiResolve] = promiseWithResolver();

async function setupBrowserEditor(): Promise<void> {
    await setupI18n({ modules: editorModules });

    new BrowserEditor({
        target: document.body,
        props: { uiResolve },
    });
}

setupBrowserEditor();

import * as base from "./base";

globalExport({
    ...base,
    uiPromise,
    noteEditorPromise: uiPromise,
});