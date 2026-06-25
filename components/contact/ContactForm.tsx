'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validation/contact';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const SUBJECTS = ['Collaboration', 'Hire Me', 'Just Saying Hi'] as const;

const inputBase = [
  'w-full bg-obsidian-4 border border-obsidian-border',
  'text-ink-primary font-body px-4 py-3',
  'placeholder:text-ink-muted',
  'outline-none transition-[border-color,box-shadow] duration-150',
  'focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)]',
].join(' ');

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setServerError(null);

    const payload = {
      ...data,
      hp_field: '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setServerError(
          (json as { error?: string }).error ??
            'Something went wrong. Please try again later.'
        );
      }
    } catch {
      setServerError('Something went wrong. Please try again later.');
    }
  }

  if (submitted) {
    return (
      <pre className="font-mono text-sm leading-relaxed">
        <span className="text-ink-muted">{'- status: unreached'}</span>
        {'\n'}
        <span className="text-gold">{'+ status: message received'}</span>
        {'\n'}
        <span className="text-gold">{'+ response_time: < 24h'}</span>
      </pre>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="hp_field" className="sr-only">
          Leave empty
        </label>
        <input
          id="hp_field"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          {...register('hp_field' as keyof ContactFormData)}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="font-body text-[13px] text-ink-secondary mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={inputBase}
          {...register('name')}
        />
        {errors.name && (
          <p className="font-body text-xs text-status-error mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-body text-[13px] text-ink-secondary mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputBase}
          {...register('email')}
        />
        {errors.email && (
          <p className="font-body text-xs text-status-error mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="subject"
          className="font-body text-[13px] text-ink-secondary mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          className={cn(inputBase, 'cursor-pointer')}
          {...register('subject')}
        >
          <option value="" disabled>
            Select a subject
          </option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="font-body text-xs text-status-error mt-1" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="font-body text-[13px] text-ink-secondary mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What's on your mind?"
          className={cn(inputBase, 'resize-y')}
          {...register('message')}
        />
        {errors.message && (
          <p className="font-body text-xs text-status-error mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Button
          variant="gold"
          type="submit"
          disabled={isSubmitting}
          className="self-start"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </Button>

        {serverError && (
          <p className="font-body text-sm text-status-error" role="alert">
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
}