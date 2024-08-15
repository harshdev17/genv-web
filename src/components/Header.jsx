import React from 'react'

const Header = () => {
  return (
    <header class="sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all bg-transparent">
    <div class="container max-w-6xl flex h-14 items-center justify-between py-4"><div class="flex gap-6 md:gap-10">
      <a class="flex items-center space-x-1.5" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-puzzle">

        </svg><span class="font-urban text-xl font-bold">SaaS Starter</span></a><nav class="hidden gap-6 md:flex"><a class="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60" href="/pricing">Pricing</a><a class="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60" href="/blog">Blog</a><a class="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60" href="/docs">Documentation</a></nav></div><div class="flex items-center space-x-3">
        <button class="items-center justify-center text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background select-none active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-full hidden gap-2 px-5 md:flex" fdprocessedid="nhb1m"><span>Sign In</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right size-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></header>
  )
}

export default Header
