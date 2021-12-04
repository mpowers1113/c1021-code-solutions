select "c"."firstName" as "customer", 
       "c"."lastName", "p"."amount"
    from "customers" as "c"
    join "payments" as "p" using ("customerId")
    order by "amount" desc
    limit 10;