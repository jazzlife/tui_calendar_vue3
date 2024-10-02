export declare const TuiCalendar: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    view: {
        type: StringConstructor;
        required: true;
    };
    useFormPopup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    useDetailPopup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    isReadOnly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    usageStatistics: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gridSelection: {
        type: (BooleanConstructor | ObjectConstructor)[];
        required: false;
        default: boolean;
    };
    week: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    month: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    timezone: {
        type: ObjectConstructor;
        required: true;
        default: () => {
            zones: {
                timezoneName: string;
                displayLabel: string;
                tooltip: string;
            }[];
        };
    };
    theme: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    template: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    calendars: {
        type: ArrayConstructor;
        required: true;
    };
    events: {
        type: ArrayConstructor;
        required: true;
    };
    eventFilter: {
        type: FunctionConstructor;
        required: false;
        default: () => () => never[];
    };
}>, {
    Calendar: import("vue").Raw<typeof import("@toast-ui/calendar/*").default>;
    emitEvents: readonly ["selectDateTime", "beforeCreateEvent", "beforeUpdateEvent", "beforeDeleteEvent", "afterRenderEvent", "clickDayName", "clickEvent"];
    emits: (event: "selectDateTime" | "beforeCreateEvent" | "beforeUpdateEvent" | "beforeDeleteEvent" | "afterRenderEvent" | "clickDayName" | "clickEvent", ...args: any[]) => void;
    attrs: {
        [x: string]: unknown;
    };
    props: any;
    instance: import("vue").Ref<any, any>;
    containerRef: import("vue").Ref<Element | null, Element | null>;
    addEvtListeners: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("selectDateTime" | "beforeCreateEvent" | "beforeUpdateEvent" | "beforeDeleteEvent" | "afterRenderEvent" | "clickDayName" | "clickEvent")[], "selectDateTime" | "beforeCreateEvent" | "beforeUpdateEvent" | "beforeDeleteEvent" | "afterRenderEvent" | "clickDayName" | "clickEvent", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    view: {
        type: StringConstructor;
        required: true;
    };
    useFormPopup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    useDetailPopup: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    isReadOnly: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    usageStatistics: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    gridSelection: {
        type: (BooleanConstructor | ObjectConstructor)[];
        required: false;
        default: boolean;
    };
    week: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    month: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    timezone: {
        type: ObjectConstructor;
        required: true;
        default: () => {
            zones: {
                timezoneName: string;
                displayLabel: string;
                tooltip: string;
            }[];
        };
    };
    theme: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    template: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
    };
    calendars: {
        type: ArrayConstructor;
        required: true;
    };
    events: {
        type: ArrayConstructor;
        required: true;
    };
    eventFilter: {
        type: FunctionConstructor;
        required: false;
        default: () => () => never[];
    };
}>> & Readonly<{
    onSelectDateTime?: ((...args: any[]) => any) | undefined;
    onBeforeCreateEvent?: ((...args: any[]) => any) | undefined;
    onBeforeUpdateEvent?: ((...args: any[]) => any) | undefined;
    onBeforeDeleteEvent?: ((...args: any[]) => any) | undefined;
    onAfterRenderEvent?: ((...args: any[]) => any) | undefined;
    onClickDayName?: ((...args: any[]) => any) | undefined;
    onClickEvent?: ((...args: any[]) => any) | undefined;
}>, {
    useFormPopup: boolean;
    useDetailPopup: boolean;
    isReadOnly: boolean;
    usageStatistics: boolean;
    gridSelection: boolean | Record<string, any>;
    week: Record<string, any>;
    month: Record<string, any>;
    timezone: Record<string, any>;
    theme: Record<string, any>;
    template: Record<string, any>;
    eventFilter: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default TuiCalendar;
