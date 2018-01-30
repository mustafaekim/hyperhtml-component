import { ComponentFactory } from "./component-factory.js";

import OptionComponent from "./option.component.js"

function QuestionComponentBuilder(props, output) {

    var self = this;

    function setTitle(val) {
        props.title = val;
    }

    function getTitle() {
        return props.title;
    }

    function getOptions() {
        return props.options;
    }

    function deleteOption(option) {
        let index = props.options.indexOf(option);
        if (index != -1)
            props.options.splice(index, 1);
        self.notify();
    }

    function addOption(event) {
        var input = document.getElementById(self.id + "-input1");
        props.options.push({ title: input.value });
        input.value = "";
        self.notify();
    }

    function render() {
        return self.template`
            <div id="${self.id}">
                <div style="font-size:larger; margin-bottom:15px;">Question: ${props.title}</div>
                <div style="font-style:italic; margin:10px 0px;">Options:</div>
                <div>
                        ${props.options.map(function (option) {
                        return OptionComponent(option, option);
                    })}
                </div>
                <div style="margin-top:30px;">
                <input id=${self.id + "-input1"} type="text"/><button type="button" onclick=${addOption}>Add Option</input>
                </div>
            </div>
        `
    }

    return {
        setTitle, deleteOption, getTitle, render
    }
}

var QuestionComponent = ComponentFactory(QuestionComponentBuilder, "show-question");

export default QuestionComponent;