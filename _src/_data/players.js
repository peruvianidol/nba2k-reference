const {createClient} = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async function fetchPlayers() {
  let { data } = await supabase
  .from('players')
  .select('*');

  return data;
}