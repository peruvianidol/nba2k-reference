---
layout: base
---

# NBA2k Reference

{% for team in teams %}
  * {{ team.city }} {{ team.name }}</p>
{% endfor %}
