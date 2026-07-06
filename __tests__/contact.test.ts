import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validation/contact'

describe('Contact form validation', () => {
  const validData = {
    name: 'Aditya',
    email: 'adi@example.com',
    subject: 'Collaboration' as const,
    message: 'Hello, I have a project in mind.',
  }

  it('accepts valid input', () => {
    const result = contactSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('rejects name shorter than 2 characters', () => {
    const result = contactSchema.safeParse({ ...validData, name: 'A' })
    expect(result.success).toBe(false)
  })

  it('rejects name longer than 100 characters', () => {
    const result = contactSchema.safeParse({ ...validData, name: 'A'.repeat(101) })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ ...validData, email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid subject', () => {
    const result = contactSchema.safeParse({ ...validData, subject: 'Invalid' })
    expect(result.success).toBe(false)
  })

  it('rejects message shorter than 10 characters', () => {
    const result = contactSchema.safeParse({ ...validData, message: 'Hi' })
    expect(result.success).toBe(false)
  })

  it('rejects message longer than 5000 characters', () => {
    const result = contactSchema.safeParse({ ...validData, message: 'A'.repeat(5001) })
    expect(result.success).toBe(false)
  })
})