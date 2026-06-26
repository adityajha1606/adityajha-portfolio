'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/lib/validation/contact';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const SUBJECTS = ['Collaboration', 'Hire Me', 'Just Saying Hi'] as const;

const inputBase = [
  'w-full bg-bone border-2 border-ink',
  'text-ink font-body font-medium px-4 py-3',
  'placeholder:text-ink/30',
  'outline-none transition-[border-color,box-shadow] duration-150',
  'focus:border-strike focus:shadow-[3px_3px_0_var(--color-strike)]',
].join(' ');

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  const onError = () => {
    const fieldNames = Object.keys(errors) as (keyof ContactFormData)[];
    if (fieldNames.length > 0) {
      setFocus(fieldNames[0]);
    }
  };

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
        <span className="text-ink/50">{'- status: unreached'}</span>
        {'\n'}
        <span className="text-strike">{'+ status: message received'}</span>
        {'\n'}
        <span className="text-strike">{'+ response_time: < 24h'}</span>
      </pre>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
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
          className="font-body font-medium text-xs uppercase tracking-widest text-ink mb-1.5"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={inputBase}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
        />
        {errors.name && (
          <p id="name-error" className="font-mono text-[11px] font-bold text-fault mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-body font-medium text-xs uppercase tracking-widest text-ink mb-1.5"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          className={inputBase}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" className="font-mono text-[11px] font-bold text-fault mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="subject"
          className="font-body font-medium text-xs uppercase tracking-widest text-ink mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          className={cn(inputBase, 'cursor-pointer')}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
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
          <p id="subject-error" className="font-mono text-[11px] font-bold text-fault mt-1" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="font-body font-medium text-xs uppercase tracking-widest text-ink mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="What's on your mind?"
          className={cn(inputBase, 'resize-y')}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="font-mono text-[11px] font-bold text-fault mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting}
          className="self-start"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </Button>

        {serverError && (
          <p className="font-mono text-[11px] font-bold text-fault" role="alert">
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
}