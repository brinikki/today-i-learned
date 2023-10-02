import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pijzctognwscfkmnjkfe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpanpjdG9nbndzY2ZrbW5qa2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMjEyODIsImV4cCI6MTk5Nzc5NzI4Mn0.lRKLPI6xXn7urXgwG5pvfGP-Xo683PE0U1QAGF3wSj8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
