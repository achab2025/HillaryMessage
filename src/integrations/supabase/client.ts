// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oawtkllxolkkvvgropfb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hd3RrbGx4b2xra3Z2Z3JvcGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NzQyNjAsImV4cCI6MjA2NTQ1MDI2MH0.Vk0LDDcJAGMtUc-HJ3Yp9b52FTYS0emY9MmVPYzAkOM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);