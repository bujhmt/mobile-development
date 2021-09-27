export interface ButtonListItem {
    text: string;
    handler: (value: string) => void | Promise<void>;
}
