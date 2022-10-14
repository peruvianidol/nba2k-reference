const {createClient} = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async function fetchTeams() {
  let { data } = await supabase
  .from('teams')
  .select('city, name, abbr');
  
  return data;
}
