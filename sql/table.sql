-- DATABASE BEGIN
CREATE DATABASE dvd_library;
-- DATABASE END

-- TABLE BEGIN
CREATE TABLE friend (
    friend_id INT PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100),
    phone_number VARCHAR(20)
);

CREATE TABLE dvd (
    dvd_id INT PRIMARY KEY,
    title VARCHAR(100),
    actor_name VARCHAR(100)
);

CREATE TABLE loan (
    loan_id INT PRIMARY KEY,
    friend_id INT,
    dvd_id INT,
    loan_date DATE,
    return_date DATE,
    FOREIGN KEY (friend_id) REFERENCES friend(friend_id),
    FOREIGN KEY (dvd_id) REFERENCES dvd(dvd_id)
);
-- TABLE END

-- INSERT DATA BEGIN
INSERT INTO friend (friend_id, name, address, email, phone_number) VALUES
(1, 'Andi', 'Jl. Merdeka No. 10', 'andi@gmail.com', '081234567890'),
(2, 'Budi', 'Jl. Kemerdekaan No. 20', 'budi@gmail.com', '081234567891'),
(3, 'Citra', 'Jl. Pancasila No. 30', 'citra@gmail.com', '081234567892'),
(4, 'Dina', 'Jl. Proklamasi No. 40', 'dina@gmail.com', '081234567893'),
(5, 'Eko', 'Jl. Sudirman No. 50', 'eko@gmail.com', '081234567894');

INSERT INTO dvd (dvd_id, title, actor_name) VALUES
(1, 'Die Another Day', 'Pierce Brosnan'),
(2, 'Inception', 'Leonardo DiCaprio'),
(3, 'Interstellar', 'Matthew McConaughey'),
(4, 'The Matrix', 'Keanu Reeves'),
(5, 'Avatar', 'Sam Worthington');

INSERT INTO loan (loan_id, friend_id, dvd_id, loan_date, return_date) VALUES
(1, 1, 2, '2024-01-01', '2024-01-07'),
(2, 2, 1, '2024-01-05', '2024-01-12'),
(3, 3, 3, '2024-01-10', '2024-01-17'),
(4, 4, 4, '2024-02-01', '2024-02-08'),
(5, 5, 5, '2024-02-03', '2024-02-10'),
(6, 5, 4, '2024-03-03', '2024-03-10'),
(7, 5, 3, '2024-04-03', '2024-05-11');
-- INSERT DATA END

-- SELECT DATA BEGIN
SELECT 
    dvd.title, 
    friend.name
FROM loan
INNER JOIN dvd ON loan.dvd_id = dvd.dvd_id
INNER JOIN friend ON loan.friend_id = friend.friend_id
WHERE MONTH(loan.loan_date) = 1;

SELECT 
    friend.name, 
    COUNT(loan.friend_id) AS loan_amound
FROM loan
INNER JOIN friend ON loan.friend_id = friend.friend_id
GROUP BY loan.friend_id
ORDER BY loan_amound DESC;

SELECT 
    MAX(loan.loan_date) as last_borrowed
FROM loan
JOIN dvd ON loan.dvd_id = dvd.dvd_id
WHERE dvd.title = 'Die Another Day';

-- SELECT DATA END

