-- Write your query below
SELECT employee_id, CASE 
WHEN name NOT LIKE 'M%' AND employee_id % 2 != 0 THEN salary else 0 END AS bonus 
from employees ORDER BY employee_id;