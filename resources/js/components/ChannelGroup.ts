import IChannelGroup from '../interfaces/IChannelGroup';
import IChannel from '../interfaces/IChannel';
import Channel from './Channel';
import AllChannel from './AllChannel';

export default class ChannelGroup implements IChannelGroup {
    private channels: IChannel[];
    private node: HTMLDivElement;

    constructor(node: HTMLDivElement) {
        this.node = node;
        const checkboxes: NodeListOf<HTMLInputElement> = node.querySelectorAll('input[type="checkbox"]');
        this.channels = Array.from(checkboxes)
            .map((checkbox: HTMLInputElement) => {
                if (checkbox.value === '*') {
                    return new AllChannel(checkbox);
                } else {
                    return new Channel(checkbox);
                }
            });
        // Method binding
        this.getActiveChannels = this.getActiveChannels.bind(this);
        this.getChannels = this.getChannels.bind(this);
    }

    public getChannels(): IChannel[] {
        return this.channels;
    }

    public getActiveChannels(): IChannel[] {
        const activeChannels = this.channels.filter((channel: IChannel) => {
            channel.updateActiveStatus();
            return channel.active;
        });

        return activeChannels;
    }
}