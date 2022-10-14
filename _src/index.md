---
title: NBA2k Reference
layout: base
---
<div class="container flow">

<!-- ## Games

{% for game in games %}
  * [{{ game.title }}](/{{ game.short_name | slugify }}/)</p>
{% endfor %} -->

## Teams

<ul role="list" class="grid">
{% for team in teams %}
  <li><a href="/team/{{ team.abbr | slugify }}/"><img src="/assets/icons/{{ team.name | slugify }}.svg" width="80" height="80" alt="{{ team.name }}"></a></li>
{% endfor %}
</ul>

<!-- ## Players

{% for player in players %}
  * [{{ player.first_name }} {{ player.last_name }}](/player/{{ player.id }}/)
{% endfor %} -->

</div>
