/// <reference types="react" />
import { BaseExample } from "@blueprintjs/docs";
export declare class TabsExample extends BaseExample<{
    isVertical?: boolean;
}> {
    state: {
        isVertical: boolean;
    };
    private toggleIsVertical;
    protected renderExample(): JSX.Element;
    protected renderOptions(): JSX.Element[][];
}
