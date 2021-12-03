select "c"."name", "a"."line1", "a"."district"
from "cities" as "c"
join "addresses" as "a" using ("cityId");
        