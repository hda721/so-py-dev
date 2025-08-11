// src/supabaseClient.ts
console.log("SUPABASE_URL from env:", import.meta.env.VITE_SUPABASE_URL);
console.log("SUPABASE_ANON_KEY from env:", import.meta.env.VITE_SUPABASE_ANON_KEY);


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
