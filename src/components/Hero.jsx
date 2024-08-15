import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div>
      <div className="space-y-6 py-12 sm:py-20 lg:py-20">
        <div className="container flex max-w-5xl flex-col items-center gap-5 text-center mx-auto">

          <Link
            href="https://twitter.com/miickasmt/status/1810465801649938857"
            passHref
            legacyBehavior
          >
            <a
              className="inline-flex items-center justify-center text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background select-none active:scale-[0.98] border border-input hover:bg-accent hover:text-accent-foreground h-9 rounded-full px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-3">🎉</span>
              <span className="hidden md:flex">Introducing&nbsp;</span>
              Next Auth Roles Template on
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="ml-2 size-3.5"
              >
                <path
                  d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </Link>
          <h1 className=" text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
            Kick off with a bang with  <span className="font-hero">SaaS Starter</span>
          </h1>

          <p class="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8 hero-text" >Build your next project using Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui, Stripe.</p>
        </div>
      </div>

      <div class="flex justify-center space-x-2 md:space-x-4 btn-animation">
        <a class="inline-flex items-center justify-center text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background select-none active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full gap-2" href="/pricing">
        <span>Go Pricing</span>
        </a><a target="_blank" rel="noreferrer" class="inline-flex items-center justify-center text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background select-none active:scale-[0.98] border border-input hover:bg-accent hover:text-accent-foreground h-11 rounded-full px-5" href="https://github.com/mickasmt/next-saas-stripe-starter"><p>
          <span class="hidden sm:inline-block">Star on</span> GitHub <span class="font-semibold">1.3K</span></p></a></div>
    </div>
  )
}

export default Hero
