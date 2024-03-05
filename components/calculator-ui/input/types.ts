export interface InputProps {
  onValuePressed: (value: string) => void;
  onActionPressed: (
    action: "clear" | "toggle-negative" | "decimal-add" | "equal"
  ) => void;
}
