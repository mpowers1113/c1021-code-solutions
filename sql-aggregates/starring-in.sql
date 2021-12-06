select "g"."name" as "genre",
count("f".*) as "films"
from "genres" as "g"
join "filmCategory" using ("genreId")
join "films" as "f" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
group by "g"."name";