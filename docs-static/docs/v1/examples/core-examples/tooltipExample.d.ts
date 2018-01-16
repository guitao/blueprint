/// <reference types="react" />
import { BaseExample } from "@blueprintjs/docs";
export declare class TooltipExample extends BaseExample<{
    isOpen: boolean;
}> {
    state: {
        isOpen: boolean;
    };
    protected renderExample(): JSX.Element;
    private toggleControlledTooltip;
}
