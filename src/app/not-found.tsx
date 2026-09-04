"use client";

import { Compass } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {

  return (
    <main className="fixed inset-0 z-999 flex items-center justify-center bg-bg-light overflow-hidden px-6">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-accent/10 rounded-full" />

      <div className="relative text-center max-w-md">
        {/* 404 with icon */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-7xl md:text-8xl font-bold text-primary">4</span>
          <span className="bg-primary text-white rounded-2xl p-4 md:p-5">
            <Compass className="w-10 h-10 md:w-12 md:h-12" />
          </span>
          <span className="text-7xl md:text-8xl font-bold text-primary">4</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
         Page Not Found
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/jobs" variant="outline" showIcon={false}>
            Browse Jobs
          </Button>
        </div>
      </div>
    </main>
  );
}