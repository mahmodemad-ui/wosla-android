import { createClient } from '@supabase/supabase-js';
const runtimeConfig = typeof window !== 'undefined' ? (window.WOSLA_CONFIG || {}) : {};
const url = runtimeConfig.supabaseUrl || import.meta.env.VITE_SUPABASE_URL;
const key = runtimeConfig.supabaseAnonKey || import.meta.env.VITE_SUPABASE_ANON_KEY;
export const configured = Boolean(url && key && !url.includes('YOUR_PROJECT') && !key.includes('YOUR_SUPABASE'));
export const supabase = configured ? createClient(url, key, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }) : null;
