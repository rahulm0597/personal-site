"use client";

import { useFormState, useFormStatus } from "react-dom";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
    >
      {pending && (
        <svg
          className="w-4 h-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
      {errors[0]}
    </p>
  );
}

export default function ContactForm() {
  const [state, action] = useFormState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
          <svg
            className="h-6 w-6 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Message sent!
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-6">
      {/* Top-level error banner */}
      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-3 text-sm text-red-700 dark:text-red-400"
        >
          {state.message}
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
          placeholder="Jane Smith"
        />
        <FieldError errors={state.fieldErrors?.name} />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={
            state.fieldErrors?.email ? "email-error" : undefined
          }
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
          placeholder="jane@example.com"
        />
        <FieldError errors={state.fieldErrors?.email} />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors resize-y"
          placeholder="What's on your mind?"
        />
        <FieldError errors={state.fieldErrors?.message} />
      </div>

      <SubmitButton />
    </form>
  );
}
