import IChannel from "../interfaces/IChannel";

export default class Channel implements IChannel {
    protected checkbox: HTMLInputElement;
    public name: string;
    public label: string;
    public uid: string;
    public active: boolean;

    constructor(node: HTMLInputElement) {
        this.checkbox = node;
        this.active = node.checked;

        const uidMatch = node.value.match(/section:(.*)/);
        
        if (uidMatch && uidMatch.length) {
            this.uid = uidMatch[1];
        }

        this.name = node.value;
        const label: HTMLLabelElement = document.querySelector(`label[for="${this.checkbox.id}"]`);
        
        if (label) {
            this.label = label.innerText;
        }

        // Method binding
        this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
        this.updateActiveStatus = this.updateActiveStatus.bind(this);

        this.checkbox.addEventListener('change', this.checkboxChangeHandler);
    }

    public updateActiveStatus() {
        this.active = this.checkbox.checked;
    }

    public checkboxChangeHandler(changeEvent: Event): boolean {
        const target: HTMLInputElement = changeEvent.target as HTMLInputElement;
        this.active = target.checked;

        const event = new CustomEvent('channelChange', {
            detail: {
                sectionUid: this.uid,
                active: this.active,
                all: false
            },
            bubbles: true
        });

        return this.checkbox.dispatchEvent(event);
    }
}