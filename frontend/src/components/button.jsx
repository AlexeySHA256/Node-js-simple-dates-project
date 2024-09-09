import clsx from "clsx";


export function Button({ children, className, size, variant }) {
    const buttonClassName = clsx(
        "transition-colors", 
        className,
        {
            md: "rounded px-6 py-2 leading-tight text-sm",
            lg: "rounded-lg px-5 py-2 leading-tight text-2xl",
        }[size],
        {
            primary: "bg-orange-400 hover:bg-orange-500 text-white",
            outline: "border border-orange-400 text-orange-400 hover:bg-orange-200",
        }[variant]
    );
    return (
        <button className={buttonClassName}>{children}</button>
    )
}