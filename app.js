import { wire, bind } from "hyperhtml/esm";

import { notifier } from "./lib/component-factory.js";
import QuestionComponent from "./lib/question.component.js";


var root = document.getElementById("root");
var app = bind(root);

var question = {
    title: "How are you?"
    , options: [
        { title: "good" }, { title: "so so" }
    ]


}


function renderUI() {
    app`
        <div style="background:#eee; border: 1px solid black; margin:20px; padding:10px; font-size:x-large">Hello HyperHTML</div>
        <div style="background:#eee; border: 1px solid black; margin:20px; padding:10px;">${QuestionComponent(question, question)}</div>
    `
}
notifier.subscribe(renderUI);
renderUI();


