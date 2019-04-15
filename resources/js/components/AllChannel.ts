import IChannel from "../interfaces/IChannel";
import Channel from './Channel';

export default class AllChannel extends Channel implements IChannel {
    constructor(node: HTMLInputElement) {
        super(node);
    }

    public checkboxChangeHandler(changeEvent: Event): boolean {
        const target: HTMLInputElement = changeEvent.target as HTMLInputElement;
        this.active = target.checked;

        const event = new CustomEvent('channelChange', {
            detail: {
                sectionUid: this.uid,
                active: this.active,
                all: true
            },
            bubbles: true
        });

        return this.checkbox.dispatchEvent(event);
    }
}