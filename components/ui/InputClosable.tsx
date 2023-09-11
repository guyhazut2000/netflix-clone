import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: "dark" | "light";
}

const InputClosable = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, theme, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(""); // Track the input value

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };

    const handleClearInput = () => {
      setInputValue("");
    };

    const showCloseIcon = inputValue.length > 0;

    return (
      <div className="flex items-center justify-center gap-2 relative">
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "search-input flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
            theme === "dark" ? " text-white bg-black" : "text-black bg-white"
          )}
          ref={ref}
          onChange={handleInputChange}
          value={inputValue}
          {...props}
        />
        {showCloseIcon && (
          <AiOutlineClose
            className="absolute right-2 w-4 h-4 cursor-pointer"
            onClick={handleClearInput}
          />
        )}
      </div>
    );
  }
);

InputClosable.displayName = "InputCloseable";

export { InputClosable };
