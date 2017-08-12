-- CREATE TABLE users (
--     email VARCHAR(255) PRIMARY KEY,
--     crated_at TIMESTAMP DEFAULT NOW()
-- );

-- Challenge 1: Find Earliest Date A User Joined
SELECT 
    DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date 
FROM users 
ORDER BY created_at 
LIMIT 1;

-- Challenge 2: Find Email Of The First(Earliest)User
SELECT
    email,
    created_at
FROM users
ORDER BY created_at
LIMIT 1;

-- Challenge 3: Find The Month Name And Number Of User Joining On That Month
SELECT 
    DATE_FORMAT(created_at, '%M') AS month,
    COUNT(*) AS count
FROM users
GROUP BY month
ORDER BY count DESC;

-- Challenge 4: Count Number of Users with Yahoo Emails
SELECT
    COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com';

-- Challenge 5: Calculate Total Number of Users for Each Email Host
SELECT
    CASE 
        WHEN email LIKE '%@gmail.com' THEN 'gmail'
        WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;

 


    