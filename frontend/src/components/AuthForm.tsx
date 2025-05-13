"use client";

import { useState } from 'react';

type AuthFormProps = {
  type: 'login' | 'register';
  onSubmit?: (data: { email: string; password: string }) => void;
};

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.({ email, password });
      }}
    >
      <h2>{type === 'login' ? 'Login' : 'Register'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
} 