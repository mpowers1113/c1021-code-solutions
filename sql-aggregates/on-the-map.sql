select "c"."name" as "country", 
count("city".*) as "totalCitiesPerCountry"
from "countries" as "c"
join "cities" as "city" using ("countryId")
group by "countryId"
order by "totalCitiesPerCountry" asc;