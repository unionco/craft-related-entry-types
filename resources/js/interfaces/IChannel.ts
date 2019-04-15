export default interface IChannel {
    name: string;
    uid: string;
    label: string;
    active: boolean;

    updateActiveStatus(): void;
}