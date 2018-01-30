import { ComponentFactory } from "./component-factory.js";
import { wire } from "hyperhtml/esm";

function OptionComponentBuilder(props, output) {
    console.log("building")

    var likes = 0;
    var self = this;
    var edit = false;

    function increment() {
        likes++;
        self.notify();
        console.log("Likes incremented to " + likes);
    }

    function toggleEdit() {
        edit = !edit;
        self.notify();
    };

    function updateTitle(event){
        props.title = event.target.value
        self.notify();
        toggleEdit();
    }

    function mode() {
        if (edit) {
            return wire() `
                <input type="text" value=${props.title} onblur="${updateTitle}" />
            `
        }
        else {
            return wire() `
                <span style="display:inline-block; min-width:200px">${props.title}</span>
            `
        }
    }

    function render() {
        return self.template`
            <div style="font-size:larger">
                ${mode()}
                <button type="button" onclick="${increment}">Like (${likes})</button>
                <button type="button" onclick=${toggleEdit}>Edit</button>

            </div>
        `
    }

    return {
        render
    }

}
var OptionComponent = ComponentFactory(OptionComponentBuilder, "show-option");

export default OptionComponent;