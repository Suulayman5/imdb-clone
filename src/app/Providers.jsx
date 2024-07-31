'use client'
import { ThemeProvider } from "next-themes"

const Providers = ({ children}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-black dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Providers