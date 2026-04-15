import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wpooqukyfobmnjckqvnt.supabase.co";
const supabaseKey =
  "sb_publishable_Ad9dXO6cNUH__vokdOQW7Q_n1OQ6fbM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
