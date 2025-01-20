// Define the interface for selectable values
export interface SelectableOption {
    value: string;
    label: string;
}

// Define the interface for the field prop
export interface Field {
    fieldName: string;
    selectableValues?: string[]; // Optional array of selectable values
}

// Define the props interface for the Dropdown component
export interface DropdownProps {
    field: Field;
}