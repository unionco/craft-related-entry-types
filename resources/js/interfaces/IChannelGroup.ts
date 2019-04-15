import IChannel from './IChannel';

export default interface IChannelGroup {
    getChannels(): IChannel[];
    getActiveChannels(): IChannel[];
}