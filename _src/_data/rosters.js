const {createClient} = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async function fetchRosters() {
  let { data, error } = await supabase
  .from('rosters')
  .select(`
    position,
    team_id,
    info:players(*, ratings(overall))`);
  
  // let log = JSON.stringify(data, null, 2);
  // console.log(log);

  if (error) {
    console.log('error: ' + error);
  }

  return data;
}