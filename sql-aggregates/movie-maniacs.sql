select "c"."firstName" as "firstname",
"c"."lastName" as "lastName",
sum("amount") as "totalAmount"
from "payments"
join "customers" as "c" using ("customerId")
group by "c"."customerId"
order by "totalAmount" desc;