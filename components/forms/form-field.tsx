import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string[];
  helperText?: string;
  textarea?: boolean;
  disabled?: boolean;
}

export const FormField = ({
  label,
  name,
  id,
  placeholder,
  required = false,
  onChange,
  error,
  helperText,
  textarea,
  disabled,
}: FormFieldProps) => {
  const hasError = error && error.length > 0;

  return (
    <div className="space-y-1.5">

      {/* LABEL */}
      <Label
        htmlFor={id}
        className={cn(
          "text-sm font-medium",
          hasError && "text-destructive"
        )}
      >
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>

      {/* INPUT / TEXTAREA */}
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            "min-h-24 resize-none rounded-xl transition",
            "focus-visible:ring-2 focus-visible:ring-primary/40",
            hasError &&
              "border-destructive focus-visible:ring-destructive/40"
          )}
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={onChange}
          className={cn(
            "h-11 rounded-xl transition",
            "focus-visible:ring-2 focus-visible:ring-primary/40",
            hasError &&
              "border-destructive focus-visible:ring-destructive/40"
          )}
        />
      )}

      {/* HELPER TEXT */}
      {helperText && !hasError && (
        <p className="text-xs text-muted-foreground">
          {helperText}
        </p>
      )}

      {/* ERROR */}
      {hasError && (
        <p className="text-xs text-destructive font-medium">
          {error?.join(", ")}
        </p>
      )}
    </div>
  );
};