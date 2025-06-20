import React from "react"

const Button = React.forwardRef<React.HTMLAttributes<HTMLButtonElement>, React.HTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 animate-pulse-button button-glow ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

const Card = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`rounded-md border bg-card text-card-foreground shadow-sm ${className}`} {...props} ref={ref}>
      {children}
    </div>
  ),
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} ref={ref}>
      {children}
    </div>
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<React.HTMLAttributes<HTMLHeadingElement>, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} ref={ref}>
      {children}
    </h3>
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  React.HTMLAttributes<HTMLParagraphElement>,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} ref={ref}>
    {children}
  </p>
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={`p-6 pt-0 ${className}`} {...props} ref={ref}>
      {children}
    </div>
  ),
)
CardContent.displayName = "CardContent"

export { Button, Card, CardHeader, CardTitle, CardContent, CardDescription }
