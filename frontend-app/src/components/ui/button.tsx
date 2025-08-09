import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        // Gaming variants using your color theme
        gaming:
          "bg-gradient-to-r from-[#A55FFF] to-[#FF85FF] hover:from-[#6C2BD9] hover:to-[#A55FFF] text-white font-bold shadow-gaming-lg hover:shadow-gaming-xl hover:scale-105 focus-visible:ring-[#A55FFF]/30",
        "gaming-edit":
          "bg-gaming-bg-card border border-gaming-border text-gaming-purple hover:border-gaming-purple-light hover:bg-gaming-purple/10 hover:text-gaming-purple-light transition-all duration-300",
        "gaming-delete":
          "bg-gaming-bg-card border border-red-500/30 text-red-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300",
        "gaming-outline":
          "border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300",
        "gaming-gold":
          "bg-gradient-to-r from-gaming-gold to-gaming-gold-bright text-black hover:from-gaming-gold-bright hover:to-gaming-gold shadow-gold-md hover:shadow-gold-hover transition-all duration-300",

        //   gaming:
        //   "bg-gradient-to-r from-gaming-purple to-gaming-purple-light text-white hover:from-gaming-purple-light hover:to-gaming-pink shadow-gaming-button hover:shadow-gaming-hover transition-all duration-300",
        // "gaming-outline":
        //   "border-2 border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300",
        // "gaming-edit":
        //   "bg-gaming-bg-card border border-gaming-border text-gaming-purple hover:border-gaming-purple-light hover:bg-gaming-purple/10 hover:text-gaming-purple-light transition-all duration-300",
        // "gaming-delete":
        //   "bg-gaming-bg-card border border-red-500/30 text-red-400 hover:border-red-500 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300",
        // "gaming-gold":
        //   "bg-gradient-to-r from-gaming-gold to-gaming-gold-bright text-black hover:from-gaming-gold-bright hover:to-gaming-gold shadow-gold-md hover:shadow-gold-hover transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
