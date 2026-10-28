import {createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://rbblfyopzipytrjtqsmb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_LjgabWJf2UZg_o_8FWZ9eQ_NNaLBX51";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const lista = document.getElementById("lista");

function obtenertareas() {
    const { data, error } = supabase
    .from("tareas")
    .select("*")
    .order ("id", { ascending: false });
}
